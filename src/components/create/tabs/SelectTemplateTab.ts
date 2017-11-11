import Vue, {ComponentOptions} from 'vue';
import Component from 'vue-class-component';
import {Inject, Prop, Provide, Watch} from 'vue-property-decorator';
import {default as SavedTemplate} from '../../../models/SavedTemplate';

@Component({
    template: require('./templates/selectTemplateTab.html')
})

export class SelectTemplateTab extends Vue {

    @Prop() protected templates: SavedTemplate[];
    protected selected: number;

    constructor(options?: ComponentOptions<Vue>) {
        super(options);

        this.selected = 0;
    }

    select(id) {
        let isActive =  this.selected === id;

        if (isActive) {
            this.selected = 0;
            this.$emit('update', {'is_valid' : false});
        } else {
            this.selected = id;
            this.$emit('update', {'is_valid' : true});
        }
    }


    isActive(id) {
        if (this.selected === id) {
            return true;
        }

        return false;
    }

}