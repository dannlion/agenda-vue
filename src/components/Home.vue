<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Vue Agenda
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Home Page" />
        <q-route-tab to="/cadastro" label="Cadastro" />
      </q-tabs>
    </q-header>

    <q-page-container>

      <div class="row justify-center">
        <div class="col-12 col-md-8">
          <router-view />
        </div>
      </div>

    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          DannCS Apps
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import Tabela from "@/components/Tabela.vue"

export default {
  name: "Home",
}
</script>