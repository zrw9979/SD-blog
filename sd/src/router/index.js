import App from '../App.vue'
import Artical from '../view/artical.vue'
import Catalog from '../view/catalog.vue'
import List from '../view/list.vue'
import Home from '../view/home.vue'

const routes = [
  { path: '/', component: App },
  { path: '/artical', name: 'artical', component: Artical },
  { path: '/catalog', name: 'catalog', component: Catalog },
  { path: '/list', name: 'list', component: List },
  { path: '/home', name: 'home', component: Home }
]

export default routes