import Vue, {ComponentOptions} from 'vue';
import Component from 'vue-class-component';
import {Prop} from 'vue-property-decorator';
import Block from '../../../../models/Block';

@Component({
    template: require('./remote-stats.html')
})

export class RemoteStatsComponent extends Vue {

    @Prop() protected block: Block;

    constructor(options?: ComponentOptions<Vue>) {
        super(options);

    }
}
