import Vue, {ComponentOptions} from 'vue';
import Component from 'vue-class-component';

import SavedTemplate from '../../../models/SavedTemplate';
import {Prop} from 'vue-property-decorator';

@Component({
    template: require('./editor.html')
})

export class TemplateEditorComponent extends Vue {

    @Prop() protected template: SavedTemplate;


    constructor(options?: ComponentOptions<Vue>) {
        super(options);

    }

    getBlockClass(row) {
        let numBlocks = row.length;

        if (numBlocks === 2) {
            return 'xs6';
        }

        return 'xs12';
    }
}
