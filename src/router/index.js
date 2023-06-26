import BoardList from "@/views/board/BoardList.vue"
import BoardWrite from "@/views/board/BoardWrite.vue"
import BoardDetail from "@/views/board/BoardDetail.vue"
import BoardModify from "@/views/board/BoardModify.vue"
import BoardCategory from "@/views/board/BoardCategory.vue"

import { createRouter, createWebHistory } from "vue-router"

const routes = [
      {
        path : '/',
        name : 'BoardList',
        component : BoardList
      },  
      {
        path: '/write',
        name: 'BoardWrite',
        component: BoardWrite
      },
      {
        path: '/detail/:idx',
        name: 'BoardDetail',
        component: BoardDetail
      },
      {
        path: '/modify/:idx',
        name: 'BoardModify',
        component: BoardModify
      },
      {
        path: '/category/:category',
        name: 'BoardCategory',
        component: BoardCategory
      },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router