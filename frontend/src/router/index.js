import Vue from 'vue'
import Router from 'vue-router'
import { trailingSlash } from '@/util/helpers'
import { abort, layout, route } from '@/util/routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    layout('Default', [
      // Pages
      // route(라우팅 이름, import할 vue 파일명, 컴포넌트 객체, 라우팅 경로)
      route('Home', 'HomeView', null, '/'),
      route('About', 'AboutView', null, '/about'),
      route('Room', 'CatView', null, '/room'),
      route('Sns', 'SnsView', null, '/sns'),
      route('Login', 'LoginView', null, '/login'),
      route('SignUp', 'SignUpView', null, '/signup'),
      route('Table', 'TableView', null, '/table'),
      route('File', 'FileView', null, '/file'),
      route('Info', 'InfoView', null, '/info'),
      abort(),
    ]),
  ],
})

router.beforeEach((to, from, next) => {
  return to.path.endsWith('/') ? next() : next(trailingSlash(to.path))
})

export default router
