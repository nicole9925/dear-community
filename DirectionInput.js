class DirectionInput {
   constructor() {
      this.heldDirections = [];

      this.map = {
         "ArrowUp": "up",
         "ArrowDown": "down",
         "ArrowRight": "right",
         "ArrowLeft": "left",
         "KeyW": "up",
         "KeyS": "down",
         "KeyD": "right",
         "KeyA": "left"
      }
   }
   get direction() {
      return this.heldDirections[0];
   }
   init() {
      document.addEventListener("keydown", e => {
         const dir = this.map[e.code];
         if (dir && this.heldDirections.indexOf(dir) === -1) {
            this.heldDirections.unshift(dir);
         }
      });
      document.addEventListener("keyup", e => {
         const dir = this.map[e.code];
         const index = this.heldDirections.indexOf(dir);
         if(index > -1) {
            this.heldDirections.splice(index, 1);
         }
      })
   }
}