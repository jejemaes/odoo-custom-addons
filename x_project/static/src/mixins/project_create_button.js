/** @odoo-module **/

import { _t } from "@web/core/l10n/translation";
import { useBus, useRefListener, useService } from '@web/core/utils/hooks';
import { onWillStart, useRef, useEffect, useState } from "@odoo/owl";


export const ProjectCreateFromTemplateButtonMixin = (T) => class ProjectCreateFromTemplateButtonMixin extends T {

    async onClickCreateFromTemplate() {
        this.actionService.doAction("x_project.project_create_from_template_action", {
                additionalContext: {},
            });
    }

};
