/** @odoo-module */

import { registry } from '@web/core/registry';
import { useService } from '@web/core/utils/hooks';
import { user } from "@web/core/user";
import { listView } from "@web/views/list/list_view";

import { ListController } from "@web/views/list/list_controller";
import { ListRenderer } from "@web/views/list/list_renderer";
import { onWillStart } from "@odoo/owl";

import { DocumentFileUploader } from '../components/document_file_uploader';
import { DocumentCreateMultiButtonMixin } from '../mixins/document_create_multi_button';


export class DocumentListController extends DocumentCreateMultiButtonMixin(ListController) {
    static template = `x_document.ListView`;
    static components = {
        ...DocumentCreateMultiButtonMixin(ListController).components,
        DocumentFileUploader,
    };
}


registry.category('views').add('document_list', {
    ...listView,
    Controller: DocumentListController,
});
