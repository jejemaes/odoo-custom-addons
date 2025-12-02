{
    "name": "Rental",
    "version": "1.0",
    "category": "Sales/Rental",
    "summary": "Sale Rental",
    "description": "Sell Rental and Manage Schedule.",
    "author": "jejemaes",
    "depends": ["sale", "resource", "base_automation"],
    "data": [
        # Models
        "models/sale_order_line.xml",
        "models/sale_order.xml",
        "models/product_rental_day.xml",
        "models/product_rental_price.xml",
        "models/product_template.xml",
        "models/resource_resource.xml",
        "models/rental_booking.xml",
        # UI
        "views/product_template_views.xml",
        "views/rental_booking_views.xml",
        "views/resource_resource_views.xml",
        "views/sale_order_views.xml",
        "views/menus.xml",
        # Wizard
        "wizards/create_sale_order.xml",
        "wizards/create_sale_order_actions.xml",
        "wizards/create_sale_order_views.xml",
        # Security
        "security/rental_security.xml",
        "security/ir.model.access.csv",
        # Actions
        "actions/sale_order_line.xml",
        "actions/rental_booking.xml",
        # Data
        "data/product_rental_day_data.xml",
        "data/res_partner_category_data.xml",
        # Constraint SQL
        "models/constraints.sql",
    ],
    "demo": [],
    "license": "OPL-1"
}
