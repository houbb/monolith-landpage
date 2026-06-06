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
    { threshold: 0.08 },
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
    <!-- Ambient glow behind image -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full opacity-[0.06]"
        style="background: radial-gradient(ellipse, rgba(216,168,79,1) 0%, transparent 70%)"
      />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto">
      <!-- Section label -->
      <div
        class="text-center mb-14 transition-all duration-700"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <p
          class="text-xs font-medium tracking-[0.25em] uppercase mb-4"
          style="color: #D8A84F"
        >
          {{ t('showcaseImage.label') }}
        </p>
        <h2
          class="text-3xl md:text-5xl font-bold leading-tight mb-4"
          style="font-family: 'Space Grotesk', sans-serif; color: #F5F1E8"
        >
          {{ t('showcaseImage.title') }}
        </h2>
        <p class="text-base max-w-xl mx-auto" style="color: #9B9488">
          {{ t('showcaseImage.subtitle') }}
        </p>
      </div>

      <!-- Image container -->
      <div
        class="transition-all duration-1000 delay-300"
        :class="visible ? 'opacity-100 scale-[1] translate-y-0' : 'opacity-0 scale-[0.97] translate-y-8'"
      >
        <div
          class="relative rounded-2xl overflow-hidden"
          style="
            border: 1px solid rgba(216,168,79,0.18);
            box-shadow:
              0 4px 60px rgba(216,168,79,0.06),
              0 80px 120px -40px rgba(0,0,0,0.7);
          "
        >
          <!-- Subtle inner frame line -->
          <div
            class="absolute inset-0 rounded-2xl pointer-events-none"
            style="border: 1px solid rgba(255,255,255,0.03)"
          />

          <!-- The image -->
          <img
            src="/local-first-page.png"
            alt="Monolith Knowledge OS - Your knowledge, organized, connected, yours."
            class="w-full h-auto block"
            loading="lazy"
          />

          <!-- Bottom gradient overlay for seamless blend -->
          <div
            class="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
            style="background: linear-gradient(to top, #050505, transparent)"
          />
        </div>

        <!-- Caption row under image -->
        <div class="flex items-center justify-center gap-6 mt-8 flex-wrap">
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 rounded-full" style="background: #D8A84F" />
            <span class="text-xs" style="color: #9B9488">{{ t('showcaseImage.caption1') }}</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 rounded-full" style="background: #10B981" />
            <span class="text-xs" style="color: #9B9488">{{ t('showcaseImage.caption2') }}</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 rounded-full" style="background: #F59E0B" />
            <span class="text-xs" style="color: #9B9488">{{ t('showcaseImage.caption3') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
