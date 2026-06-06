<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const sectionRef = ref<HTMLElement>()
const visible = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer?.disconnect()
        }
      })
    },
    { threshold: 0.15 },
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => {
  observer?.disconnect()
})

const principles = [
  { key: 'localFirst', icon: '\u25CF' },
  { key: 'plainText', icon: '\u25B6' },
  { key: 'plugin', icon: '\u2726' },
  { key: 'uiStyle', icon: '\u25A0' },
]
</script>

<template>
  <section
    ref="sectionRef"
    class="relative py-24 px-6 overflow-hidden"
    style="background: #050505"
  >
    <!-- Subtle top divider line -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px" style="background: linear-gradient(90deg, transparent, rgba(216,168,79,0.3), transparent)" />

    <div class="relative z-10 max-w-4xl mx-auto text-center">
      <!-- Label -->
      <p
        class="text-xs font-medium tracking-[0.3em] uppercase mb-5 transition-all duration-700"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        style="color: #D8A84F"
      >
        {{ t('philosophy.label') }}
      </p>

      <!-- Main text -->
      <h2
        class="text-2xl md:text-4xl font-bold leading-snug mb-4 transition-all duration-700 delay-100"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        style="font-family: 'Space Grotesk', sans-serif; color: #F5F1E8"
      >
        {{ t('philosophy.title') }}
      </h2>

      <p
        class="text-base md:text-lg leading-relaxed mb-14 transition-all duration-700 delay-200"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        style="color: #9B9488; max-width: 600px; margin-left: auto; margin-right: auto;"
      >
        {{ t('philosophy.subtitle') }}
      </p>

      <!-- Principles grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden" style="border: 1px solid rgba(216,168,79,0.12)">
        <div
          v-for="(item, index) in principles"
          :key="item.key"
          class="transition-all duration-700 px-6 py-8 group hover:bg-[rgba(216,168,79,0.03)]"
          :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          :style="{ transitionDelay: `${300 + index * 120}ms`, background: '#080808' }"
        >
          <div class="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors duration-300" style="background: rgba(216,168,79,0.08); border: 1px solid rgba(216,168,79,0.15)">
            <span class="text-sm" style="color: #D8A84F">{{ item.icon }}</span>
          </div>
          <h3
            class="font-semibold text-sm mb-2"
            style="font-family: 'Space Grotesk', sans-serif; color: #F5F1E8"
          >
            {{ t(`philosophy.${item.key}.title`) }}
          </h3>
          <p class="text-xs leading-relaxed" style="color: #9B9488">
            {{ t(`philosophy.${item.key}.desc`) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
