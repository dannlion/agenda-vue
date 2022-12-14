<template>
  <Home />
</template>

<script>
import { ref } from "vue";
import Home from "./components/Home.vue";

export default {
  name: "LayoutDefault",
  components: {
    Home,
  },

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
