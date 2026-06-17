{
    "name": "Sponsor",
    "version": "1.0",
    "category": "Sponsors",
    "summary": "Sponsors",
    "description": "Manage Sponsors.",
    "author": "jejemaes",
    "depends": ["product", "base_automation"],
    "installable": True,
    "application": False,
    "data": [
        # Models
        "models/sponsor_payment_method.xml",
        "models/sponsor_stage.xml",
        "models/sponsor_contract.xml",
        "models/sponsor_sponsor.xml",
        # Actions
        "actions/sponsor_sponsor_actions.xml",
        "actions/sponsor_contract_actions.xml",
        # Report
        "report/ir_actions_report_templates.xml",
        "report/ir_actions_report.xml",
        # UI
        "views/sponsor_payment_method_views.xml",
        "views/sponsor_stage_views.xml",
        "views/sponsor_sponsor_views.xml",
        "views/sponsor_contract_views.xml",
        "views/menus.xml",
        # Security
        "security/sponsor_security.xml",
        "security/ir_model_access.xml",
        # Data
        "data/sponsor_stage_data.xml",
        "data/mail_template_data.xml",
        "data/res_partner_category_data.xml",
    ],
    "demo": [
        "data/sponsor_payment_demo.xml",
    ],
    "license": "OPL-1",
    "assets": {}
}
