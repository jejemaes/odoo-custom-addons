import { useService } from "@web/core/utils/hooks";
import { CalendarCommonPopover } from "@web/views/calendar/calendar_common/calendar_common_popover";

export class PlanningShiftCalendarPopover extends CalendarCommonPopover {
    static subTemplates = {
        ...CalendarCommonPopover.subTemplates,
        footer: "x_planning.PlanningShiftCalendarPopover.footer",
    };

    setup() {
        super.setup();
        this.actionService = useService("action");
    }

    get canTakeIt() {
        return !this.props.record.rawRecord.x_partner_id;
    }

    async onTakeIt() {
        await this.actionService.doAction("x_planning.planning_shift_action_take_it", {
            additionalContext: {
                active_id: this.props.record.id,
                active_ids: [this.props.record.id],
                active_model: "x_planning.shift",
            },
        });
        this.props.close();
        await this.props.model.load();
    }
}
