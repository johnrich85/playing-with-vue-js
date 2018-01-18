import Vue, {ComponentOptions} from 'vue';
import Component from 'vue-class-component';
import {Inject, Prop, Provide, Watch} from 'vue-property-decorator';
import {default as SavedTemplate} from '../../../../models/SavedTemplate';

@Component({
    template: require('./templates/subjectTab.html')
})

export class SubjectTab extends Vue {

    @Prop() protected templates: SavedTemplate[];
    protected selected: number;
    protected subjects: Array<Object> = [
        {'value': 1, 'text': 'Business: Web developer'},
        {'value': 2, 'text': 'Business: Maintenance services'},
        {'value': 3, 'text': 'Business: Consultancy'},
        {'value': 4, 'text': 'Business: Hairdresser'},
        {'value': 5, 'text': 'Business: Dog walker'},
        {'value': 6, 'text': 'Business: Cattery'},
        {'value': 7, 'text': 'Sector: Arts and crafts'},
        {'value': 8, 'text': 'Sector: Finance'},
        {'value': 9, 'text': 'Sector: Automotive'},
        {'value': 10, 'text': 'Sector: Business'},
        {'value': 11, 'text': 'Sector: Fashion'},
        {'value': 12, 'text': 'Sector: Misc'}
    ];

    constructor(options?: ComponentOptions<Vue>) {
        super(options);

        this.selected = 0;
    }

    select(id) {
        let isActive =  this.selected === id;

        console.log(this.selected);

        if (!isActive) {
            this.$emit('update', {'is_valid' : true});
        }
    }

}