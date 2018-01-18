import Vue, {ComponentOptions} from 'vue';
import Component from 'vue-class-component';
import LineGraph from '../../charts/line';
import SavedTemplate from '../../../../models/SavedTemplate';
import {Prop} from 'vue-property-decorator';
import {ViewBlockRendererComponent} from "../block-renderer/view-block-renderer";

@Component({
    components: {
        'v-view-renderer': ViewBlockRendererComponent,
        'v-line-graph': LineGraph,
    }
})

export class TemplateViewComponent extends Vue {

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

    created() {
        if (this.template === null || this.template.layout === null) {
            this.$router.push('error');

            return false;
        }

        this.$options.template = require('./layout1.html');
    }
}
