import Vue from 'vue';
import VueRouter from 'vue-router';

import './sass/main.scss';

import { HomeComponent } from './components/pages/home';
import { CreateComponent } from './components/pages/create';
import { ListComponent } from './components/ui/list';
import { NavbarComponent } from './components/ui/navbar';
import Vuetify from 'vuetify';
import {ErrorComponent} from "./components/pages/error/error";

// register the plugin
Vue.use(VueRouter);
Vue.use(Vuetify);

let router = new VueRouter({
    routes: [
        { path: '/', component: HomeComponent },
        { path: '/create', component: CreateComponent },
        { path: '/list', component: ListComponent },
        { path: '/error', component: ErrorComponent },
    ]
});

new Vue({
    el: '#app-main',
    router: router,
    components: {
        'navbar': NavbarComponent
    },
    data () {
        return {
            drawer: true
        };
    }
});
