import Vue, {ComponentOptions} from 'vue';

import {Prop} from 'vue-property-decorator';
import Block from '../../../../models/Block';

export abstract class AbstractBlockRendererComponent extends Vue {

    @Prop() protected block: Block;

    protected abstract blockTypeComponentMap;

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
