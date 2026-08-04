{
    "name": "Website Planning",
    "version": "1.0",
    "category": "Productivity/Planning",
    "summary": "Share planning sheets on the website",
    "description": "Share a planning sheet through a public tokenized URL.",
    "author": "jejemaes",
    "depends": ["website", "x_planning"],
    "installable": True,
    "application": False,
    "data": [
        # Models
        "models/planning_sheet.xml",
        # Actions
        "actions/planning_sheet.xml",
        "actions/website_controller_planning_sheet.xml",
        # UI
        "views/planning_sheet_views.xml",
        "views/planning_sheet_templates.xml",
    ],
    "demo": [],
    "license": "OPL-1",
}
