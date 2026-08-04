import { registry } from "@web/core/registry";
import { calendarView } from "@web/views/calendar/calendar_view";
import { CalendarRenderer } from "@web/views/calendar/calendar_renderer";
import { CalendarCommonRenderer } from "@web/views/calendar/calendar_common/calendar_common_renderer";
import { PlanningShiftCalendarPopover } from "./shift_calendar_popover";

export class PlanningShiftCalendarCommonRenderer extends CalendarCommonRenderer {
    static components = {
        ...CalendarCommonRenderer.components,
        Popover: PlanningShiftCalendarPopover,
    };
}

export class PlanningShiftCalendarRenderer extends CalendarRenderer {
    static components = {
        ...CalendarRenderer.components,
        day: PlanningShiftCalendarCommonRenderer,
        week: PlanningShiftCalendarCommonRenderer,
        month: PlanningShiftCalendarCommonRenderer,
    };
}

export const planningShiftCalendarView = {
    ...calendarView,
    Renderer: PlanningShiftCalendarRenderer,
};

registry.category("views").add("x_planning_shift_calendar", planningShiftCalendarView);
