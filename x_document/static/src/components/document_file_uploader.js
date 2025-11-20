import { _t } from "@web/core/l10n/translation";
import { useService } from "@web/core/utils/hooks";
import { FileUploader } from "@web/views/fields/file_handler";
import { standardWidgetProps } from "@web/views/widgets/standard_widget_props";

import { Component, markup } from "@odoo/owl";


export class DocumentFileUploader extends Component {
    static template = "x_document.DocumentFileUploader";
    static components = {
        FileUploader,
    };

    setup() {
        this.orm = useService("orm");
        this.action = useService("action");
        this.notification = useService("notification");
        this.documentIdsToProcess = [];
    }

    // To pass extra context while creating record
    getExtraContext() {
        return {};
    }

    async onFileUploaded(file) {
        // Prepare document values (to create)
        const documentData = {
            x_name: file.name,
            x_document_type: 'file',
            x_file_content: file.data,
            x_date: new Date().toISOString().split('T')[0],
        };

        // Set Searchpanel filters as create values
        const isTagFilter = (s) => s.type === "filter" && s.fieldName === "x_tag_ids";
        const isFolderCategory = (s) => s.type === "category" && s.fieldName === "x_folder_id";

        const tagsSection = this.env.searchModel.getSections().filter(isTagFilter)[0];
        const folderSection = this.env.searchModel.getSections().filter(isFolderCategory)[0];

        if (tagsSection){
            const x2mCommand = 4; // 4 is to add record in the m2m relation
            documentData["x_tag_ids"] = [...tagsSection.values.values()].filter((value) => value.checked).map((value) => [x2mCommand, value.id]);
        }
        if (folderSection) {
            documentData["x_folder_id"] = folderSection.activeValueId;
        }
        // propagate context to set default value (user and folder)
        const [document_id] = await this.orm.create("x_document.document", [documentData], {context: this.env.searchModel.context});
        this.documentIdsToProcess.push(document_id);
    }

    async onUploadComplete() {
        const currentAction = { ...this.action.currentController.action };
        currentAction["domain"] = [["id", "in", this.documentIdsToProcess]];
        currentAction["display_name"] = _t("Newly Uploaded Documents");

        this.documentIdsToProcess = []; // reset

        this.action.doAction(currentAction);
    }
}
