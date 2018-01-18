import Vue, {ComponentOptions} from 'vue';
import Component from 'vue-class-component';
import {Logger} from '../../../util/log';
import { Link } from '../../ui/navbar/link';
import { Steps } from '../../../util/steps';
import SavedTemplate from '../../../models/SavedTemplate';
import { SelectTemplateTab } from './tabs/SelectTemplateTab';
import { SubjectTab } from './tabs/SubjectTab';
import { PopulateTab } from './tabs/PopulateTab';
import {Inject, Prop, Provide, Watch} from 'vue-property-decorator';
import templates from '../../../data/Templates';

@Component({
    template: require('./create.html'),
    components: {
        'v-select-tab': SelectTemplateTab,
        'v-subject-tab': SubjectTab,
        'v-populate-tab': PopulateTab
    }
})

export class CreateComponent extends Vue {
    protected logger: Logger;
    protected tabs: Link[] = Steps;
    protected active: string = null;
    protected is_last: boolean = false;
    protected templates: SavedTemplate[];
    protected canProgress: boolean = false;
    protected selectedTemplate: SavedTemplate;

    constructor(options?: ComponentOptions<Vue>) {
        super(options);

        this.templates = templates;
        this.selectedTemplate = null;
    }

    beforeMount() {
        this.active = this.tabs[0].id;
    }

    next() {
        let next = this.getNextPos(this.active);

        if (typeof  this.tabs[next] !== 'undefined') {
            this.active = this.tabs[next].id;
        }
    }

    handleTabUpdate(params) {
        if (params.is_valid) {
            this.canProgress = true;
        } else {
            this.canProgress = false;
        }

        if (params.selection) {
            this.selectedTemplate = this.templates.find(t => t.id === params.selection);
        }
    }


    @Watch('active')
    onActiveChanged(val: string, oldVal: string) {
        this.canProgress = false;
        this.is_last = val === this.tabs[this.tabs.length - 1].id;
    }

    getNextPos(id: string): number {
        let cur = this.tabs.find(t => t.id === id);

        return this.tabs.indexOf(cur) + 1;
    }
}