import Vue, {ComponentOptions} from 'vue';
import Component from 'vue-class-component';

import SavedTemplate from '../../../../models/SavedTemplate';
import {Prop} from 'vue-property-decorator';
import {BlockRendererComponent} from '../block-renderer/block-renderer';
import LineGraph from '../../charts/line';

@Component({
    template: require('./editor.html'),
    components: {
        'v-block-renderer': BlockRendererComponent,
        'v-line-graph': LineGraph
    }
})

export class TemplateEditorComponent extends Vue {

    @Prop() protected template: SavedTemplate;

    protected tempData: Object = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Stats',
                backgroundColor: '#632770',
                pointBackgroundColor: '#481054',
                steppedLine : false,
                data: [40, 39, 10, 40, 39, 80, 40]
            }
        ]
    };

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
