import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/pages/Main";
import PostList from "@/pages/PostList";
import PostInfo from "@/pages/PostInfo";
import UsersPosts from "@/pages/UsersPosts";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostList
  },
  {
    path:'/post/:id',
    component: PostInfo,
    props: true,
  },
  {
    path:'/users/:userId',
    component: UsersPosts,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
