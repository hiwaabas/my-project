// three button on the bove 
// function handleClick(buttonId) {
//     console.log(`Button ${buttonId} clicked!`);
//     clockpro.style.display='block' 
    
//   }
  
//   document.getElementById('btn1').addEventListener('click', () => handleClick(1));
//   document.getElementById('btn2').addEventListener('click', () => handleClick(2));
//   document.getElementById('btn3').addEventListener('click', () => handleClick(3));
//   var clockpro = document.getElementsByClassName('container')
//   var radiopro = document.getElementById('audio_player')
//   var ticpro = document.getElementsByClassName('tic-tac-toe-container')

 $(document).ready(function(){
    $("#btn1").click(function(){
        $(".container").toggle(function(){$("#audio_player").hide(function(){$(".tic-tac-toe-container").hide()})});
        
    });
    $("#btn2").click(function(){
        $("#audio_player").toggle(function(){ $(".container").hide(function(){$(".tic-tac-toe-container").hide()})})
    });
    $("#btn3").click(function(){
        $(".tic-tac-toe-container").toggle(function(){$(".container").hide(function(){$("#audio_player").hide()})})
    });
});

// clock 
class Clock {
    constructor() {
      this.body = document.querySelector("body");
      this.hourHand = document.querySelector(".hour");
      this.minuteHand = document.querySelector(".minute");
      this.secondHand = document.querySelector(".second");
      this.modeSwitch = document.querySelector(".mode-switch");
  
      // check if the mode is already set to "Dark Mode" in localStorage
      if (localStorage.getItem("mode") === "Dark Mode") {
        // add "dark" class to body and set modeSwitch text to "Light Mode"
        this.body.classList.add("dark");

        this.modeSwitch.textContent = "Light Mode";
      }
  
      // add a click event listener to modeSwitch
      this.modeSwitch.addEventListener("click", () => {
        // toggle the "dark" class on the body element
        this.body.classList.toggle("dark");
        // check if the "dark" class is currently present on the body element
        const isDarkMode = this.body.classList.contains("dark");
        // set modeSwitch text based on "dark" class presence
        this.modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
        // set localStorage "mode" item based on "dark" class presence
        localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
      });
  
      // call updateTime to set clock hands every second
      setInterval(this.updateTime.bind(this), 1000);
  
      // call updateTime function on page load
      this.updateTime();
    }
  
    updateTime() {
      // Get current time and calculate degrees for clock hands
      let date = new Date(),
        secToDeg = (date.getSeconds() / 60) * 360,
        minToDeg = (date.getMinutes() / 60) * 360,
        hrToDeg = (date.getHours() / 12) * 360;
  
      // Rotate the clock hands to the appropriate degree based on the current time
      this.secondHand.style.transform = `rotate(${secToDeg}deg)`;
      this.minuteHand.style.transform = `rotate(${minToDeg}deg)`;
      this.hourHand.style.transform = `rotate(${hrToDeg}deg)`;
    }
  }
  
  // Create an instance of the Clock class
  const clock = new Clock();


// radio .......................................

class Colors{
    constructor(){
        if(localStorage.getItem("SaveColor")==null){
    
            document.body.style.background = "linear-gradient(to right, #00d2ff, #928dab)";
       
        }

    this.color1 = document.getElementById("color-1");
    this.color1.addEventListener("click",()=>{
        this.selectColor("color-1");
    });

    this.color2 = document.getElementById("color-2");
    this.color2.addEventListener("click",()=>{
        this.selectColor("color-2");
    });

    this.color3 = document.getElementById("color-3");
    this.color3.addEventListener("click",()=>{
        this.selectColor("color-3");
    });

    this.color4 = document.getElementById("color-4");
    this.color4.addEventListener("click",()=>{
        this.selectColor("color-4");
    });

    this.selectColor(localStorage.getItem("SaveColor"));
    }

    selectColor(color){
       
        this.header = document.getElementById("header");
        if(color == "color-1"){
            this.header.style.background ="#232D3F";
            this.header.style.border='1px solid black'
            document.body.style.background = "rgb(27, 27, 27)";
        }
        else if(color == "color-2"){
            this.header.style.background ="#aed6f1";
            document.body.style.background ="rgb(27, 27, 27)";
        }

        else if(color == "color-3"){
            this.header.style.background ="#005B41";
            document.body.style.background ="rgb(27, 27, 27)";
        }

        else if(color == "color-4"){
            this.header.style.background = "#008170";
            this.header.style.border='1px solid white'
            document.body.style.background ="rgb(27, 27, 27)";
        }
        localStorage.setItem("SaveColor",color);
    }

}
onload = new Colors();



class Player{
    constructor(){
        
        this.audio_file = document.getElementById("audio_file");
        this.isPlayed;

        this.play = document.getElementById("play");
        this.play.addEventListener("click",()=>{this.play_pause();});

        this.audios =[];
        this.audios[0] = "http://yayin.firatfm.com:3065/;audio.mp3&bufferlength=2&volume=100&streamer=rtmp://wowza.firatfm.com:3270/shoutcast/firatfm&skin=https://www.firatfm.com/ekle/yanyesil/videosmartclassic.zip&autostart=true&stretching=fill";
        this.audios[1] = "http://yayin.firatfm.com:3065/;audio.mp3&bufferlength=2&volume=100&streamer=rtmp://wowza.firatfm.com:3270/shoutcast/firatfm&skin=https://www.firatfm.com/ekle/yanyesil/videosmartclassic.zip&autostart=true&stretching=fill";
        this.audios[2] = "http://yayin.firatfm.com:3065/;audio.mp3&bufferlength=2&volume=100&streamer=rtmp://wowza.firatfm.com:3270/shoutcast/firatfm&skin=https://www.firatfm.com/ekle/yanyesil/videosmartclassic.zip&autostart=true&stretching=fill";
    
        this.names = [];
        this.names[0] = "Radio 1";
        this.names[1] = "Radio 2";
        this.names[2] = "Radio 3";
        
        this.numberAudio =0;

     

        this.next = document.getElementById("next");
        this.next.addEventListener("click",()=>{
            this.next_audio();
        });
           

        this.back = document.getElementById("back");
        this.back.addEventListener("click",()=>{
            
          this.back_audio();  
         
        });

        this.setSource();
    }
    play_pause(){
        if(this.isPlayed==false){
            this.play.src = "./img/pause.png";
            this.audio_file.play();
            this.isPlayed=true;
        }
        else{
            this.play.src = "./img/play.png";
            this.audio_file.pause();
            this.isPlayed=false;
        }
    }

    next_audio(){
         if(this.numberAudio<this.audios.length-1){
                ++this.numberAudio;
                this.isPlayed = false; 
                }
         else   {
                this.numberAudio = 0;
                }
                this.setSource();
    }
    back_audio(){
        if(this.numberAudio>0){
            --this.numberAudio;
            this.isPlayed = false; 
         }
         else{
            this.numberAudio = this.audios.length -1;
            
         }
      
         this.setSource();
    }
    setSource(){
 
    document.getElementById("radio-title").innerHTML = this.names[this.numberAudio];
    document.getElementById("audio_file").src = this.audios[this.numberAudio];

    this.play_pause();
    }

}
onload = new Player();





setInterval(()=>{
    var width = screen.width;
    var height = screen.height;
	
 if(width<=1024){
 
     document.getElementById("audio_player").style.width = width+"px";
     document.getElementById("audio_player").style.height = height+"px";

    }
    if(screen.width<=320){
     document.getElementById("audio_player").style.height = 100+height+"px";

    }
});
    



class Speed_Volume{
    constructor(){
        this.audio_file = document.getElementById("audio_file");

        var speed = document.getElementById("speed");
        speed.addEventListener("change",()=>{
         this.audio_file.playbackRate = speed.value / 100;
        });
       
    }

}
onload =new Speed_Volume();




class Volume{
    constructor(){

        this.audio_file = document.getElementById("audio_file");

        var volume = document.getElementById("volume");
        this.audio_file.volume= 50/100;
        
        volume.addEventListener("change",()=>{
         this.audio_file.volume = volume.value / 100 ;
        } );
    }

}
onload = new Volume();


setInterval(()=>{
    var width = screen.width;
    var height = screen.height;

 if(width<=768){
 
     document.getElementById("audio_player").style.width = width+"px";
     document.getElementById("audio_player").style.height = height+"px";

    }});
    //TicTacToeGame .........................

class TicTacToeGame {
    constructor() {
      this.board = document.getElementById('board');
      this.squares = document.getElementsByClassName('square');
      this.players = ['X', 'O'];
      this.currentPlayer = this.players[0];
      this.endMessage = document.createElement('h2');
      this.endMessage.textContent = `X's turn!`;
      this.endMessage.style.marginTop = '30px';
      this.endMessage.style.textAlign = 'center';
      this.board.after(this.endMessage);
  
      this.winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
  
      for (let i = 0; i < this.squares.length; i++) {
        this.squares[i].addEventListener('click', () => {
          if (this.squares[i].textContent !== '') {
            return;
          }
          this.squares[i].textContent = this.currentPlayer;
          if (this.checkWin(this.currentPlayer)) {
            this.endMessage.textContent = `Game over! ${this.currentPlayer} wins!`;
            setTimeout(() => {
              this.restartGame();
            }, 2000);
            return;
          }
          if (this.checkTie()) {
            this.endMessage.textContent = `Game is tied!`;
            setTimeout(() => {
              this.restartGame();
            }, 2000);
            return;
          }
          this.currentPlayer = (this.currentPlayer === this.players[0]) ? this.players[1] : this.players[0];
          if (this.currentPlayer === this.players[0]) {
            this.endMessage.textContent = `X's turn!`;
          } else {
            this.endMessage.textContent = `O's turn!`;
          }
        });
      }
  
      this.restartGame();
    }
  
    checkWin(currentPlayer) {
      for (let i = 0; i < this.winningCombinations.length; i++) {
        const [a, b, c] = this.winningCombinations[i];
        if (this.squares[a].textContent === currentPlayer && this.squares[b].textContent === currentPlayer && this.squares[c].textContent === currentPlayer) {
          this.endMessage.textContent = `loading..`;
          this.squares[a].style.background = 'green';
          this.squares[b].style.background = 'green';
          this.squares[c].style.background = 'green';
          return true;
        }
      }
      return false;
    }
  
    checkTie() {
      for (let i = 0; i < this.squares.length; i++) {
        if (this.squares[i].textContent === '') {
          return false;
        }
      }
      return true;
    }
  
    restartGame() {
      for (let i = 0; i < this.squares.length; i++) {
        this.squares[i].textContent = '';
        this.squares[i].style.background = '';
      }
      this.endMessage.textContent = `X's turn!`;
      this.currentPlayer = this.players[0];
    }
  }
  
  // Create an instance of the TicTacToeGame class
  const game = new TicTacToeGame();