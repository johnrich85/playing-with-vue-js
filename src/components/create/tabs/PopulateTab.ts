import Vue, {ComponentOptions} from 'vue';
import Component from 'vue-class-component';
import {Inject, Prop, Provide, Watch} from 'vue-property-decorator';
import {default as SavedTemplate} from '../../../models/SavedTemplate';

@Component({
    template: require('./templates/populateTab.html')
})

export class PopulateTab extends Vue {

    @Prop() protected template: SavedTemplate;

    constructor(options?: ComponentOptions<Vue>) {
        super(options);
    }
}