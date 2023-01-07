<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar :square="true">
            <img src="@/assets/agenda.png" />
          </q-avatar>
          Vue Agenda
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-teal-2">
      <div class="row justify-center">
        <div class="col-12 col-md-8">
          <router-view />
        </div>
      </div>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar class="primary">Developed by Daniel Camilo</q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "Home",
};
</script>