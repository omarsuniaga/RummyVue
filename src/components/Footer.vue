<template>
  <v-app-bar app bottom dark>
    <v-bottom-navigation
      absolute
      color="white"
      horizontal
      class="justify-space-between"
    >
      <v-dialog v-model="dialog" persistent>
        <template v-slot:activator="{ on, attrs }">
          <v-btn href="#registrar" v-bind="attrs" v-on="on">
            <span>Registrar</span>
            <span class="material-icons"> group_add </span>
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="headline" mx-auto>
            Registra tu nombre
          </v-card-title>
          <agregar-jugadores />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-btn href="#contador">
        <span>Jugar</span>
        <span class="material-icons"> restore </span>
        <div class="active text-danger"></div>
      </v-btn>

      <v-btn href="#historial">
        <span>Historial</span>
        <span class="material-icons"> manage_search </span>
      </v-btn>
    </v-bottom-navigation>
  </v-app-bar>
</template>

<script>
import AgregarJugadores from "./AgregarJugadores.vue";
export default {
  components: { AgregarJugadores },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style>
</style>