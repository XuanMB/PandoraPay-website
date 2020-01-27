import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting

import HomePage from "src/pages/home/home.page.vue"
import ContactPage from "src/pages/other/contact.page"
import FaqPage from "src/pages/other/faq/faq.page"

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash }
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [

      { path: '/', component: HomePage },
      { path: '/contact', component: ContactPage },
      { path: '/support', component: ContactPage },
      { path: '/faq', component: FaqPage },

    ]
  })
}
