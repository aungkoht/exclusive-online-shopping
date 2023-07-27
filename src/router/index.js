import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage";
import Contact from '../views/Contact';
import About from '../views/About';
import SignUp from '../views/SignUp';

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
