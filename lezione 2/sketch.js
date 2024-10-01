let xsize = 500;
let ysize = 400;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //fare cielo scuro
  background("darkblue");
  //disegno della luna
  fill("yellow");
  stroke("white");
  strokeWeight(10);
  circle(300, 75, 100);
  //prima della forma desiderata
  //cambio fill e stroke
  fill("green");
  stroke("darkgreen");
  strokeWeight(5);
  rect(0, 230, 400, 400);
  //stelle
  stroke("yellow");
  strokeWeight(30);
  let xStars_prim = 10;
  let yStars_prim = 20;
  point(xStars_prim, yStars_prim);
  let passo=1;
  //for(init; test; update){corpo}
  for (let i=0; i<50; i=i+passo){
    strokeWeight(i*3);
    if(i%3 == 0) {
      //NUMERI PARI
      //corpo di ramo vero
      stroke("yellow");
    } else {
      //NUMERI DISPARI
      //altrimenti questo --> corpo di ramo falso
      stroke("white");
    }
    point(xStars_prim*i, yStars_prim+i);
    //i=i+passo --> potrei metterlo anche qui
  }
  //stella polare
  //aggiungiamo un'altra stella
  //si può anche scrivere
  fill("white");
  stroke(0);
  strokeWeight(2);
  textSize(15);
  text("c'era una volta... delle stelle", 90, 350)
}
