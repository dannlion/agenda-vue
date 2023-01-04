import { createRouter, createWebHistory } from "vue-router";

import Home from "@/components/Home.vue";
import Tabela from "@/components/Tabela.vue";
import Cadastro from "@/components/Cadastro.vue";
// import DialogInfos from "@/pages/DialogInfos.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        name: "Tabela",
        component: Tabela,
      },
      {
        path: "/userform/:id?",
        name: "Cadastro",
        component: Cadastro,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
