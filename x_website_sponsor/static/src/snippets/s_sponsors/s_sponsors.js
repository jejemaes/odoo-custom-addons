import { DynamicSnippet } from "@website/snippets/s_dynamic_snippet/dynamic_snippet";
import { registry } from "@web/core/registry";

import { groupBy } from "@web/core/utils/arrays";

export class Sponsors extends DynamicSnippet {
    static selector = ".s_sponsors_dynamic_snippet";

    /**
     * @override
    */
    getSearchDomain() {
        const searchDomain = super.getSearchDomain(...arguments);
        const sponsorContractId = parseInt(this.el.dataset.filterBySponsorContractId);
        if (sponsorContractId >= 0) {
            searchDomain.push(["x_sponsor_contract_id", "=", sponsorContractId]);
        }
        return searchDomain;
    }
    /**
     * @override
     * Hack to align in js qweb website.s_dynamic_snippet.grid template
    */
    getQWebRenderOptions() {
        const qwebRenderOptions = super.getQWebRenderOptions();
        const customTemplateData = JSON.parse(this.el.dataset?.customTemplateData || "{}");

        if (customTemplateData.sponsor_extra_classes){
            qwebRenderOptions.extraClasses += customTemplateData.sponsor_extra_classes
        }
        return qwebRenderOptions
    }
}


registry
    .category("public.interactions")
    .add("website_sponsor.sponsors", Sponsors);

registry
    .category("public.interactions.edit")
    .add("website_sponsor.sponsors", {
        Interaction: Sponsors,
    });
