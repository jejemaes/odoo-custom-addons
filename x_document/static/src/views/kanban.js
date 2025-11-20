/** @odoo-module */

import { registry } from '@web/core/registry';

import { kanbanView } from '@web/views/kanban/kanban_view';
import { KanbanController } from '@web/views/kanban/kanban_controller';
import { KanbanRenderer } from '@web/views/kanban/kanban_renderer';

import { DocumentFileUploader } from '../components/document_file_uploader';
import { DocumentCreateMultiButtonMixin } from '../mixins/document_create_multi_button';
import { DocumentKanbanRecord } from "./kanban_record";


export class DocumentKanbanRenderer extends KanbanRenderer {
    static components = {
        ...KanbanRenderer.components,
        KanbanRecord: DocumentKanbanRecord,
    };
}

export class DocumentKanbanController extends DocumentCreateMultiButtonMixin(KanbanController) {
    static template = `x_document.KanbanView`;
    static components = {
        ...DocumentCreateMultiButtonMixin(KanbanController).components,
        DocumentFileUploader,
    };
}

registry.category('views').add('document_kanban', {
    ...kanbanView,
    Controller: DocumentKanbanController,
    Renderer: DocumentKanbanRenderer,
});
