import VueRouter from 'vue-router';
import Home from './components/Home';
import Docs from './components/Docs';
import Graph from './components/graph'




export default new VueRouter ({
    routes: [
        { path: '/', component: Home },
        { path: '/docs', component: Docs }, 
        { path: '/charts', component: Graph }, 
        { path: '/', redirect: '/' }

    ]
});