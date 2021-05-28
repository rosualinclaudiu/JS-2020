<template>
  <div class="game">
      <div 
      v-for="tower in game.towers"
      :key="tower.id"
      class="tower"
      >
      <div
        v-for="disk in tower.disks"
        :key="disk.size"
        class="disk"
        :style="{
            backgroundColor: disk.color.getCssColor(),
            width: disk.size + 'em'
        }"
      >
      </div>

      </div>
  </div>

</template>

<script>

import {Game} from '../classes/classes.js'
export default {
    data() {
        return {
            game: new Game(5)
        }
    },
}
</script>

<style>
.game {
    height: 80vh;
    width: 80vw;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
}
.tower {
    width: 30%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    height: 50%;

}
.tower::before {
    content: '';
    background-color: brown;
    height: 20%;
    width: 0.5em;
    position: absolute;
    z-index: -1;
}
.disk {
    height: 1em;
}
</style>