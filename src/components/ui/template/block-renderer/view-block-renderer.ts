import Vue, {ComponentOptions} from 'vue';
import Component from 'vue-class-component';

import Block, {BlockTypes} from '../../../../models/Block';
import {AbstractBlockRendererComponent} from './abstract-block-renderer';
import {NullRendererComponent} from './null/null-renderer';
import {ViewStaticTextComponent} from './view/static-text/static-text-renderer';

@Component({
    template: require('./block-renderer.html'),
    components: {
        'v-static-text': ViewStaticTextComponent,
        'v-null-renderer': NullRendererComponent
    }
})

export class ViewBlockRendererComponent extends AbstractBlockRendererComponent {

    protected blockTypeComponentMap: Object = {
        'v-static-text' : BlockTypes.StaticText,
    };

    constructor(options?: ComponentOptions<Vue>) {
        super(options);
    }

    created() {
        super.created();
    }
}
