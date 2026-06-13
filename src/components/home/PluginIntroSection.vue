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
    { threshold: 0.12 },
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
    class="relative py-28 md:py-36 px-6 overflow-hidden"
    style="background: #050505"
  >
    <!-- Top divider -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px" style="background: linear-gradient(90deg, transparent, rgba(16,185,129,0.3), transparent)" />

    <!-- Background atmosphere -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Central green glow behind image -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-[0.05]"
        style="background: radial-gradient(ellipse at center, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.04) 40%, transparent 70%)"
      />
      <!-- Subtle grid -->
      <div
        class="absolute inset-0 opacity-[0.02]"
        style="background-image: linear-gradient(rgba(16,185,129,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.4) 1px, transparent 1px); background-size: 80px 80px"
      />
      <!-- Floating particles -->
      <div class="absolute top-[15%] right-[10%] w-1 h-1 rounded-full" style="background: rgba(16,185,129,0.3); animation: float 8s ease-in-out infinite" />
      <div class="absolute top-[25%] left-[12%] w-1.5 h-1.5 rounded-full" style="background: rgba(132,204,22,0.25); animation: float 10s ease-in-out infinite 2s" />
      <div class="absolute bottom-[30%] right-[18%] w-1 h-1 rounded-full" style="background: rgba(16,185,129,0.2); animation: float 9s ease-in-out infinite 4s" />
      <div class="absolute bottom-[20%] left-[8%] w-1.5 h-1.5 rounded-full" style="background: rgba(20,184,166,0.2); animation: float 11s ease-in-out infinite 1s" />
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <!-- Section Label -->
      <div
        class="text-center mb-4 transition-all duration-700"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <span
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase"
          style="border: 1px solid rgba(16,185,129,0.2); background: rgba(16,185,129,0.05); color: #10B981"
        >
          <span class="w-1.5 h-1.5 rounded-full animate-pulse" style="background: #10B981" />
          {{ t('pluginIntro.label') }}
        </span>
      </div>

      <!-- Main Title -->
      <h2
        class="text-center text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-700 delay-100"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        style="font-family: 'Space Grotesk', sans-serif; color: #F5F1E8"
      >
        {{ t('pluginIntro.title') }}
      </h2>

      <!-- Subtitle -->
      <p
        class="text-center text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-20 transition-all duration-700 delay-200"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        style="color: #9B9488"
      >
        {{ t('pluginIntro.subtitle') }}
      </p>

      <!-- Image Showcase Area -->
      <div
        class="transition-all duration-1000 delay-300"
        :class="visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.97]'"
      >
        <div class="relative max-w-4xl mx-auto">
          <!-- Glow backdrop behind image -->
          <div
            class="absolute -inset-4 md:-inset-8 rounded-3xl blur-2xl opacity-40"
            style="background: linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(132,204,22,0.04) 50%, rgba(20,184,166,0.06) 100%)"
          />

          <!-- Image frame with glass effect -->
          <div
            class="relative rounded-2xl overflow-hidden"
            style="
              border: 1px solid rgba(16,185,129,0.12);
              background: linear-gradient(145deg, rgba(13,13,13,0.9), rgba(8,8,8,0.95));
              box-shadow:
                0 0 0 1px rgba(255,255,255,0.03),
                0 24px 48px -12px rgba(0,0,0,0.5),
                0 0 80px -20px rgba(16,185,129,0.08);
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
                Monolith Plugin System
              </span>
            </div>

            <!-- Image container -->
            <div class="relative p-2 md:p-4">
              <div class="relative rounded-xl overflow-hidden group">
                <img
                  src="/monolith-plugin-system.webp"
                  alt="Monolith Plugin System"
                  class="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                  style="filter: contrast(1.03) brightness(0.98); border-radius: 12px;"
                  loading="lazy"
                />
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
            style="border-color: #10B981"
          />
          <div
            class="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 rounded-tr-lg opacity-30 transition-opacity duration-500"
            style="border-color: #10B981"
          />
          <div
            class="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 rounded-bl-lg opacity-30 transition-opacity duration-500"
            style="border-color: #10B981"
          />
          <div
            class="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 rounded-br-lg opacity-30 transition-opacity duration-500"
            style="border-color: #10B981"
          />
        </div>
      </div>

      <!-- Feature highlights below image -->
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto"
      >
        <div
          v-for="(feature, index) in 4"
          :key="index"
          class="group relative rounded-xl p-5 text-center transition-all duration-700 cursor-default"
          :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          :style="{
            transitionDelay: `${600 + index * 150}ms`,
            background: 'rgba(13,13,13,0.6)',
            border: '1px solid rgba(255,255,255,0.05)',
          }"
          @mouseenter="($event.currentTarget as HTMLElement).style.borderColor = 'rgba(16,185,129,0.2)'"
          @mouseleave="($event.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'"
        >
          <div class="w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-3 transition-colors duration-300" style="background: rgba(16,185,129,0.08)">
            <span class="text-sm font-bold" style="color: #10B981; font-family: 'Space Grotesk', sans-serif">{{ index + 1 }}</span>
          </div>
          <h3
            class="font-semibold text-sm mb-1.5"
            style="font-family: 'Space Grotesk', sans-serif; color: #F5F1E8"
          >
            {{ t(`pluginIntro.feature${index + 1}.title`) }}
          </h3>
          <p class="text-xs leading-relaxed" style="color: #6B6560">
            {{ t(`pluginIntro.feature${index + 1}.desc`) }}
          </p>
        </div>
      </div>
    </div>

    <!-- Bottom fade -->
    <div
      class="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
      style="background: linear-gradient(to bottom, transparent, #050505)"
    />
  </section>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
  50% { transform: translateY(-20px) scale(1.1); opacity: 0.6; }
}
</style>
