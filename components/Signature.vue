<template>
  <div class="signature">
    <p>© 2024 Diseño y desarrollo por Damir Mandakovic</p>
  </div>
</template>
<style scoped lang="scss">
.signature {
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  z-index: 1000; /* Ensure it's above other elements */
  p {
    font-size: 0.8rem;
    opacity: 0.6;
    color: #d868a4;
    text-align: center;
    width: 100%;
    margin: 0;
    padding: 5px 0;
  }
}
@media screen and (max-width: 900px) {
  .signature {
    display: none;
  }
}
</style>
