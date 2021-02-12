<template>
  <v-container fluid dark>
    <v-row>
      <v-col cols="12">
        <span class="display-3 font-weight-light" v-text="slider"></span>
        <v-slider
          cancelable="true"
          v-model="slider"
          :thumb-size="24"
          thumb-label="always"
        >
          <template v-slot:prepend>
            <v-icon @click="decrement"> mdi-minus </v-icon>
          </template>
          <template v-slot:thumb-label="{ value }">
            {{ satisfactionEmojis[Math.min(Math.floor(value / 10), 9)] }}
          </template>
          <template v-slot:append>
            <v-icon @click="increment"> mdi-plus </v-icon>
          </template>
        </v-slider>
        <v-btn icon @click="guardar">
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// import { mapState } from "vuex";
export default {
  name: "agregarPuntos",
  props: {
    id: {
      type: Number,
    },
    i: {
      type: Number,
    },
  },
  data() {
    return {
      satisfactionEmojis: [
        "😭",
        "😢",
        "☹️",
        "🙁",
        "😐",
        "🙂",
        "😊",
        "😁",
        "😄",
        "😍",
      ],
      slider: 0,
    };
  },
  computed: {
    // this.guardar()
    // ...mapState(["jugador"]),
    // this.$emit("puntosHijo", this.slider)
  },
  methods: {
    guardar() {
      let algo = this.$store.state.jugadores[this.i];
      algo.puntajes.push(this.slider);
      algo.totalPuntos = algo.puntajes.reduce((a, b) => a + b, 0);
      this.slider = "";
    },
    decrement() {
      this.slider--;
    },
    increment() {
      this.slider++;
    },
  },
};
</script>