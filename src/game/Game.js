import React from 'react'
import InnerHTML from 'dangerously-set-html-content'

function Game() {
    const html = `
    <div class="dummy-body">
        <div class="screen-container">
            <canvas class="screen-canvas" width="358" height="198"></canvas>
        </div>
    </div>
    <script src="./game/utils.js"></script>
    <script src="./game/Sound.js"></script>
    <script src="./game/DirectionInput.js"></script>
    <script src="./game/KeyPressListener.js"></script>
    <script src="./game/TextMessage.js"></script>
    <script src="./game/ObjectSprite.js"></script>
    <script src="./game/Sprite.js"></script>
    <script src="./game/GameObject.js"></script>
    <script src="./game/Person.js"></script>
    <script src="./game/Overworld.js"></script>
    <script src="./game/OverworldMap.js"></script>
    <script src="./game/init.js"></script>
    `
    return (
      <InnerHTML html={html} />
    )
  }

export default Game;