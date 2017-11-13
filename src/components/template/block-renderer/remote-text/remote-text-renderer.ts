import Vue, {ComponentOptions} from 'vue';
import Component from 'vue-class-component';
import {Prop} from 'vue-property-decorator';
import Block from '../../../../models/Block';
import remoteText from "../../../../data/RemoteText";

@Component({
    template: require('./remote-text.html')
})

export class RemoteTextRendererComponent extends Vue {

    @Prop() protected block: Block;
    protected options: Array<Object>;

    constructor(options?: ComponentOptions<Vue>) {
        super(options);
        this.options = remoteText;
    }
}
