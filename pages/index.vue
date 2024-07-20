<template>
  <div class="wrapper">
    <div class="index-box">
      <div class="card-column">
        <div class="card main-card">
          <Damir />
        </div>
      </div>
      <div class="card-column">
        <div
          class="card photos-card"
          :style="{ backgroundImage: `url(${fotoJuncalChico})` }"
        >
          <p class="card-title">Fotografía de montaña</p>
        </div>
        <div
          class="card videos-card"
          :style="{ backgroundImage: `url(${fotoSeren})` }"
        >
          <p class="card-title">Videos de expediciones</p>
        </div>
      </div>
      <div class="card-column">
        <div
          class="card blog-card"
          :style="{ backgroundImage: `url(${fotoPenitente})` }"
        >
          <p class="card-title" style="font-size: 3rem">Blog</p>
        </div>
      </div>
      <div class="card-column small-column">
        <div class="card social-card instagram-card" @click="goToInstagram">
          <Icon name="uil:instagram" style="color: white" />
        </div>
        <div class="card social-card youtube-card" @click="goToYouTube">
          <Icon name="uil:youtube" style="color: white" />
        </div>
        <div class="card social-card github-card" @click="goToGitHub">
          <Icon name="uil:github" style="color: white" />
        </div>
        <div class="card social-card linkedin-card" @click="goToLinkedIn">
          <Icon name="uil:linkedin" style="color: white" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import fotoJuncalChico from "@/assets/img/fotojuncalchico.jpg";
import fotoSeren from "@/assets/img/seren.jpg";
import fotoPenitente from "@/assets/img/penitente.jpg";

definePageMeta({
  layout: "welcome",
});

const goToInstagram = () => {
  window.open("https://www.instagram.com/damir.mandakovic", "_blank");
};

const goToYouTube = () => {
  window.open("https://www.youtube.com/@damirmandakovic", "_blank");
};

const goToGitHub = () => {
  window.open("https://www.github.com/damandak", "_blank");
};

const goToLinkedIn = () => {
  window.open("https://www.linkedin.com/in/damirmandakovic", "_blank");
};
</script>
<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  min-height: 90vh; /* Ensure it takes at least full viewport height */
  padding: 20px; /* Optional: Add some padding for better visibility */
  box-sizing: border-box;
}
.index-box {
  height: auto;
  width: 70vw;
  min-width: 360px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 100%;
  border: solid 2px #1f1f1f;
  border-radius: 10px;
  .card-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 500px;
    min-width: 150px;
    flex: 1;
    max-width: 100%;
    &:not(:last-child) {
      border-right: solid 2px #1f1f1f;
    }
    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      .card:first-child {
        border-top-right-radius: 8px;
      }
      .card:last-child {
        border-bottom-right-radius: 8px;
      }
    }
    &.small-column {
      flex: 0.3;
    }
    .card {
      position: relative;
      height: 100%;
      width: 100%;
      cursor: pointer;
      transition: all 0.3s;
      opacity: 0.9;
      &:hover {
        transform: scale(1.1);
        border: solid 3px #1f1f1f;
        border-radius: 10px;
        opacity: 1;
        z-index: 1000;
      }
      &:not(:last-child) {
        border-bottom: solid 2px #1f1f1f;
      }
      &.main-card {
        background-color: #d868a4;
        transition: all 0.7s;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .damir-content {
          display: none;
          flex-grow: 1;
          max-width: 60%;
        }
      }
      &.social-card {
        padding-top: 30px;
        font-size: 4rem;
        text-align: center;
      }
      &.instagram-card {
        background: #f09433;
        background: -moz-linear-gradient(
          45deg,
          #f09433 0%,
          #e6683c 25%,
          #dc2743 50%,
          #cc2366 75%,
          #bc1888 100%
        );
        background: -webkit-linear-gradient(
          45deg,
          #f09433 0%,
          #e6683c 25%,
          #dc2743 50%,
          #cc2366 75%,
          #bc1888 100%
        );
        background: linear-gradient(
          45deg,
          #f09433 0%,
          #e6683c 25%,
          #dc2743 50%,
          #cc2366 75%,
          #bc1888 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
      }
      &.youtube-card {
        background-color: #ff0000;
      }
      &.github-card {
        background-color: rgb(30, 30, 30);
      }
      &.linkedin-card {
        background-color: #0e76a8;
      }
      &.photos-card,
      &.videos-card,
      &.blog-card {
        background-size: cover;
        background-position: center;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }
      }

      .card-title {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: "Anton";
        font-size: 1.8rem;
        color: rgb(255, 255, 255);
        text-align: center;
        z-index: 2;
      }
    }
  }
}
</style>
