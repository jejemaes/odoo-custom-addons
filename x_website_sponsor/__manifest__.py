{
    "name": "Website Sponsors",
    "version": "1.0",
    "category": "Sponsors",
    "summary": "Sponsors on Website",
    "description": "Manage Sponsors.",
    "author": "jejemaes",
    "depends": ["website_partner", "x_sponsor"],
    "installable": True,
    "application": False,
    "data": [
        # UI
        "views/snippets/s_sponsor_snippet_preview_data.xml",
        "views/snippets/s_sponsors.xml",
        "views/snippets/snippets.xml",
        "views/sponsor_sponsor_templates.xml",
        # Data
        "data/snippets_data.xml",
        # Actions
        "actions/website_controller_sponsors.xml",
    ],
    "demo": [],
    "license": "OPL-1",
    'assets': {
        'web.assets_frontend': [
            'x_website_sponsor/static/src/snippets/**/*.js',
        ],
        'website.assets_editor': [
            # 'x_website_sponsor/static/src/js/systray_items/*.js',
        ],
        'website.website_builder_assets': [
            'x_website_sponsor/static/src/website_builder/**/*',
        ],
    },
}
