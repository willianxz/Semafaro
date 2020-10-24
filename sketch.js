
//Iniciamos o nosso tempo valendo 0, para posteriormente usarmos em nossos métodos
var tempo = 0;
var semafaro1;

function setup(){
  createCanvas(windowWidth, windowHeight);  

//Parte da Criação dos objetos, onde criamos o nosso Semáfaro, inicialmente desligado.
  semafaro1 = new Semafaro(false,false,false);
}



//Essa função draw é a função especial da biblioteca
function draw() {
     background(0, 0, 255, 1);
     frameRate(50); // Definimos a velocidade  constante da animação por segundo.
     semafaro1.render(); 
     semafaro1.ligar(); //Ligamos o nosso semafaro.
     tempo++; //E devido a essa função especial e ao ++, o tempo vai aumentando em +1.
}



  // Criamos o projeto do que seria um Semáfaro, onde guardaremos as cores vindo como true/false
  function Semafaro(vermelho, laranja, verde){
       this.vermelho = vermelho;
       this.laranja = laranja;
       this.verde = verde;
       
       
       
      //Aqui criamos o método para inicialmente desenhar nosso Semáfaro
         this.render = function() {
              
              //Declaramos um array para guardarmos as cores
              var cores = []; 
              
               push();
               translate(width/2,height/2);
               scale(1.8); 
               
               
              //Se a cor vermelha vier como true, então guardamos a cor vermelha, se não guardaremos a cor de desligado, sendo ela preta.
              if(this.vermelho){
                  cores.push(255);
                  cores.push(0);
                  cores.push(0);
              }else{
                  cores.push(5);
                  cores.push(5);
                  cores.push(5);
              }
              
              //Se a cor verde vier como true, então guardamos a cor laranja, se não guardaremos a cor de desligado, sendo ela preta.
              if(this.laranja){
                  cores.push(237);
                  cores.push(76);
                  cores.push(7);  
              }else{
                  cores.push(5);
                  cores.push(5);
                  cores.push(5);
              }
          
          //Se a cor verde vier como true, então guardamos a cor verde, se não guardaremos a cor de desligado, sendo ela preta.
              if(this.verde){
                  cores.push(15);
                  cores.push(235);
                  cores.push(7);  
              }else{
                  cores.push(5);
                  cores.push(5);
                  cores.push(5);  
              }
              
              
              fill(13, 12, 12);
             
              strokeWeight(10);
              rect(-50,-100,100,190);
              
              strokeWeight(15);
              line(0, -400, 0, -105);
              
              //Essa parte é a parte onde colocamos as cores que foram adicionadas ao nosso array de cores
              fill(cores[6], cores[7], cores[8]);
              ellipse(0,55,40,40);
              
              
              fill(cores[3], cores[4], cores[5]);
              ellipse(0,-4.5,40,40);
              
              
              fill(cores[0], cores[1], cores[2]);
              ellipse(0,-65,40,40);
              
      }
      
      
      //Esse nosso método é para ligar o nosso Semáfaro
         this.ligar = function(){
              
               //Se o tempo for acima de 100, 'ligue' o vermelho.
              if(tempo > 0){ 
                  this.verde = true;
              }
              
              //Se o tempo for acima de 300, 'ligue' o verde e 'apague' o vermelho.
              if(tempo > 150){ 
                  this.verde = false;
                  this.laranja = true;
              }
              
              //Se o tempo for acima de 500, 'ligue' o laranja e 'apague' o verde.
              if(tempo > 250){
                  this.laranja = false;
                  this.vermelho = true;
              }
              
              //Se o tempo for acima de 700, reiniciaremos a nossa apresentação do Semáfaro
              if(tempo === 350){
                  this.desligar(); //Usamos o método interno para desligar nosso Semáfaro.
              }
              
      }
      
       //Aqui esta o nosso método para desligar o nosso Semáfaro
       this.desligar = function(){
              this.vermelho = false;
              this.laranja = false;   //Colocamos todas as cores como false.
              this.verde = false;
              
              tempo = 0; // E zeramos o nosso tempo.
      }

  }
