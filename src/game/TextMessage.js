class TextMessage {
   constructor({text, container}) {
      this.text = text;
      this.container = container;
      this.element = null;
   }

   createElement() {
      this.element = document.createElement("div");
      this.element.classList.add("TextMessage");
      this.element.innerHTML = (`
         <p class="TextMessage_p">${this.text}</p>
      `)
       this.actionListener = new KeyPressListener("Enter", () => {
         this.actionListener.unbind();
         this.done();
       })
   }
   done() {
      const elements = document.getElementsByClassName("TextMessage");
      while(elements.length > 0){
         elements[0].parentNode.removeChild(elements[0]);
      }
    }
   init() {
      this.createElement();
      this.container.appendChild(this.element);
   }
}