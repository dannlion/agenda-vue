<template>
  <div class="bg-teal-9 text-yellow-3 text-h4 tit">
    <q-avatar
      size="75px"
      font-size="52px"
      color="teal"
      text-color="white"
      :icon="titulo_icon"
    />
    {{ titulo }}
  </div>
  <div class="q-pa-md">
    <q-form @submit="actionForm()" class="q-col-gutter-sd">
      <q-input
        standout="bg-teal text-white"
        v-model="modelo.Nome"
        label="Nome:"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Campo obrigatório']"
      />
      <q-input
        standout="bg-teal text-white"
        v-model="modelo.Endereco"
        label="Endereço:"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Campo obrigatório']"
      />
      <q-input
        type="tel"
        standout="bg-teal text-white"
        v-model="modelo.Celular"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Campo obrigatório']"
        label="Celular:"
        mask="(##) # ####-####"
      />
      <q-input
        type="email"
        standout="bg-teal text-white"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Campo obrigatório']"
        v-model="modelo.Email"
        label="E-mail:"
      />
      <q-input
        type="textarea"
        standout="bg-teal text-white"
        v-model="modelo.Obs"
        label="Observações:"
      />
      <div class="q-gutter-sm q-pt-md">
        <q-btn
          type="submit"
          push
          color="primary"
          text-color="white"
          label="Salvar"
          class="float-right"
          icon="save"
        />
        <q-btn
          push
          color="indigo-1"
          text-color="primary"
          label="Cancelar"
          class="float-right"
          :to="{ name: 'Tabela' }"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import agendaService from "@/services/agendaServices";
import { useQuasar } from "quasar";
const { post, getById, update } = agendaService();
const $q = useQuasar();

export default {
  name: "Cadastro",
  data() {
    return {
      modelo: {
        Nome: "",
        Endereco: "",
        Celular: "",
        Email: "",
        Obs: "",
      },
      titulo: "Adicionar",
      titulo_icon: "description",
    };
  },
  mounted() {
    (async () => {
      if (this.$route.params.id) {
        const { data } = await getById(this.$route.params.id); // "getById" vem de "agendaService".
        this.modelo = data;
        this.titulo = "Editar";
        this.titulo_icon = "mode";
      }
    })();
  },
  methods: {
    /*
    A função "actionForm" é acionada pelo botão de Submit.
    A condição "if" define se vai salvar um novo usuário ou editar dados de um já existente.
    */
    async actionForm() {
      if (this.$route.params.id) {
        await update(this.$route.params.id, this.modelo);
        this.$q.notify({
          message: "Dados editados com sucesso!",
          icon: "check",
          color: "positive",
        });
        this.$router.push({ name: "Tabela" });
      } else {
        await this.sendDados();
      }
    },
    async sendDados() {
      const res = await post(this.modelo); // Só para lembrar que este "post" vem de "agendaService".
      this.$q.notify({
        message: res.message,
        icon: "check",
        color: "positive",
      });
      this.$router.push({ name: "Tabela" });
    },
  },
};
</script>
<style scoped>
.tit {
  background-color: #666;
  border-radius: 10px;
  margin-right: 15px;
  margin-left: 15px;
  padding-top: 2px;
  padding-bottom: 2px;
}
</style>