<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Shield, Brain, Network, Puzzle } from 'lucide-vue-next'
import SectionTitle from '@/components/common/SectionTitle.vue'
import GoldCard from '@/components/common/GoldCard.vue'

const { t } = useI18n()

const features = [
  { key: 'localFirst', icon: Shield },
  { key: 'aiWorkspace', icon: Brain },
  { key: 'knowledgeGraph', icon: Network },
  { key: 'pluginSystem', icon: Puzzle },
]

const visible = ref(false)
const cardRefs = ref<HTMLElement[]>([])

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer.disconnect()
        }
      })
    },
    { threshold: 0.2 }
  )
  const section = document.getElementById('features-section')
  if (section) observer.observe(section)
})
</script>

<template>
  <section id="features-section" class="relative py-24 px-6" style="background: #050505">
    <div class="max-w-6xl mx-auto">
      <SectionTitle :title="t('features.sectionTitle')" :subtitle="t('features.sectionSubtitle')" />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(feature, index) in features"
          :key="feature.key"
          ref="cardRefs"
          class="transition-all duration-700"
          :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <GoldCard class="h-full">
            <div class="flex flex-col gap-4">
              <div
                class="w-12 h-12 rounded-lg flex items-center justify-center"
                style="background: rgba(216,168,79,0.1); border: 1px solid rgba(216,168,79,0.2)"
              >
                <component :is="feature.icon" :size="24" class="text-[#D8A84F]" />
              </div>
              <h3
                class="text-xl font-semibold"
                style="font-family: 'Space Grotesk', sans-serif; color: #F5F1E8"
              >
                {{ t(`features.${feature.key}.title`) }}
              </h3>
              <p class="text-sm leading-relaxed" style="color: #9B9488">
                {{ t(`features.${feature.key}.desc`) }}
              </p>
            </div>
          </GoldCard>
        </div>
      </div>
    </div>
  </section>
</template>
