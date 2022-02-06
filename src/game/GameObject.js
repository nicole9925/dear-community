class GameObject {
   constructor(config) {
      this.x = config.x || 0;
      this.y = config.y || 0;
      this.direction = config.direction || "down"
      this.sprite = new ObjectSprite({
         gameObject: this,
         src: config.src || "./images/sunflower.png"
      })
   }
   update() {
   }
}