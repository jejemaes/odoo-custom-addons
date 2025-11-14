# -*- coding: utf-8 -*-

{
    'name': 'Contact Directory',
    'category': 'Sales/CRM',
    'sequence': 200,
    "author": "jejemaes",
    'summary': 'Centralize your address book',
    'description': """
This module gives you a quick view of your contacts directory, accessible from your home page.
You can track your vendors, customers and other contacts.
""",
    'depends': ['base', 'mail'],
    'data': [
        'views/res_partner_views.xml',
    ],
    'license': 'LGPL-3',
}
