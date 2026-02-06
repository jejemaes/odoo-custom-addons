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
        "models/budget_budget.xml",
        "models/budget_budget_position.xml",
        "models/analytic.xml",
        "models/budget_budget_line.xml",
        # Actions
        "actions/budget_budget.xml",
        # Report
        "report/ir_actions_report_templates.xml",
        "report/ir_actions_report.xml",
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
        "web.report_assets_common": [
            "x_budget/static/src/scss/budget_report.scss",
        ],
    },
    "demo": [],
    "license": "OPL-1"
}
