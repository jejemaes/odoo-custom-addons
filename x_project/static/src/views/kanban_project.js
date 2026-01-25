import { registry } from "@web/core/registry";
import { kanbanView } from "@web/views/kanban/kanban_view";
import { KanbanController } from '@web/views/kanban/kanban_controller';
import { KanbanRenderer } from '@web/views/kanban/kanban_renderer';
import { ProjectCreateFromTemplateButtonMixin } from '../mixins/project_create_button';



export class ProjectKanbanController extends ProjectCreateFromTemplateButtonMixin(KanbanController) {
    static template = `x_project.KanbanView`;
    static components = {
        ...ProjectCreateFromTemplateButtonMixin(KanbanController).components,
    };
}


export const projectKanbanView = {
    ...kanbanView,
    Controller: ProjectKanbanController,
};

registry.category("views").add("project_kanban", projectKanbanView);
