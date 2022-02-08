import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/SearchBar.vue"),
    props: true,
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/NotFound.vue"),
  },
  // {
  //   path: "*",
  //   name: "notfound",
  //   redirect: "/404",
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeResolve((to, from, next) => {
//   // If this isn't an initial page load.
//   if (to.name) {
//     // Start the route progress bar.
//     this.$Progress.start().start();
//   }
//   next();
// });

// router.afterEach(() => {
//   // Complete the animation of the route progress bar.
//   this.$Progress.done();
// });

export default router;
