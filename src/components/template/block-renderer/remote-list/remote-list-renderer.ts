import Vue, {ComponentOptions} from 'vue';
import Component from 'vue-class-component';
import {Prop} from 'vue-property-decorator';
import Block from '../../../../models/Block';

@Component({
    template: require('./remote-list.html')
})

export class RemoteListRendererComponent extends Vue {

    @Prop() protected block: Block;

    constructor(options?: ComponentOptions<Vue>) {
        super(options);
    }
}
