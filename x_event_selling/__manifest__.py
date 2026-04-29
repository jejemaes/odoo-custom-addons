{
    "name": "Event Selling",
    "version": "1.0",
    "category": "Sales",
    "summary": "Selling Events Tickets.",
    "description": "Selling Events Tickets.",
    "author": "jejemaes",
    "depends": ["event"],
    "installable": True,
    "application": False,
    "data": [
        # Models
        "models/event_event.xml",
        "models/event_event_ticket.xml",
        "models/event_registration.xml",
        # actions
        "actions/event_registration_actions.xml",
        # UI
        "views/event_event_ticket_views.xml",
        "views/event_registration_views.xml",
    ],
    "demo": [],
    "license": "OPL-1",
}
