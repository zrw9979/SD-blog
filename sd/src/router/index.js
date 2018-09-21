import App from '../App.vue'
import Artical from '../view/artical.vue'
import Catalog from '../view/catalog.vue'
import List from '../view/list.vue'
import Home from '../view/home.vue'

export default [
  { path: '/', component: App },
  { path: '/Artical', name: 'artical', component: Artical },
  { path: '/Catalog', name: 'catalog', component: Catalog },
  { path: '/List', name: 'list', component: List },
  { path: '/Home', name: 'home', component: Home }
]
