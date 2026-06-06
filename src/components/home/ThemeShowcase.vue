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
    { threshold: 0.1 },
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <section
    ref="sectionRef"
    class="relative py-28 px-6 overflow-hidden"
    style="background: linear-gradient(180deg, #050505 0%, #080808 50%, #050505 100%)"
  >
    <!-- Multi-color ambient glow to echo the theme variety -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        class="absolute top-1/3 left-[15%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
        style="background: radial-gradient(circle, rgba(216,168,79,1) 0%, transparent 70%)"
      />
      <div
        class="absolute top-1/2 right-[10%] w-[350px] h-[350px] rounded-full opacity-[0.04]"
        style="background: radial-gradient(circle, rgba(99,102,241,1) 0%, transparent 70%)"
      />
      <div
        class="absolute bottom-1/4 left-[40%] w-[300px] h-[300px] rounded-full opacity-[0.03]"
        style="background: radial-gradient(circle, rgba(16,185,129,1) 0%, transparent 70%)"
      />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto">
      <!-- Text side -->
      <div
        class="max-w-xl mb-14 transition-all duration-700"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <p
          class="text-xs font-medium tracking-[0.25em] uppercase mb-4"
          style="color: #D8A84F"
        >
          {{ t('themeShowcase.label') }}
        </p>

        <h2
          class="text-3xl md:text-5xl font-bold leading-tight mb-5"
          style="font-family: 'Space Grotesk', sans-serif; color: #F5F1E8"
        >
          {{ t('themeShowcase.title') }}
        </h2>

        <p class="text-base md:text-lg leading-relaxed" style="color: #9B9488">
          {{ t('themeShowcase.subtitle') }}
        </p>

        <!-- Color dots row -->
        <div class="flex items-center gap-3 mt-6 flex-wrap">
          <span
            v-for="(color, i) in ['rgba(216,168,79,0.8)', 'rgba(99,102,241,0.8)', 'rgba(16,185,129,0.8)', 'rgba(236,72,153,0.8)', 'rgba(244,63,94,0.8)', 'rgba(245,158,11,0.8)']"
            :key="i"
            class="w-3 h-3 rounded-full transition-transform duration-300 hover:scale-150"
            :style="{ background: color }"
          />
        </div>
      </div>

      <!-- Image -->
      <div
        class="transition-all duration-1000 delay-200"
        :class="visible ? 'opacity-100 scale-[1] translate-y-0' : 'opacity-0 scale-[0.97] translate-y-10'"
      >
        <div
          class="relative rounded-2xl overflow-hidden"
          style="
            border: 1px solid rgba(216,168,79,0.16);
            box-shadow:
              0 4px 80px rgba(99,102,241,0.06),
              0 60px 120px -30px rgba(0,0,0,0.65);
          "
        >
          <!-- Inner frame -->
          <div
            class="absolute inset-0 rounded-2xl pointer-events-none"
            style="border: 1px solid rgba(255,255,255,0.02)"
          />

          <img
            src="/monolith-theme-studio.png"
            alt="Monolith Theme Studio - Your knowledge garden should be colorful"
            class="w-full h-auto block"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
