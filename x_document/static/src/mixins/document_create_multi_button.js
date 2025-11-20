/** @odoo-module **/

import { _t } from "@web/core/l10n/translation";
import { Dropdown } from "@web/core/dropdown/dropdown";
import { DropdownItem } from "@web/core/dropdown/dropdown_item";
import { useBus, useRefListener, useService } from '@web/core/utils/hooks';
import { onWillStart, useRef, useEffect, useState } from "@odoo/owl";


export const DocumentCreateMultiButtonMixin = (T) => class DocumentCreateMultiButtonMixin extends T {
    static components = {
        ...T.components,
        Dropdown,
        DropdownItem,
    };

    setup() {
        super.setup();
        this.notification = useService('notification');
        this.orm = useService('orm');
    }

    async onClickDocumentsText() {
        this.actionService.doAction({
            name: _t("New Text Document"),
            type: "ir.actions.act_window",
            res_model: "x_document.document",
            views: [
                [false, "form"],
            ],
            context: this._getDefaultContext("text", true),
        });
    }
    async onClickDocumentsAddUrl() {
        this.actionService.doAction({
            name: _t("New URL"),
            type: "ir.actions.act_window",
            res_model: "x_document.document",
            views: [
                [false, "form"],
            ],
            context: this._getDefaultContext("url", true),
            target: "new",
        }, {
            fullscreen: this.env.isSmall,
            onClose: async () => {
                await this.env.model.load();
                this.env.model.notify();
            },
        });
    }
    async onClickAddFolder() {
        this.actionService.doAction({
            name: _t("New Folder"),
            type: "ir.actions.act_window",
            res_model: "x_document.folder",
            views: [
                [false, "form"],
            ],
            // context: this._getDefaultContext("folder", false),
            target: "new",
        }, {
            fullscreen: this.env.isSmall,
            onClose: async () => {
                await this.env.model.load();
                this.env.model.notify();
            },
        });
    }
    _getDefaultContext(defaultDocType, includeTags) {
        const context = {
            default_x_document_type: defaultDocType,
            default_x_date: new Date().toISOString().split('T')[0],
        };
        // Set Searchpanel filters as create values
        const isFolderCategory = (s) => s.type === "category" && s.fieldName === "x_folder_id";
        const folderSection = this.env.searchModel.getSections().filter(isFolderCategory)[0];
        if (folderSection) {
            if (folderSection.activeValueId) {
                context["default_x_folder_id"] = folderSection.activeValueId;
            }
        }

        if (includeTags) {
            const isTagFilter = (s) => s.type === "filter" && s.fieldName === "x_tag_ids";
            const tagsSection = this.env.searchModel.getSections().filter(isTagFilter)[0];
            if (tagsSection){
                const x2mCommand = 4; // 4 is to add record in the m2m relation
                context["default_x_tag_ids"] = [...tagsSection.values.values()].filter((value) => value.checked).map((value) => [x2mCommand, value.id]);
            }
        }

        return { ...this.env.searchModel.context, ...context };
    }
};
