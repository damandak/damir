<template>
  <div class="dorly">
    <img src="~/assets/img/dorly.gif" alt="Dorly" />
  </div>
</template>
<style scoped lang="scss">
.dorly {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 70px;
  z-index: 1000; /* Ensure it's above other elements */
  img {
    width: 100%;
    height: 100%;
    transform-origin: bottom right; /* Scale up from bottom right */
    transition: transform 0.3s ease; /* Smooth scaling transition */
    &:hover {
      transform: scale(3);
    }
  }
}
@media screen and (max-width: 900px) {
  .dorly {
    display: none;
  }
}
</style>
