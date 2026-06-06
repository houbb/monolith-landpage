<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'text'
  href?: string
  to?: string
  download?: string
}>(), {
  variant: 'primary',
})

const baseClass = 'inline-flex items-center justify-center font-medium transition-all duration-300 cursor-pointer select-none'
const variants: Record<string, string> = {
  primary: 'px-6 py-2.5 rounded-lg text-sm text-[#050505] font-semibold shadow-[0_0_20px_rgba(216,168,79,0.3)] hover:shadow-[0_0_30px_rgba(216,168,79,0.5)] hover:brightness-110',
  secondary: 'px-6 py-2.5 rounded-lg text-sm text-[#D8A84F] border border-[rgba(216,168,79,0.3)] bg-[rgba(216,168,79,0.05)] hover:bg-[rgba(216,168,79,0.12)] hover:border-[rgba(216,168,79,0.5)]',
  text: 'px-4 py-2 text-sm text-[#D8A84F] hover:text-[#FFD985] underline-offset-4 hover:underline',
}
const variantClass = computed(() => variants[props.variant] || variants.primary)
const primaryBg = 'background: linear-gradient(135deg, #D8A84F, #FFD985)'
</script>

<template>
  <a
    v-if="href"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :download="download"
    :class="[baseClass, variantClass]"
    :style="variant === 'primary' ? primaryBg : undefined"
  >
    <slot />
  </a>
  <router-link
    v-else-if="to"
    :to="to"
    :class="[baseClass, variantClass]"
    :style="variant === 'primary' ? primaryBg : undefined"
  >
    <slot />
  </router-link>
  <button
    v-else
    :class="[baseClass, variantClass]"
    :style="variant === 'primary' ? primaryBg : undefined"
  >
    <slot />
  </button>
</template>
