<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()
</script>

<template>
  <VueFinalModal class="register-modal" content-class="register-modal-content" overlay-transition="vfm-fade"
    content-transition="vfm-slide-down" swipe-to-close="down"
    @update:model-value="val => emit('update:modelValue', val)">
    <div class="data">
      <h1 class="title">
        Have you registered for your stay?
      </h1>
      <VPButton class="button" :text="'Click Here'" :href="'/lodging'"></VPButton>
    </div>
    <button class="close-button" @click="emit('update:modelValue', false)">
      <span class="material-symbols-outlined">
        close
      </span>
    </button>
    <slot />
  </VueFinalModal>
</template>

<style lang="scss">
.register-modal {
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-modal-content {
  display: flex;
  min-width: 300px;
  max-width: 752px;
  max-height: 100vh;
  overflow: auto;
  padding: 24px;
  flex-direction: column;
  background-color: var(--vp-c-bg);
  border-radius: 0.5rem;
}

.data {
  padding-top: 24px;
  text-align: center;

  .title {
    margin: 1em 0;
    font-weight: 600;
    letter-spacing: 0.15px;
    line-height: 28px;
    font-size: 20px;
  }
}

.close-button {
  position: absolute;
}
</style>