import Vue, {ComponentOptions} from 'vue';
import Component from 'vue-class-component';

import SavedTemplate from '../../../../models/SavedTemplate';
import {Prop} from 'vue-property-decorator';
import Block, {BlockTypes} from "../../../../models/Block";
import {StaticTextRendererComponent} from "./static-text/static-text-renderer";
import {RemoteTextRendererComponent} from "./remote-text/remote-text-renderer";
import {RemoteListRendererComponent} from "./remote-list/remote-list-renderer";
import {RemoteStatsComponent} from "./remote-stats/remote-stats";

@Component({
    template: require('./block-renderer.html'),
    components: {
        'v-static-text': StaticTextRendererComponent,
        'v-remote-text': RemoteTextRendererComponent,
        'v-remote-list': RemoteListRendererComponent,
        'v-remote-stats': RemoteStatsComponent,
    }
})

export class BlockRendererComponent extends Vue {

    @Prop() protected block: Block;

    protected blockTypeComponentMap: Object = {
        'v-remote-text' : BlockTypes.RemoteText,
        'v-static-text' : BlockTypes.StaticText,
        'v-remote-list' : BlockTypes.RemoteList,
        'v-remote-stats' : BlockTypes.RemoteStats
    };

    protected componentRenderer = 'v-null-renderer';

    constructor(options?: ComponentOptions<Vue>) {
        super(options);

    }

    created() {
        let type = this.block.type;

        for (let key in this.blockTypeComponentMap) {
            if (this.blockTypeComponentMap[key] === type) {
                this.componentRenderer = key;
                break;
            }
        }
    }
}
