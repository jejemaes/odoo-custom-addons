{
    "name": "Project",
    "version": "1.0",
    'category': 'Productivity/Project',
    "summary": "Project and Tasks",
    "description": "Create Project and Track Tasks To Do.",
    "author": "jejemaes",
    "depends": ["base", "mail", "base_automation"],
    "data": [
        # Models
        "models/project_project.xml",
        "models/project_stage.xml",
        "models/project_task.xml",
        # Actions
        "actions/project_task.xml",
        # UI
        "views/project_stage_views.xml",
        "views/project_task_views.xml",
        "views/project_project_views.xml",
        "views/menus.xml",
        # Security
        "security/project_security.xml",
        "security/ir_model_access.xml",
        # "actions/rental_booking.xml",
        # Data
        # "data/product_rental_day_data.xml",
        # "data/res_partner_category_data.xml",
    ],
    "demo": [],
    "license": "OPL-1",
    "assets": {
        "web.assets_backend": [
            "x_project/static/src/views/kanban.js",
        ],
    },
}
