import { registry } from "@web/core/registry";
import { kanbanView } from "@web/views/kanban/kanban_view";
import { RelationalModel } from "@web/model/relational_model/relational_model";


export class ProjectKanbanModel extends RelationalModel {
    async _webReadGroup(config, cache) {
        /**
         * Overrice to simulate the `read_group_expand`, in order to fullfit the stage without tasks.
         * Doing this here cost 1 more RPC request.
         *
         * Bug: Changing the task' stage in kanban, then going to the parent action (Project kanban), and
         * coming back in project kanban task did not display the empty stages. God knows why.
         **/
        const result = await super._webReadGroup(...arguments);

        if (config.groupBy[0] == 'x_stage_id') {
            const groupMap = {};
            for (const index in result.groups) {
                let group =  result.groups[index];
                groupMap[group.x_stage_id[0]] = group;
            }

            let stages = await this.orm.searchRead('x_project.stage', [['x_project_ids', 'in', config.context.active_ids]], ["display_name"], {order: 'x_sequence'});

            const newGroups = [];
            for (const stage of stages) {
                if (stage.id in groupMap) {
                    newGroups.push(groupMap[stage.id]);
                } else {
                    newGroups.push({
                        x_stage_id: [stage.id, stage.display_name],
                        __count: 0,
                        __extra_domain: [['x_stage_id', '=', stage.id]],
                        __records: [],
                    });
                }
            }

            result.groups = newGroups;
            result.length = newGroups.length;
        }

        return result;
    }
}

export const projectKanbanView = {
    ...kanbanView,
    Model: ProjectKanbanModel,
};

registry.category("views").add("project_kanban", projectKanbanView);
