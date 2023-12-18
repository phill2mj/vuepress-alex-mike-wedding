---
layout: home
---

<script lang="ts" setup>
  import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue';
  import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';
</script>

<div class="hero">
  <VPImage class="image" :image="'images/home_hero.jpeg'"></VPImage>

  <h1 class="hero-title">September 2024</h1>
</div>

<article class="action">
  <div class="action-description">
    <p>Join us in September for a summer-camp style celebration in the mountains of North Carolina</p>
    <p>Please fill out a brief questionnaire to help us plan for this fun filled weekend</p>
    <VPButton text="Click to View" href="https://docs.google.com/forms/d/e/1FAIpQLSfjVaCJHiNUDhZZocJlhuo69HipwODoZLmgsj4-apVz4iRdIg/viewform?usp=sf_link" />
  </div>

  <VPImage :image="'images/IMG_2627.jpeg'"></VPImage>
</article>

<carousel :autoplay="true" :loop="true" :scrollPerPage="false" :perPage="1" :perPageCustom="[[768,2]]" :paginationPosition="'bottom-overlay'">
  <slide>
    <VPImage :image="'images/DSC_0199.JPG'"></VPImage>
  </slide>
  <slide>
    <VPImage :image="'images/7A9C52CD-A283-4AF5-A4E4-E22EBDCAFF4A.jpg'"></VPImage>
  </slide>
  <slide>
    <VPImage :image="'images/IMG_0063.jpeg'"></VPImage>
  </slide>
  <slide>
    <VPImage :image="'images/231113000203190014.jpg'"></VPImage>
  </slide>
  <slide>
    <VPImage :image="'images/231113000203220022.jpg'"></VPImage>
  </slide>
  <slide>
    <VPImage :image="'images/IMG_0426.jpeg'"></VPImage>
  </slide>
  <slide>
    <VPImage :image="'images/IMG_2627.jpeg'"></VPImage>
  </slide>
</carousel>

<style lang="scss">
  .hero {
    position: relative;

    .hero-title {
      font-family: "Pacific Northwest Letters W01";
      position: absolute;
      top: 98%;
      left: 5rem;
      font-size: min(8vw, 80px);
    }
  }

  .action {
    margin: 4em 10%;

    .action-description {
      text-align: center;
      margin: 0 2em;

      p {
        margin-bottom: 2em;
        font-size: 1.25em;
        line-height: 1.5em;
      }
    }

    .VPImage {
      border-radius: 25%;
      margin: 2em 0;
    }
  }

  .VueCarousel {
    .VPImage {
      min-width: 100vw;
      height: 30em;
      object-fit: cover;
      width: auto;
    }
  }

  @media (min-width: 768px) {
    .action {
      display: flex;
      align-items: center;
      justify-content: center;

      .action-description {
        width: 50%;
      }

      .VPImage {
        justify-self: center;
        max-height: 50vh;
        margin: 0 3em;
      }
    }

    .VueCarousel {
      .VPImage {
        min-width: 50vw;
        height: 30em;
        object-fit: cover;
        width: auto;
      }
    }
  }
</style>
