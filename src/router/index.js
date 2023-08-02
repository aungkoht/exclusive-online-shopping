import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage";
import Contact from '../views/Contact';
import About from '../views/About';
import SignUp from '../views/SignUp';
import PageNotFound from "../views/PageNotFound.vue"
import Account from "../views/Account.vue"
import Cart from "../views/Cart.vue"
import Checkout from "../views/Checkout.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp
  },
  {
    path: "/account",
    name: "account",
    component: Account
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout
  },
  {
    path: "/:catchAll(.*)",
    component: PageNotFound
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
