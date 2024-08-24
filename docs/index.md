---
layout: home
title: Home
---

<script lang="ts" setup>
  import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue';
  import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';
  import { onBeforeUnmount } from 'vue';
  import { useModal, useVfm, } from 'vue-final-modal';
  import RSVPModal from './.vitepress/components/RSVPModal.vue';
  import RegisterModal from './.vitepress/components/RegisterModal.vue';

  const rsvpModalShown = Boolean(localStorage.getItem('rsvpModalShown'));
  const registerModalShown = Boolean(localStorage.getItem('registerModalShown'));

  const oneDay = 86400000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date();
  const secondDate = new Date('2024/09/14');

  const daysUntilWedding = Math.round(Math.abs((firstDate - secondDate) / oneDay));

</script>

<div class="hero">
  <VPImage class="image" image="/images/home_hero.jpg"></VPImage>

  <h1 class="hero-title">September 2024</h1>
</div>

<article class="action">
  <div class="action-description">
    <p>Our wedding is just <span class="excited">{{daysUntilWedding}}</span> days away!! We can't wait to celebrate!</p>
  </div>

  <VPImage image="/images/IMG_2627.jpg"></VPImage>
</article>

<carousel :autoplay="true" :loop="true" :scrollPerPage="false" :perPage="1" :perPageCustom="[[768,2]]" :paginationPosition="'bottom-overlay'">
  <slide>
    <VPImage image="/images/proposal.jpg"></VPImage>
  </slide>
  <slide>
    <VPImage image="/images/7A9C52CD-A283-4AF5-A4E4-E22EBDCAFF4A.jpg"></VPImage>
  </slide>
  <slide>
    <VPImage image="/images/IMG_0063.jpg"></VPImage>
  </slide>
  <slide>
    <VPImage image="/images/231113000203190014.jpg"></VPImage>
  </slide>
  <slide>
    <VPImage image="/images/231113000203220022.jpg"></VPImage>
  </slide>
  <slide>
    <VPImage image="/images/IMG_0426.jpg"></VPImage>
  </slide>
  <slide>
    <VPImage image="/images/231113000203190008.jpg"></VPImage>
  </slide>
</carousel>

<style lang="scss">
  @font-face{
    font-family: "Pacific Northwest Letters W01";
    src: url("/fonts/e0870aa7286662dd08f498a39e6737de.eot");
    src: url("/fonts/e0870aa7286662dd08f498a39e6737de.eot?#iefix")format("embedded-opentype"),
        url("/fonts/e0870aa7286662dd08f498a39e6737de.woff")format("woff"),
        url("/fonts/e0870aa7286662dd08f498a39e6737de.woff2")format("woff2"),
        url("/fonts/e0870aa7286662dd08f498a39e6737de.ttf")format("truetype"),
        url("/fonts/e0870aa7286662dd08f498a39e6737de.svg#Pacific Northwest Letters W01")format("svg");
    font-weight:normal;
    font-style:normal;
    font-display:swap;
  }

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

      p {
        font-size: 1.25em;
        line-height: 1.5em;
        margin-bottom: 2em;

        .excited {
          color: gold;
          font-size: 1.5em;
        }
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

        p {
          margin-bottom: 2em;
          margin-left: 3em;
          margin-right: 3em;
        }
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
