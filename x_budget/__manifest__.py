{
    "name": "Budget",
    "version": "1.0",
    'category': 'Accounting/Accounting',
    "summary": "Track Income and Outcome",
    "installable": True,
    "application": False,
    "author": "jejemaes",
    "depends": ["analytic", "mail"],
    "data": [
        # Models
        "models/budget_category.xml",
        "models/analytic.xml",
        "models/budget_budget.xml",
        "models/budget_budget_position.xml",
        "models/budget_budget_line.xml",
        # Actions
        "actions/budget_budget.xml",
        # Views
        "views/budget_budget_line_views.xml",
        "views/budget_budget_views.xml",
        "views/budget_category_views.xml",
        "views/budget_position_views.xml",
        "views/analytic_line_views.xml",
        "views/menus.xml",
        # Security
        "security/budget_security.xml",
        "security/ir_model_access.xml",
        # Constraint SQL
        "models/constraints.sql",
    ],
    "assets": {
        # "web.assets_backend": [
        #     "x_document/static/src/components/document_file_uploader.js",
        #     "x_document/static/src/components/document_file_uploader.xml",
        #     "x_document/static/src/mixins/document_create_multi_button.js",
        #     "x_document/static/src/mixins/document_create_multi_button.xml",
        #     "x_document/static/src/views/kanban.scss",
        #     "x_document/static/src/views/kanban.xml",
        #     "x_document/static/src/views/kanban.js",
        #     "x_document/static/src/views/kanban_record.js",
        #     "x_document/static/src/views/list.xml",
        #     "x_document/static/src/views/list.js",
        # ],
    },
    "demo": [],
    "license": "OPL-1"
}
