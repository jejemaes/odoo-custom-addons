import {
    DYNAMIC_SNIPPET,
    setDatasetIfUndefined,
} from "@website/builder/plugins/options/dynamic_snippet_option_plugin";
import { Plugin } from "@html_editor/plugin";
import { withSequence } from "@html_editor/utils/resource";
import { registry } from "@web/core/registry";
import { DynamicSnippetSponsorsOption } from "./dynamic_snippet_sponsors_option";


class DynamicSnippetSponsorsOptionPlugin extends Plugin {
    static id = "dynamicSnippetSponsorsOption";
    static dependencies = ["dynamicSnippetOption"];
    modelNameFilter = "x_sponsor.sponsor";
    selector = ".s_sponsors_dynamic_snippet";
    resources = {
        builder_options: withSequence(DYNAMIC_SNIPPET, {
            OptionComponent: DynamicSnippetSponsorsOption,
            props: {
                modelNameFilter: this.modelNameFilter,
                fetchSponsorContract: this.fetchSponsorContract.bind(this),
            },
            selector: this.selector,
        }),
        on_snippet_dropped_handlers: this.onSnippetDropped.bind(this),
    };
    setup() {
        this.sponsorContracts = undefined;
    }
    async onSnippetDropped({ snippetEl }) {
        if (snippetEl.matches(this.selector)) {
            setDatasetIfUndefined(snippetEl, "numberOfRecords", 7);
            setDatasetIfUndefined(snippetEl, "filterBySponsorContractId", -1);
            await this.dependencies.dynamicSnippetOption.setOptionsDefaultValues(
                snippetEl,
                this.modelNameFilter
            );
        }
    }
    async fetchSponsorContract() {
        if (!this.sponsorContracts) {
            this.sponsorContracts = this._fetchSponsorContract();
        }
        return this.sponsorContracts;
    }
    async _fetchSponsorContract() {
        // TODO put in an utility function
        const websiteDomain = [];
        return this.services.orm.searchRead("x_sponsor.contract", websiteDomain, ["id", "x_name"]);
    }
}

registry
    .category("website-plugins")
    .add(DynamicSnippetSponsorsOptionPlugin.id, DynamicSnippetSponsorsOptionPlugin);
