<template>
  <v-app>
    <v-app-bar app color="secondary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn color="danger" elevation="5" fab icon small @click="terminar" text>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Cronometro />
      <PantallaPrincipal />
      <Jugadores />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Jugadores from "./components/Jugadores";
import Footer from "./components/Footer";
import Cronometro from "./components/Cronometro";
import PantallaPrincipal from "./components/PantallaPrincipal";
export default {
  name: "App",

  components: {
    PantallaPrincipal,
    Jugadores,
    Footer,
    Cronometro,
  },

  data: () => ({
    //
  }),
  methods: {
    terminar() {
      this.$store.commit("terminar");
      console.log(this.$store.state.estado);
    },
  },
};
</script>
