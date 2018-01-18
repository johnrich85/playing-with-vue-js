import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { Logger } from '../../../util/log';
import { Link } from './link';
import { Routes, Steps } from '../../../util/steps';

@Component({
    template: require('./navbar.html')
})


export class NavbarComponent extends Vue {

    protected logger: Logger;

    inverted: boolean = true; // default value

    shouldRenderSteps: boolean = false;

    object: { default: string } = { default: 'Default object property!' }; // objects as default values don't need to be wrapped into functions

    links: Link[] = Routes;

    steps: Link[] = Steps;

    @Watch('$route.path')
    pathChanged() {
        this.shouldRenderSteps = this.isNavRequired();

        this.logger.info('Changed current path to: ' + this.$route.path);
    }

    mounted() {
        if (!this.logger) this.logger = new Logger();
        this.$nextTick(() => this.logger.info(this.object.default));
    }

    isNavRequired(): boolean {
        let navRequired = false;

        if (this.$route.path.indexOf('/create') !== -1) {
            navRequired = true;
            return true;
        }

        return navRequired;
    }
}
