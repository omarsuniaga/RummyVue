<template>
  <v-container>
    <v-col>
      <v-form
        ref="form"
        v-on:submit.prevent
        v-model.trim="valid"
        lazy-validation
      >
        <v-text-field
          autofocus
          v-model="nombre"
          :counter="10"
          :rules="Rules"
          label="Nombre del Jugador"
          @keyup.enter="iniciar"
        ></v-text-field>
        <v-btn :disabled="!valid" color="success" @click="iniciar">
          Agregar
        </v-btn>
      </v-form>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "AgregarJugadores",
  data() {
    return {
      src: "",
      valid: true,
      color: "",
      jugador: [],
      nombre: "",
      Rules: [
        (v) => !!v || "Nombre es requerido",
        (v) =>
          (v && v.length <= 10) ||
          "El nombre debe tener maximo de 10 caracteres",
      ],
    };
  },

  methods: {
    random() {
      return Math.floor(Math.random() * (250 - 1)) + 1;
    },
    async iniciar() {
      try {
        const avatar = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.random()}`
        );
        const imagen = await avatar.json();
        this.src = imagen.sprites.front_default;
        console.log(this.src);
        this.agregarJugador();
        // return;
      } catch (err) {
        return console.log("No hay Avatars", err);
      }
    },
    agregarJugador() {
      this.color = `rgb(${this.random()},${this.random()},${this.random()})`;
      this.jugador = {
        id: Date.now(),
        nombre: this.nombre,
        color: this.color,
        victorias: 13,
        derrotas: 31,
        partidasJugadas: 34,
        puntajes: [],
        totalPuntos: 0,
        historialVelocidad: [],
        rangoVelocidad: 0,
        descripcion: "Muy Rapido",
        avatar: this.src,
      };
      this.$store.state.jugador = this.jugador;
      this.$store.dispatch("agregarJugadorAcciones");
      this.nombre = "";
      this.api();
    },

    api() {
      let string = this.$store.state.jugadores;
      // `
      // "algo":
      //     {
      //       "titulo":"Omar Aprende",
      //       "Tema":"JavaScript y VueJs",
      //       "Tiempo":"Toda la Pandemia"
      //     }

      // `;
      console.log(string);
      // let req = new XMLHttpRequest();

      // req.onreadystatechange = () => {
      //   if (req.readyState == XMLHttpRequest.DONE) {
      //     console.log(req.responseText);
      //   }
      // };

      // req.open("POST", "https://api.jsonbin.io/b", true);
      // req.setRequestHeader("Content-Type", "application/json");
      // req.setRequestHeader(
      //   "secret-key",
      //   "$2b$10$zopsAB6GNXlMXPF69kNDKOdvWkhXOoNH1Y99ZLHCCXAF8h9pcTyXG"
      // );
      // req.send(`{"Jugadores": "${string}"}`);
    },
  },
  computed: {},
};
</script>

<style>
</style>