<template>
  <div class="navbar">
    <ul>
      <!-- <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li> -->
      <li><a href="/">damir mandakovic pizarro</a></li>
      <li><a href="/about">tech</a></li>
      <li><a href="/about">fotos</a></li>
      <li><a href="/contact">videos</a></li>
      <li><a href="/blog">blog</a></li>
    </ul>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.navbar {
  width: 98vw;
  margin-top: 0;
  height: 55px;
  text-align: center;
  position: fixed;
  left: 1vw;
  top: 10px;
  //border: solid 1px #d868a4;
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      margin: 0;
      flex: 1;
      max-width: 100%;
      height: 56px;
      &:first-child {
        flex-grow: 1.5;
        a {
          border-radius: 5px 0 0 5px;
          font-size: 1rem;
          height: 22px;
          padding: 17px 0;
        }
      }
      &:last-child a {
        border-radius: 0 5px 5px 0;
      }
      a {
        color: #d868a4;
        background-color: #fff;
        text-decoration: none;
        width: 100%;
        height: auto;
        display: block;
        padding: 20px 0;
        transition: all 0.3s;
        font-size: 0.8rem;
        outline: 2px solid #d868a4;
        outline-offset: -0.5px;
        &:hover {
          background-color: #d868a4;
          color: #fff;
        }
      }
    }
  }
}
</style>
