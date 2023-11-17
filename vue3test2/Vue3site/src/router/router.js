import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import UserPage from "@/pages/UserPage";
import About from "@/pages/About";
import PostIdPage from "@/pages/PostIdPage";
import PostPageWithStore from "@/pages/PostPageWithStore";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi";
import Catalog from "@/pages/Catalog";
import News from "@/pages/News";
import Discus from "@/pages/Discussions";
import MyProfile from "@/pages/MyProfile";
import Registration from "@/pages/Registration";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: UserPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
    {
        path: '/composition',
        component: PostPageCompositionApi
    },
    {
        path: '/catalog',
        component: Catalog
    },
    {
        path: '/news',
        component: News

    },
    {
        path: '/discussions',
        component:Discus

    },
    {
        path: '/myprofile',
        component:MyProfile
    },
    {
        path: '/registration',
        component:Registration
    },
    

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
