import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('../views/HomePage.vue'),
      redirect: { name: 'PageTwo' },
      children: [
        {
          path: 'page1',
          name: 'PageOne',
          component: () => import('../views/PageOne.vue') // 關於頁內容
        },
        {
          path: 'page2',
          name: 'PageTwo',
          component: () => import('../views/PageTwo.vue') // 關於頁內容
        },
        {
          path: 'page3',
          name: 'PageThree',
          component: () => import('../views/PageThree.vue') // 關於頁內容
        },
        {
          path: 'page4',
          name: 'PageFour',
          component: () => import('../views/PageFour.vue') // 關於頁內容
        },
        {
          path: 'page5',
          name: 'PageFive',
          component: () => import('../views/PageFive.vue') // 關於頁內容
        },
        {
          path: 'page6',
          name: 'PageSix',
          component: () => import('../views/PageSix.vue') // 關於頁內容
        },
        {
          path: 'page7',
          name: 'PageSeven',
          component: () => import('../views/PageSeven.vue') // 關於頁內容
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
