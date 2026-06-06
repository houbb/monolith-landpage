<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionTitle from '@/components/common/SectionTitle.vue'

const { t } = useI18n()

const activeIndex = ref(0)
const isTransitioning = ref(false)

const items = computed(() =>
  Array.from({ length: 8 }, (_, i) => t(`showcase.items[${i}]`))
)

function selectItem(index: number) {
  if (index === activeIndex.value || isTransitioning.value) return
  isTransitioning.value = true
  activeIndex.value = index
  setTimeout(() => {
    isTransitioning.value = false
  }, 500)
}

const showcaseContent: Record<number, { title: string; lines: string[] }> = {
  0: { title: 'Markdown Editor', lines: ['# My Knowledge Note', '', '> Ideas worth preserving', '', 'Monolith supports **full Markdown** with live preview,', 'bidirectional links `[[like this]]`, and more.'] },
  1: { title: 'Bidirectional Links', lines: ['[[Knowledge Graph]] <-- --> [[This Note]]', '', 'Backlinks:', '  - 3 incoming references', '  - 5 outgoing references', 'Every connection is tracked automatically.'] },
  2: { title: 'Knowledge Graph', lines: ['  +---------+     +---------+', '  | Notes   |---->| AI      |', '  +---------+     +---------+', '       |               |', '  +---------+     +---------+', '  | Search  |---->| Plugins |'] },
  3: { title: 'AI Workspace', lines: ['User: Summarize my notes on AI', '', 'AI: Based on 12 notes, here is a summary:', '  - Key concept: Local-first knowledge', '  - Related topics: Privacy, Offline-first', '  - Suggested action: Create a new note'] },
  4: { title: 'Full-Text Search', lines: ['Search: "knowledge graph"', '', 'Results (8 found):', '  1. Introduction to Knowledge Graph', '  2. Graph Visualization Guide', '  3. Building Connections Between Notes', '  ...'] },
  5: { title: 'Plugin Marketplace', lines: ['Available Plugins:', '  [Install] Graph Analytics v2.1', '  [Install] PDF Export v1.4', '  [Install] Theme Customizer v3.0', '', 'Extend Monolith your way.'] },
  6: { title: 'Multi-Device Sync', lines: ['Sync Status:', '  Desktop  ....  Synced', '  Mobile   ....  Synced', '  Tablet   ....  Pending', '', 'End-to-end encrypted sync.'] },
  7: { title: 'Theme & Appearance', lines: ['Current Theme: Dark Gold', '', 'Available:', '  - Dark Gold (active)', '  - Midnight Blue', '  - Forest Green', '  - Custom CSS'] },
}
</script>

<template>
  <section class="relative py-24 px-6" style="background: #0A0A0A">
    <div class="max-w-6xl mx-auto">
      <SectionTitle :title="t('showcase.sectionTitle')" :subtitle="t('showcase.sectionSubtitle')" />

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <!-- Left: Nav List -->
        <div class="lg:col-span-2 space-y-1">
          <button
            v-for="(item, index) in items"
            :key="index"
            class="w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 group"
            :class="activeIndex === index ? 'border-l-2' : 'border-l-2 border-transparent'"
            :style="activeIndex === index
              ? 'color: #D8A84F; border-color: #D8A84F; background: rgba(216,168,79,0.06)'
              : 'color: #9B9488'"
            @click="selectItem(index)"
          >
            <span class="text-xs font-mono w-6 shrink-0" :style="{ color: activeIndex === index ? '#D8A84F' : '#9B9488' }">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <span class="text-sm" :class="activeIndex === index ? 'font-medium' : ''">{{ item }}</span>
          </button>
        </div>

        <!-- Right: Simulated UI Window -->
        <div class="lg:col-span-3">
          <div
            class="rounded-xl overflow-hidden relative"
            style="background: #111111; border: 1px solid rgba(216,168,79,0.22)"
          >
            <!-- Window Title Bar -->
            <div class="flex items-center gap-2 px-4 py-3" style="border-bottom: 1px solid rgba(216,168,79,0.12)">
              <div class="w-3 h-3 rounded-full" style="background: #8A6426" />
              <div class="w-3 h-3 rounded-full" style="background: #8A6426" />
              <div class="w-3 h-3 rounded-full" style="background: #8A6426" />
              <span class="ml-2 text-xs" style="color: #9B9488">{{ showcaseContent[activeIndex]?.title }}</span>
            </div>

            <!-- Content Area -->
            <div class="p-6 min-h-[280px] relative overflow-hidden">
              <!-- Gold scan line effect -->
              <div
                v-if="isTransitioning"
                class="absolute inset-0 pointer-events-none"
                style="background: linear-gradient(180deg, transparent 0%, rgba(216,168,79,0.08) 50%, transparent 100%); animation: scanLine 0.5s ease-out"
              />
              <transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 translate-x-4"
                enter-to-class="opacity-100 translate-x-0"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
                mode="out-in"
              >
                <div :key="activeIndex" class="font-mono text-sm leading-relaxed space-y-1">
                  <p
                    v-for="(line, i) in showcaseContent[activeIndex]?.lines"
                    :key="i"
                    :style="{ color: line.startsWith('#') || line.startsWith('[') ? '#D8A84F' : line.startsWith('>') || line.startsWith('  -') || line.startsWith('Search') || line.startsWith('User') || line.startsWith('AI') || line.startsWith('Results') || line.startsWith('Available') || line.startsWith('Sync') || line.startsWith('Current') ? '#F5F1E8' : '#9B9488' }"
                  >
                    {{ line || '&nbsp;' }}
                  </p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scanLine {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}
</style>
