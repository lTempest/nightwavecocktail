import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OnlySurprise from "../views/SuprisePage.vue";
import infoCocktail from "../views/InfoCocktail.vue";
import Noalcoholic from "../views/NonAlcoholic.vue";
import ResultSearch from "../views/ResultSearch.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/suprise",
    name: "randomsurprise",
    component: OnlySurprise,
  },
  {
    path: "/info/:id",
    name: "info",
    component: infoCocktail,
  },
  {
    path: "/Non_Alcoholic",
    name: "NonAl",
    component: Noalcoholic,
  },
  {
    path: "/search",
    name: "search",
    component: ResultSearch,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
