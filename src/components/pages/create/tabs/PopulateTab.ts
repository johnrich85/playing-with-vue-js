import Vue, {ComponentOptions} from 'vue';
import Component from 'vue-class-component';
import {Inject, Prop, Provide, Watch} from 'vue-property-decorator';
import {default as SavedTemplate} from '../../../../models/SavedTemplate';
import {TemplateEditorComponent} from '../../../ui/template/editor/editor';

@Component({
    template: require('./templates/populateTab.html'),
    components: {
        'v-template-editor': TemplateEditorComponent,
    }
})

export class PopulateTab extends Vue {

    @Prop() protected template: SavedTemplate;

    constructor(options?: ComponentOptions<Vue>) {
        super(options);
    }
}