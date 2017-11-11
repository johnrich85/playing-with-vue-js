import Vue from 'vue';
import VueRouter from 'vue-router';

import './sass/main.scss';

import { HomeComponent } from './components/home';
import { CreateComponent } from './components/create';
import { ListComponent } from './components/list';
import { NavbarComponent } from './components/navbar';
import Vuetify from 'vuetify';

// register the plugin
Vue.use(VueRouter);
Vue.use(Vuetify);

let router = new VueRouter({
    routes: [
        { path: '/', component: HomeComponent },
        { path: '/create', component: CreateComponent },
        { path: '/list', component: ListComponent },
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
