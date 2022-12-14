<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="../assets/logo.svg"
      style="width: 80px; height: 80px"
    />
  </q-page>

  <h1 v-show="true">Um Título em H1</h1>
  <q-input filled v-model="text" label="Filled" />
  <q-input outlined v-model="text" label="Outlined" />
  <q-input standout v-model="text" label="Standout" />
</template>

<style lang="sass" scoped>
.row > div
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)
.row + .row
  margin-top: 1rem
</style>

<script>
export default {
  name: "HelloWorld",
};
</script>
