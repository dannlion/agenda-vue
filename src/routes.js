import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/components/Home.vue";
import Tabela from "@/components/Tabela.vue";
import Cadastro from "@/components/Cadastro.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        component: Tabela,
      },
    ],
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    component: Cadastro,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
