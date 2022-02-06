class Sound {
   constructor({music}) {
      this.music = music;
      this.sound = null
   }
   createSound() {
      this.sound = document.createElement("audio");
      this.sound.src = this.music;
      this.sound.setAttribute("preload", "auto");
      this.sound.setAttribute("controls", "none");
      this.sound.style.display = "none";
      document.body.appendChild(this.sound);
      this.sound.volume = 0.05;
      
   }
   stop() {
      this.sound.stop();
   }
   init() {
      this.createSound();
      this.sound.muted=true;
      this.sound.play();
   }
}