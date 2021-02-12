<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <PantallaPrincipal/>
  </div>
</template>

<script>
// @ is an alias to /src
import PantallaPrincipal from "@/components/PantallaPrincipal.vue";

export default {
  name: "Home",
  components: {
    PantallaPrincipal,
  },
};
</script>
