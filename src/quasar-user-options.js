import "./styles/quasar.sass";
import lang from "quasar/lang/pt-BR.js";
import "@quasar/extras/material-icons/material-icons.css";

// Foi preciso importar aqui para que o uso fosse permitido nos SFC Vue.
// O mesmo também é aplicado no Vue 3 no arquivo "main.js".
import { Notify, Dialog, Loading } from "quasar";

// To be used on app.use(Quasar, { ... })
export default {
  config: {},
  plugins: { Notify, Dialog, Loading }, // Aqui vem vazio por padrão. Os plugins devem ser adicionados.
  lang: lang,
};
