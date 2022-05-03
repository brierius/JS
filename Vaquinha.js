// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

// variaveis da velocidade
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let colidiu = false;

//variaveis do oponente
let xRaqueteOponente = 585; 
let yRaqueteOponente = 150;
let velocidadeYOponente; 

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  colisaoBolinha();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //rebateBolinha();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente ();
  colisaoMinhaRaqueteBiblioteca();
  colisaoRaqueteOponenteBiblioteca();
  incluiPlacar ();
  marcaPontos ();
  
}
function mostraBolinha(){
    circle (xBolinha, yBolinha, diametro);
}
function movimentaBolinha(){
   xBolinha += velocidadeXBolinha;
   yBolinha += velocidadeYBolinha;
}
function colisaoBolinha(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
}

}
function mostraRaquete(x,y){
  rect (x, y, raqueteComprimento, raqueteAltura);
}


function movimentaMinhaRaquete(){
  if (keyIsDown (UP_ARROW)){
    yRaquete -=10;
  }
  if (keyIsDown (DOWN_ARROW)){
    yRaquete +=10;
  }  
}
function rebateBolinha(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete +raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 -30;
  yRaqueteOponente += velocidadeYOponente
}
function colisaoMinhaRaqueteBiblioteca(){
  colidiu =
  collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio)
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}
function colisaoRaqueteOponenteBiblioteca(){
  colidiu = 
    collideRectCircle(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}

function incluiPlacar(){
  fill (255)
  text (meusPontos, 150, 26);
  text (pontosDoOponente, 450, 26);
}

function marcaPontos(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosDoOponente += 1;
  }
}