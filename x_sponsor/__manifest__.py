{
    "name": "Sponsor",
    "version": "1.0",
    "category": "Sponsors",
    "summary": "Sponsors",
    "description": "Manage Sponsors.",
    "author": "jejemaes",
    "depends": ["product"],
    "installable": True,
    "application": True,
    "data": [
        # Models
        "models/sponsor_payment_method.xml",
        "models/sponsor_stage.xml",
        "models/sponsor_contract.xml",
        "models/sponsor_sponsor.xml",
        # UI
        "views/sponsor_payment_method_views.xml",
        "views/sponsor_stage_views.xml",
        "views/sponsor_contract_views.xml",
        "views/sponsor_sponsor_views.xml",
        "views/menus.xml",
        # Security
        "security/sponsor_security.xml",
        "security/ir_model_access.xml",
        # Data
        "data/sponsor_stage_data.xml",
    ],
    "demo": [],
    "license": "OPL-1",
    "assets": {}
}
