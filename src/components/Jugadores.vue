<template>
  <v-card class="d-flex justify-center">
    <v-container>
      <v-app-bar dark color="purple darken-1">
        <v-toolbar-title>Jugadores</v-toolbar-title>
      </v-app-bar>
      <mostrar-jugadores />
    </v-container>
  </v-card>
</template>
<script>
import MostrarJugadores from "./MostrarJugadores.vue";
export default {
  components: { MostrarJugadores },
  name: "Jugadores",
};
</script>