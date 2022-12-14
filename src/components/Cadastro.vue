<template>
  <q-page-container>
    <q-input
      standout="bg-teal text-white"
      v-model="nome"
      label="Nome:"
    />
    <br />
    <q-input standout="bg-teal text-white" v-model="endereco" label="Endereço:" />
    <br />
    <q-input
      standout="bg-teal text-white"
      v-model="cel"
      label="Celular:"
      mask="(##) # ####-####"
    />
    <br />
    <q-input type="email" standout="bg-teal text-white" v-model="email" label="E-mail:" />
    <br />
    <q-input type="textarea" standout="bg-teal text-white" v-model="obs" label="Observações:"/>
    <br />
    <q-btn push color="primary" text-color="white" label="Cadastrar" @click="alert = true" />
  </q-page-container>

  <!-- Aqui começa o código do Alert: -->
  <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Info</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ nome }}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      nome: ref(""),
      endereco: ref(""),
      cel: ref(""),
      email: ref(""),
      obs: ref(""),
      alert: ref(false),
    }
  },
  methods: {
    teste() {
      alert(this.nome)
    }
  }
}
</script>
