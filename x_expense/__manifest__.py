{
    "name": "Expense",
    "version": "1.0",
    "category": "Productivity/Expense",
    "summary": "Track and Reimbourse Expenses",
    "installable": True,
    "application": False,
    "author": "jejemaes",
    "depends": ["analytic", "mail"],
    "data": [
        # Models
        "models/expense.xml",
        "models/account_analytic_line.xml",
        # Actions
        "actions/expense.xml",
        "actions/cron.xml",
        # Security
        "security/expense_security.xml",
        "security/ir_model_access.xml",
        # Views
        "views/expense_views.xml",
        "views/menus.xml",
        # Data
        "data/inbox_data.xml",
    ],
    "assets": {},
    "demo": [],
    "license": "OPL-1"
}
