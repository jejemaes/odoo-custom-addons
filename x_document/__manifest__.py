{
    "name": "Document",
    "version": "1.0",
    "category": "Productivity/Document",
    "summary": "Document Management System",
    "installable": True,
    "application": False,
    "author": "jejemaes",
    "depends": ["base_automation", "mail"],
    "data": [
        # Models
        "models/folder.xml",
        "models/tag_category.xml",
        "models/tag.xml",
        "models/document.xml",
        # Actions
        "actions/document.xml",
        # Views
        "views/folder_views.xml",
        "views/tag_category_views.xml",
        "views/tag_views.xml",
        "views/document_views.xml",
        "views/menus.xml",
        # Security
        "security/document_security.xml",
        "security/ir_model_access.xml",
        # Data
        "data/inbox_data.xml",
        # Report
        "report/ir_actions_report_templates.xml",
        "report/ir_actions_report.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "x_document/static/src/components/document_file_uploader.js",
            "x_document/static/src/components/document_file_uploader.xml",
            "x_document/static/src/mixins/document_create_multi_button.js",
            "x_document/static/src/mixins/document_create_multi_button.xml",
            "x_document/static/src/views/kanban.scss",
            "x_document/static/src/views/kanban.xml",
            "x_document/static/src/views/kanban.js",
            "x_document/static/src/views/kanban_record.js",
            "x_document/static/src/views/list.xml",
            "x_document/static/src/views/list.js",
        ],
    },
    "demo": [],
    "license": "OPL-1"
}
