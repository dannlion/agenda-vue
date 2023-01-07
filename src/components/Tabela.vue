<template>
  <q-table
    title="Agenda Camilo"
    :rows="dados"
    :columns="columns"
    row-key="id"
    dark
    color="amber"
    class="q-pa-md"
    :rows-per-page-options="[5, 10, 15, 20]"
  >
    <template v-slot:top>
      <h3>Contatos</h3>
      <q-space></q-space>
      <q-btn
        color="deep-orange-8"
        icon="add_call"
        size="lg"
        :to="{ name: 'Cadastro' }"
        ><q-tooltip anchor="top middle" self="center middle"
          >Adicionar contato</q-tooltip
        ></q-btn
      >
    </template>

    <template v-slot:body-cell-actions="props">
      <q-td :props="props" class="q-gutter-sm">
        <q-btn
          icon="remove_red_eye"
          color="secondary"
          dense
          size="md"
          @click="viewUser(props.row.id)"
          ><q-tooltip anchor="top middle" self="center middle"
            >Visualizar</q-tooltip
          ></q-btn
        >
        <q-btn
          icon="edit"
          color="primary"
          dense
          size="md"
          @click="editUser(props.row.id)"
          ><q-tooltip anchor="top middle" self="center middle"
            >Editar</q-tooltip
          ></q-btn
        >
        <q-btn
          icon="delete"
          color="negative"
          dense
          size="md"
          @click="excluirDialog(props.row.id)"
          ><q-tooltip anchor="top middle" self="center middle"
            >Excluir</q-tooltip
          ></q-btn
        >
      </q-td>
    </template>
  </q-table>
  <DialogInfos v-model="ativa" :infosUser="modelo" />
</template>

<script>
import agendaService from "@/services/agendaServices";
import DialogInfos from "@/pages/DialogInfos.vue";
import { useQuasar } from "quasar";
const $q = useQuasar();
const { list, getById, excluir } = agendaService();

export default {
  name: "Tabela",

  components: {
    DialogInfos,
  },

  data() {
    return {
      columns: [
        {
          name: "Nome",
          align: "left",
          label: "Nome:",
          field: "Nome",
          sortable: true,
        },
        // { name: 'Celular', align: 'left', label: 'Celular:', field: 'Celular' },
        { name: "actions", align: "right", label: "Ações:", field: "actions" },
      ],
      actions: [],
      dados: [],
      modelo: {},
      ativa: false,
    };
  },

  mounted() {
    this.getList();
  },

  methods: {
    async getList() {
      try {
        const infos = await list();
        this.dados = infos.data;
      } catch (error) {
        this.$q.notify({ message: error, icon: "error", color: "negative" });
      }
    },

    async viewUser(rowID) {
      const { data } = await getById(rowID);
      this.modelo = data;
      this.ativa = true;
    },

    editUser(id) {
      this.$router.push({ name: "Cadastro", params: { id } });
    },

    excluirDialog(id) {
      this.$q
        .dialog({
          dark: true,
          title: "Exclusão",
          message: "Deseja prosseguir com a exclusão do usuário?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.deleteUser(id);
        })
        .onCancel(() => {});
    },

    async deleteUser(id) {
      try {
        await excluir(id);
        this.$q.notify({
          message: "Usuário excluído com sucesso!",
          icon: "check",
          color: "positive",
        });
        await this.getList();
      } catch (error) {
        this.$q.notify({ message: error, icon: "error", color: "negative" });
      }
    },
  },
};
</script>