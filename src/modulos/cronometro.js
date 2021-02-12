export default{
  namespaced: true, 
  state: {
    inicio: '',
    time: '',
    id: "",
    rj: 30,
    h: 0,
    m: 0,
    s: 0,

  },
  getters:{
    cronometrar( state ) {
      state.inicio = Date.now();
      let hAux, mAux, sAux;
      let miliseg = 0;
      let seg = state.rj;
      let color = "#64DD17";
      console.log(color);
      const degToRoad = (degree) => {
        let factor = Math.PI / 180;
        return factor * degree;
      };
      let canvas = document.getElementById("canvas");
      let ctx = canvas.getContext("2d");
      ctx.lineWidth = 10; //Linea circular
      ctx.lineCap = "round"; //puntas de la linea redondeada
      ctx.shadowBlur = 10; //Sombra de la linea
      
      const renderTime = () => {
        ctx.shadowColor = color; //degradado
        ctx.strokeStyle = color; //Color de la linea
        miliseg++;
        if (miliseg > 99) {
          state.s++;
          seg--;
          miliseg = 0;
          // console.log(seg);
        }
        if (seg < 30 && seg >= 25) {
          color = "#64DD17";
        } else if (seg <= 15 && seg >= 6) {
          color = "#FFB74D";
        } else if (seg <= 5 && seg >= 0) {
          color = "#BF360C";
        } else if (seg === -1) {
          alert("Acepta para continuar");
          seg = 30;
          color = "green";
        }
        if (state.s > 59) {
          state.m++;
          state.s = 0;
        }
        if (state.m > 59) {
          state.h++;
          state.m = 0;
        }
        state.h > 24 ? (state.h = 0) : NaN;
        state.s < 10 ? (sAux = "0" + state.s) : (sAux = state.s);
        state.m < 10 ? (mAux = "0" + state.m) : (mAux = state.m);
        state.h < 10 ? (hAux = "0" + state.h) : (hAux = state.h);
        let newSconds = seg - miliseg / 100;
        //background
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 500, 500);
        //seconds
        ctx.beginPath();
        // ctx.arc(x,y,grosor,inicio,fin));
        ctx.arc(200, 165, 120, degToRoad(270), degToRoad(newSconds * 12 - 90));
        ctx.stroke();
        //date
        ctx.fillStyle = color;
        ctx.font = "40px Arial";
        //X . Y
        ctx.fillText(seg, 180, 175);
        return (state.time = `${hAux}:${mAux}:${sAux}`);
      };
      state.id = setInterval(renderTime, 10);
    },
  },
     // IniciarCronometro(context) {
    //   context.commit('cronometro')
    // }

}