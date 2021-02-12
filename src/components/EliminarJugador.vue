<template>
  <div>
    <v-btn @click="eliminar()" fab icon>
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
    },
  },

  methods: {
    eliminar() {
      console.log(this.id);
      let eliminados = this.$store.state.jugadores.filter(
        (item) => item.id !== this.id
      );
      this.$store.state.jugadores = eliminados;
      // this.guardarJugador();
    },
  },
  computed: {},
};
</script>

<style>
</style>