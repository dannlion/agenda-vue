<template>
  <div class="q-pa-md">
    <q-dialog :persistent="true" v-model="model">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-blue-grey-14">
          <q-toolbar>
            <q-btn flat round dense icon="description" />
            <q-toolbar-title>ID: {{ infosUser.id }}</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>

        <q-footer class="bg-blue-grey-14 text-white">
          <q-toolbar>
            <q-toolbar-title></q-toolbar-title>
          </q-toolbar>
        </q-footer>

        <q-page-container>
          <q-page padding>
            <q-form class="q-col-gutter-sd">
              <q-input
                standout="bg-teal text-white"
                rounded
                readonly
                v-model="infosUser.Nome"
                label="Nome:"
                class="q-pb-sm"
              />
              <q-input
                standout="bg-teal text-white"
                rounded
                readonly
                v-model="infosUser.Endereco"
                label="Endereço:"
                class="q-py-sm"
              />
              <q-input
                standout="bg-teal text-white"
                rounded
                readonly
                v-model="infosUser.Celular"
                label="Celular:"
                mask="(##) # ####-####"
                class="q-py-sm"
              />
              <q-input
                type="email"
                standout="bg-teal text-white"
                rounded
                readonly
                v-model="infosUser.Email"
                label="E-mail:"
                class="q-py-sm"
              />
              <q-input
                type="textarea"
                standout="bg-teal text-white"
                rounded
                readonly
                v-model="infosUser.Obs"
                label="Observações:"
                class="q-pt-sm"
              />
            </q-form>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "DialogInfos",

  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    infosUser: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      modelo: {
        Nome: "Jovem User",
        Endereco: "Rua Maria da Costa Leite, 333, Rio de Janeiro-RJ",
        Celular: "11987654321",
        Email: "user.teste222@gmail.com",
        Obs: "Usuário de teste apenas.",
      },
      ativa: false,
    };
  },

  methods: {},

  computed: {
    // Writable Computed:
    model: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit("update:modelValue", newValue);
      },
    },
  },
};
</script>