import { onWillStart, useState } from "@odoo/owl";
import { BaseOptionComponent } from "@html_builder/core/utils";
import { useDynamicSnippetOption } from "@website/builder/plugins/options/dynamic_snippet_hook";
import { DynamicSnippetOption } from "@website/builder/plugins/options/dynamic_snippet_option";

export class DynamicSnippetSponsorsOption extends BaseOptionComponent {
    static template = "website_sponsor.DynamicSnippetSponsorsOption";
    static props = {
        ...DynamicSnippetOption.props,
    };
    setup() {
        super.setup();
        this.dynamicOptionParams = useDynamicSnippetOption(this.props.modelNameFilter);
        this.sponsorContractState = useState({
            contracts: [],
        });
        onWillStart(async () => {
            this.sponsorContractState.contracts.push(...(await this.props.fetchSponsorContract()));
        });
    }
}
