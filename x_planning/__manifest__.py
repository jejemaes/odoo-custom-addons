{
    "name": "Planning",
    "version": "1.0",
    'category': 'Productivity/Planning',
    "summary": "Schedule and planning",
    "description": "Create Planning and manage people time.",
    "author": "jejemaes",
    "depends": ["base", "mail", "base_automation"],
    "data": [
        # Models
        "models/planning_role.xml",
        "models/planning_shift.xml",
        "models/planning_sheet.xml",
        # Wizards
        "wizards/planning_shift_generate.xml",
        "wizards/planning_shift_generate_actions.xml",
        "wizards/planning_shift_generate_views.xml",
        # Security
        "security/planning_security.xml",
        "security/ir_model_access.xml",
        # Actions
        "actions/planning_sheet.xml",
        "actions/planning_shift.xml",
        # Reports
        "report/ir_actions_report.xml",
        "report/ir_actions_report_templates.xml",
        # UI
        "views/planning_role_views.xml",
        "views/planning_shift_views.xml",
        "views/planning_sheet_views.xml",
        "views/menus.xml",
    ],
    "demo": [],
    "license": "OPL-1",
    "assets": {
        "web.assets_backend": [
            "x_planning/static/src/views/shift_calendar/shift_calendar_popover.js",
            "x_planning/static/src/views/shift_calendar/shift_calendar_popover.xml",
            "x_planning/static/src/views/shift_calendar/shift_calendar_view.js",
        ],
    },
}
