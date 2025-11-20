/** @odoo-module **/

import { CANCEL_GLOBAL_CLICK, KanbanRecord } from "@web/views/kanban/kanban_record";
import { useService } from "@web/core/utils/hooks";
import { useFileViewer } from "@web/core/file_viewer/file_viewer_hook";


export class DocumentKanbanRecord extends KanbanRecord {
    setup() {
        super.setup();
        // this.store = useService("mail.store");
        // this.fileViewer = useFileViewer();
    }
    /**
     * @override
     *
     * Override to open the preview upon clicking the image, if compatible.
     */
    async onGlobalClick(ev) {
        if (ev.target.closest(CANCEL_GLOBAL_CLICK)) {
            return;
        }
        if (this.props.record.data.x_document_type == 'folder') {
            const action = await this.action.loadAction("document.document_document_action");
            action.display_name = this.props.record.data.x_name; // rename action with folder name
            action.context.search_default_root_documents = 0;
            action.context.search_default_x_folder_id = this.props.record.data.id;
            action.context.default_x_folder_id = this.props.record.data.id;
            this.action.doAction(action);
        } else {
            // TODO: use the fileViewer to have a preview of document from the kanban record
            /*if (ev.target.closest(".o_kanban_previewer")) {
                const attachment = this.store.Attachment.insert({
                    id: this.props.record.data.ir_attachment_id[0],
                    filename: this.props.record.data.name,
                    name: this.props.record.data.name,
                    mimetype: this.props.record.data.mimetype,
                });
                this.fileViewer.open(attachment)
                return;
            }*/
            return super.onGlobalClick(...arguments);
        }

    }
}
