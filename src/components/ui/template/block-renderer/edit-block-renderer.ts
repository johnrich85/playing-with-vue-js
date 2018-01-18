import Vue, {ComponentOptions} from 'vue';
import Component from 'vue-class-component';

import Block, {BlockTypes} from '../../../../models/Block';
import {StaticTextRendererComponent} from './edit/static-text/static-text-renderer';
import {RemoteTextRendererComponent} from './edit/remote-text/remote-text-renderer';
import {RemoteListRendererComponent} from './edit/remote-list/remote-list-renderer';
import {RemoteStatsComponent} from './edit/remote-stats/remote-stats';
import {AbstractBlockRendererComponent} from './abstract-block-renderer';
import {NullRendererComponent} from './null/null-renderer';

@Component({
    template: require('./block-renderer.html'),
    components: {
        'v-static-text': StaticTextRendererComponent,
        'v-remote-text': RemoteTextRendererComponent,
        'v-remote-list': RemoteListRendererComponent,
        'v-remote-stats': RemoteStatsComponent,
        'v-null-renderer': NullRendererComponent
    }
})


export class EditBlockRendererComponent extends AbstractBlockRendererComponent {

    protected blockTypeComponentMap: Object = {
        'v-remote-text' : BlockTypes.RemoteText,
        'v-static-text' : BlockTypes.StaticText,
        'v-remote-list' : BlockTypes.RemoteList,
        'v-remote-stats' : BlockTypes.RemoteStats
    };

    constructor(options?: ComponentOptions<Vue>) {
        super(options);
    }

    created() {
        super.created();
    }
}
