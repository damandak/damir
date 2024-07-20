<template>
  <div class="logo-damir">
    <p class="damir">DAMIR</p>
    <p class="manda">MANDA</p>
    <p class="kovic">K O V I C</p>
    <p class="pizarro">P I Z A R R O</p>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.logo-damir {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  p {
    font-family: "Anton";
    font-weight: 1000;
    margin: 0;
    line-height: 0.95;
  }
  .damir {
    font-size: 4rem;
    color: white;
    text-align: center;
  }
  .manda {
    font-size: 3.6rem;
    color: white;
    text-align: center;
  }
  .kovic {
    font-size: 3.1rem;
    color: white;
    text-align: center;
  }
  .pizarro {
    font-size: 2.1rem;
    color: white;
    font-weight: bold;
    text-align: center;
  }
}
</style>
