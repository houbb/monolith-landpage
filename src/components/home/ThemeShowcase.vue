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
          class="text-3xl md:text-5xl font-bold leading-tight mb-5 whitespace-nowrap"
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
        :class="visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.97]'"
      >
        <div class="relative max-w-4xl mx-auto">
          <!-- Glow backdrop behind image -->
          <div
            class="absolute -inset-4 md:-inset-8 rounded-3xl blur-2xl opacity-40"
            style="background: linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(236,72,153,0.04) 50%, rgba(216,168,79,0.06) 100%)"
          />

          <!-- Image frame with glass effect -->
          <div
            class="relative rounded-2xl overflow-hidden"
            style="
              border: 1px solid rgba(216,168,79,0.12);
              background: linear-gradient(145deg, rgba(13,13,13,0.9), rgba(8,8,8,0.95));
              box-shadow:
                0 0 0 1px rgba(255,255,255,0.03),
                0 24px 48px -12px rgba(0,0,0,0.5),
                0 0 80px -20px rgba(99,102,241,0.08);
            "
          >
            <!-- Top chrome bar -->
            <div
              class="flex items-center gap-2 px-4 py-3 border-b"
              style="border-color: rgba(255,255,255,0.05); background: rgba(255,255,255,0.01)"
            >
              <div class="flex gap-1.5">
                <div class="w-2.5 h-2.5 rounded-full" style="background: rgba(244,63,94,0.7)" />
                <div class="w-2.5 h-2.5 rounded-full" style="background: rgba(245,158,11,0.7)" />
                <div class="w-2.5 h-2.5 rounded-full" style="background: rgba(34,197,94,0.7)" />
              </div>
              <span
                class="flex-1 text-center text-[11px] font-mono tracking-wide"
                style="color: #4A4540"
              >
                Monolith Theme Studio
              </span>
            </div>

            <!-- Image container -->
            <div class="relative p-2 md:p-4">
              <div class="relative rounded-xl overflow-hidden group">
                <img
                  src="/monolith-theme-studio.webp"
                  alt="Monolith Theme Studio - Your knowledge garden should be colorful"
                  class="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                  style="filter: contrast(1.03) brightness(0.98); border-radius: 12px;"
                  loading="lazy"
                />
                <!-- Gradient overlay at bottom of image -->
                <div
                  class="absolute bottom-0 left-0 right-0 h-16 pointer-events-none transition-opacity duration-500 group-hover:opacity-0"
                  style="background: linear-gradient(to top, rgba(5,5,5,0.3), transparent); border-radius: 0 0 12px 12px;"
                />
              </div>
            </div>
          </div>

          <!-- Decorative corner accents -->
          <div
            class="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 rounded-tl-lg opacity-30 transition-opacity duration-500"
            style="border-color: #D8A84F"
          />
          <div
            class="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 rounded-tr-lg opacity-30 transition-opacity duration-500"
            style="border-color: #D8A84F"
          />
          <div
            class="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 rounded-bl-lg opacity-30 transition-opacity duration-500"
            style="border-color: #D8A84F"
          />
          <div
            class="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 rounded-br-lg opacity-30 transition-opacity duration-500"
            style="border-color: #D8A84F"
          />
        </div>
      </div>
    </div>
  </section>
</template>
