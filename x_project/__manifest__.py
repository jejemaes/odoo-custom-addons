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
        "models/project_project_template.xml",
        "models/project_stage.xml",
        "models/project_task.xml",
        "models/project_task_template.xml",
        # Actions
        "actions/project_task.xml",
        # UI
        "views/project_stage_views.xml",
        "views/project_task_views.xml",
        "views/project_task_template_views.xml",
        "views/project_project_views.xml",
        "views/project_project_template_views.xml",
        "views/menus.xml",
        # Wizards
        "wizards/project_create_from_template.xml",
        "wizards/project_create_from_template_actions.xml",
        "wizards/project_create_from_template_views.xml",
        # Security
        "security/project_security.xml",
        "security/ir_model_access.xml",
    ],
    "demo": [],
    "license": "OPL-1",
    "assets": {
        "web.assets_backend": [
            "x_project/static/src/mixins/project_create_button.xml",
            "x_project/static/src/mixins/project_create_button.js",
            "x_project/static/src/views/kanban_project.xml",
            "x_project/static/src/views/kanban_project.js",
            "x_project/static/src/views/kanban.js",
        ],
    },
}
