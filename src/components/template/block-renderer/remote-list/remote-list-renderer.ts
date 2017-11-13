import Vue, {ComponentOptions} from 'vue';
import Component from 'vue-class-component';
import {Prop} from 'vue-property-decorator';
import Block from '../../../../models/Block';
import remoteKeyinfo from "../../../../data/RemoteKeyInfo";

@Component({
    template: require('./remote-list.html')
})

export class RemoteListRendererComponent extends Vue {

    @Prop() protected block: Block;
    protected options: Array<Object>;

    constructor(options?: ComponentOptions<Vue>) {
        super(options);

        this.options = remoteKeyinfo;
    }
}
