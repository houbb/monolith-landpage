<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  Shield,
  Brain,
  Network,
  Link2,
  Search,
  Puzzle,
  Code2,
  GitBranch,
  TerminalSquare,
} from 'lucide-vue-next'

const { t } = useI18n()

const sectionRef = ref<HTMLElement>()
const visible = ref(false)

interface CardDef {
  key: string
  icon: any
  span: string
  accent: string
  accentRgb: string
}

const cards: CardDef[] = [
  { key: 'localFirst', icon: Shield, span: 'md:col-span-2 md:row-span-2', accent: '#D8A84F', accentRgb: '216,168,79' },
  { key: 'aiWorkspace', icon: Brain, span: '', accent: '#F59E0B', accentRgb: '245,158,11' },
  { key: 'knowledgeGraph', icon: Network, span: '', accent: '#10B981', accentRgb: '16,185,129' },
  { key: 'bidirectionalLinks', icon: Link2, span: '', accent: '#06B6D4', accentRgb: '6,182,212' },
  { key: 'semanticSearch', icon: Search, span: '', accent: '#D8A84F', accentRgb: '216,168,79' },
  { key: 'pluginEcosystem', icon: Puzzle, span: '', accent: '#F43F5E', accentRgb: '244,63,94' },
  { key: 'codeGraph', icon: Code2, span: '', accent: '#14B8A6', accentRgb: '20,184,166' },
  { key: 'gitSync', icon: GitBranch, span: '', accent: '#F97316', accentRgb: '249,115,22' },
  { key: 'runtimeBlocks', icon: TerminalSquare, span: '', accent: '#84CC16', accentRgb: '132,204,22' },
]

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
  <section ref="sectionRef" class="relative py-24 px-6 overflow-hidden" style="background: #050505">
    <!-- Subtle background glow -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style="background: radial-gradient(circle, rgba(216,168,79,1) 0%, transparent 70%)"
      />
      <div
        class="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style="background: radial-gradient(circle, rgba(16,185,129,1) 0%, transparent 70%)"
      />
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="mb-16">
        <p
          class="text-xs font-medium tracking-[0.2em] uppercase mb-4"
          style="color: #D8A84F"
        >
          {{ t('capabilities.label') }}
        </p>
        <h2
          class="text-3xl md:text-5xl font-bold mb-5 leading-tight"
          style="font-family: 'Space Grotesk', sans-serif; color: #F5F1E8"
        >
          {{ t('capabilities.sectionTitle') }}
        </h2>
        <p class="text-lg max-w-2xl" style="color: #9B9488">
          {{ t('capabilities.sectionSubtitle') }}
        </p>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="(card, index) in cards"
          :key="card.key"
          class="group relative rounded-2xl border overflow-hidden transition-all duration-500 cursor-default"
          :class="[card.span, visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']"
          :style="{
            transitionDelay: `${index * 80}ms`,
            background: '#0D0D0D',
            borderColor: `rgba(${card.accentRgb}, 0.15)`,
          }"
          @mouseenter="($event.currentTarget as HTMLElement).style.borderColor = `rgba(${card.accentRgb}, 0.4)`"
          @mouseleave="($event.currentTarget as HTMLElement).style.borderColor = `rgba(${card.accentRgb}, 0.15)`"
        >
          <!-- Hover glow -->
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            :style="{
              background: `radial-gradient(ellipse at 50% 0%, rgba(${card.accentRgb}, 0.08) 0%, transparent 60%)`,
            }"
          />

          <div class="relative z-10 p-6 h-full flex flex-col" :class="card.key === 'localFirst' ? 'md:p-8' : ''">
            <!-- Card Label -->
            <div class="flex items-center gap-2 mb-4">
              <div
                class="w-1.5 h-1.5 rounded-full"
                :style="{ background: card.accent }"
              />
              <span
                class="text-[10px] font-medium tracking-[0.15em] uppercase"
                :style="{ color: card.accent }"
              >
                {{ t(`capabilities.${card.key}.label`) }}
              </span>
            </div>

            <!-- Icon + Title -->
            <div class="flex items-start gap-3 mb-3">
              <component
                :is="card.icon"
                :size="card.key === 'localFirst' ? 28 : 20"
                :style="{ color: card.accent }"
                class="shrink-0 mt-0.5"
              />
              <h3
                class="font-semibold leading-snug"
                :class="card.key === 'localFirst' ? 'text-2xl md:text-3xl' : 'text-base'"
                style="font-family: 'Space Grotesk', sans-serif; color: #F5F1E8"
              >
                {{ t(`capabilities.${card.key}.title`) }}
              </h3>
            </div>

            <!-- Description -->
            <p
              class="text-sm leading-relaxed mb-5"
              :class="card.key === 'localFirst' ? 'text-base' : ''"
              style="color: #9B9488"
            >
              {{ t(`capabilities.${card.key}.desc`) }}
            </p>

            <!-- Visual Micro-Illustration -->
            <div class="mt-auto">
              <!-- Local First: Shield + 20MB Badge -->
              <div v-if="card.key === 'localFirst'" class="space-y-4">
                <div class="flex items-end gap-3">
                  <div
                    class="text-5xl md:text-6xl font-bold leading-none"
                    style="font-family: 'Space Grotesk', sans-serif; color: #D8A84F"
                  >
                    20<span class="text-2xl md:text-3xl">MB</span>
                  </div>
                  <div class="pb-2">
                    <span class="text-xs px-2 py-0.5 rounded-full" style="background: rgba(216,168,79,0.12); color: #D8A84F">
                      {{ t('capabilities.localFirst.badge') }}
                    </span>
                  </div>
                </div>
                <!-- Size comparison bars -->
                <div class="space-y-2">
                  <div class="flex items-center gap-3">
                    <span class="text-[10px] w-20 text-right" style="color: #9B9488">Monolith</span>
                    <div class="flex-1 h-2 rounded-full overflow-hidden" style="background: rgba(216,168,79,0.1)">
                      <div class="h-full rounded-full" style="width: 8%; background: #D8A84F" />
                    </div>
                    <span class="text-[10px] font-mono" style="color: #D8A84F">20MB</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="text-[10px] w-20 text-right" style="color: #6B6560">Obsidian</span>
                    <div class="flex-1 h-2 rounded-full overflow-hidden" style="background: rgba(107,101,96,0.1)">
                      <div class="h-full rounded-full" style="width: 35%; background: #6B6560" />
                    </div>
                    <span class="text-[10px] font-mono" style="color: #6B6560">~80MB</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="text-[10px] w-20 text-right" style="color: #4A4540">Notion</span>
                    <div class="flex-1 h-2 rounded-full overflow-hidden" style="background: rgba(74,69,64,0.1)">
                      <div class="h-full rounded-full" style="width: 100%; background: #4A4540" />
                    </div>
                    <span class="text-[10px] font-mono" style="color: #4A4540">~250MB</span>
                  </div>
                </div>
              </div>

              <!-- AI Workspace: Chat simulation -->
              <div v-else-if="card.key === 'aiWorkspace'" class="space-y-2">
                <div class="flex items-start gap-2">
                  <div class="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[8px] font-bold" style="background: rgba(245,158,11,0.15); color: #F59E0B">@</div>
                  <div class="text-xs px-3 py-1.5 rounded-lg" style="background: rgba(245,158,11,0.06); color: #F5F1E8; border: 1px solid rgba(245,158,11,0.1)">
                    {{ t('capabilities.aiWorkspace.chat1') }}
                  </div>
                </div>
                <div class="flex items-start gap-2">
                  <div class="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[8px] font-bold" style="background: rgba(245,158,11,0.15); color: #F59E0B">/</div>
                  <div class="text-xs px-3 py-1.5 rounded-lg" style="background: rgba(245,158,11,0.06); color: #F5F1E8; border: 1px solid rgba(245,158,11,0.1)">
                    {{ t('capabilities.aiWorkspace.chat2') }}
                  </div>
                </div>
                <div class="flex items-start gap-2">
                  <div class="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[8px]" style="background: rgba(245,158,11,0.2); color: #F59E0B">AI</div>
                  <div class="text-xs px-3 py-1.5 rounded-lg" style="background: rgba(245,158,11,0.04); color: #9B9488; border: 1px solid rgba(245,158,11,0.08)">
                    {{ t('capabilities.aiWorkspace.chat3') }}
                    <span class="inline-block w-1 h-3 ml-0.5 align-middle" style="background: #F59E0B; animation: blink 1s step-end infinite" />
                  </div>
                </div>
              </div>

              <!-- Knowledge Graph: Animated nodes -->
              <div v-else-if="card.key === 'knowledgeGraph'" class="relative h-20">
                <svg class="w-full h-full" viewBox="0 0 200 80" fill="none">
                  <!-- Edges -->
                  <line x1="60" y1="20" x2="100" y2="40" stroke="rgba(16,185,129,0.3)" stroke-width="1" />
                  <line x1="100" y1="40" x2="140" y2="20" stroke="rgba(16,185,129,0.3)" stroke-width="1" />
                  <line x1="100" y1="40" x2="60" y2="65" stroke="rgba(16,185,129,0.3)" stroke-width="1" />
                  <line x1="100" y1="40" x2="150" y2="60" stroke="rgba(16,185,129,0.3)" stroke-width="1" />
                  <line x1="60" y1="20" x2="30" y2="40" stroke="rgba(16,185,129,0.2)" stroke-width="1" />
                  <line x1="140" y1="20" x2="170" y2="40" stroke="rgba(16,185,129,0.2)" stroke-width="1" />
                  <!-- Nodes -->
                  <circle cx="100" cy="40" r="6" fill="#10B981" opacity="0.9">
                    <animate attributeName="r" values="6;7;6" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="60" cy="20" r="4" fill="#10B981" opacity="0.6" />
                  <circle cx="140" cy="20" r="4" fill="#10B981" opacity="0.6" />
                  <circle cx="60" cy="65" r="3" fill="#10B981" opacity="0.4" />
                  <circle cx="150" cy="60" r="3" fill="#10B981" opacity="0.4" />
                  <circle cx="30" cy="40" r="2.5" fill="#10B981" opacity="0.3" />
                  <circle cx="170" cy="40" r="2.5" fill="#10B981" opacity="0.3" />
                </svg>
              </div>

              <!-- Bidirectional Links: Two-way connection -->
              <div v-else-if="card.key === 'bidirectionalLinks'" class="flex items-center justify-center gap-2 py-2">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center text-[10px] font-mono" style="background: rgba(6,182,212,0.08); border: 1px solid rgba(6,182,212,0.2); color: #06B6D4">
                  A
                </div>
                <div class="flex flex-col items-center gap-0.5">
                  <svg width="40" height="8" viewBox="0 0 40 8"><path d="M0 4 L32 4" stroke="#06B6D4" stroke-width="1.5" stroke-dasharray="3 2" /><path d="M28 0 L36 4 L28 8" fill="#06B6D4" opacity="0.7" /></svg>
                  <svg width="40" height="8" viewBox="0 0 40 8"><path d="M40 4 L8 4" stroke="#06B6D4" stroke-width="1.5" stroke-dasharray="3 2" /><path d="M12 0 L4 4 L12 8" fill="#06B6D4" opacity="0.7" /></svg>
                </div>
                <div class="w-10 h-10 rounded-lg flex items-center justify-center text-[10px] font-mono" style="background: rgba(6,182,212,0.08); border: 1px solid rgba(6,182,212,0.2); color: #06B6D4">
                  B
                </div>
              </div>

              <!-- Semantic Search: Vector dots -->
              <div v-else-if="card.key === 'semanticSearch'" class="relative h-16">
                <svg class="w-full h-full" viewBox="0 0 200 64" fill="none">
                  <!-- Search circle -->
                  <circle cx="100" cy="32" r="20" stroke="rgba(216,168,79,0.3)" stroke-width="1" stroke-dasharray="4 3" />
                  <!-- Vector dots cluster -->
                  <circle cx="92" cy="28" r="3" fill="#D8A84F" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="105" cy="25" r="2.5" fill="#D8A84F" opacity="0.6" />
                  <circle cx="98" cy="38" r="2" fill="#D8A84F" opacity="0.5" />
                  <circle cx="110" cy="35" r="2.5" fill="#D8A84F" opacity="0.7" />
                  <circle cx="88" cy="36" r="1.5" fill="#D8A84F" opacity="0.4" />
                  <!-- Far dots -->
                  <circle cx="55" cy="20" r="1.5" fill="#9B9488" opacity="0.3" />
                  <circle cx="150" cy="45" r="1.5" fill="#9B9488" opacity="0.3" />
                  <circle cx="160" cy="15" r="1" fill="#9B9488" opacity="0.2" />
                  <!-- Search icon -->
                  <line x1="116" y1="44" x2="128" y2="56" stroke="#D8A84F" stroke-width="2" stroke-linecap="round" opacity="0.6" />
                </svg>
              </div>

              <!-- Plugin Ecosystem: Plugin grid -->
              <div v-else-if="card.key === 'pluginEcosystem'" class="grid grid-cols-3 gap-1.5">
                <div v-for="i in 6" :key="i" class="h-8 rounded flex items-center justify-center text-[8px] font-mono" :style="{ background: i <= 4 ? 'rgba(244,63,94,0.08)' : 'rgba(244,63,94,0.03)', border: `1px solid ${i <= 4 ? 'rgba(244,63,94,0.15)' : 'rgba(244,63,94,0.06)'}`, color: i <= 4 ? '#F43F5E' : '#4A4540' }">
                  {{ i <= 4 ? 'ON' : '--' }}
                </div>
              </div>

              <!-- Code Graph: Code structure -->
              <div v-else-if="card.key === 'codeGraph'" class="font-mono text-[10px] leading-relaxed space-y-0.5" style="color: #14B8A6">
                <div><span style="color: #6B6560">fn </span><span style="color: #14B8A6">main</span><span style="color: #6B6560">() {</span></div>
                <div class="pl-3"><span style="color: #6B6560">let </span>graph <span style="color: #6B6560">=</span> <span style="color: #14B8A6">parse</span><span style="color: #6B6560">(</span>src<span style="color: #6B6560">);</span></div>
                <div class="pl-3"><span style="color: #14B8A6">analyze</span><span style="color: #6B6560">(</span>&graph<span style="color: #6B6560">);</span></div>
                <div><span style="color: #6B6560">}</span></div>
              </div>

              <!-- Git Sync: Branch diagram -->
              <div v-else-if="card.key === 'gitSync'" class="relative h-14">
                <svg class="w-full h-full" viewBox="0 0 200 56" fill="none">
                  <!-- Main branch -->
                  <line x1="20" y1="28" x2="180" y2="28" stroke="rgba(249,115,22,0.3)" stroke-width="2" />
                  <!-- Feature branch -->
                  <path d="M60 28 Q70 8 100 8 Q130 8 140 28" stroke="rgba(249,115,22,0.5)" stroke-width="1.5" fill="none" />
                  <!-- Commits on main -->
                  <circle cx="40" cy="28" r="4" fill="#F97316" opacity="0.6" />
                  <circle cx="80" cy="28" r="4" fill="#F97316" opacity="0.7" />
                  <circle cx="120" cy="28" r="4" fill="#F97316" opacity="0.8" />
                  <circle cx="160" cy="28" r="5" fill="#F97316" opacity="0.9">
                    <animate attributeName="r" values="5;6;5" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <!-- Commits on feature -->
                  <circle cx="80" cy="8" r="3" fill="#F97316" opacity="0.5" />
                  <circle cx="100" cy="8" r="3" fill="#F97316" opacity="0.5" />
                  <!-- Merge point indicator -->
                  <circle cx="140" cy="28" r="2" fill="#F97316" opacity="0.4" />
                </svg>
              </div>

              <!-- Runtime Blocks: Terminal -->
              <div v-else-if="card.key === 'runtimeBlocks'" class="font-mono text-[10px] space-y-1" style="color: #84CC16">
                <div class="flex items-center gap-1">
                  <span style="color: #6B6560">&gt;</span>
                  <span style="color: #84CC16">SELECT</span>
                  <span style="color: #9B9488">* FROM notes</span>
                </div>
                <div class="flex items-center gap-1">
                  <span style="color: #6B6560">&gt;</span>
                  <span style="color: #84CC16">RUN</span>
                  <span style="color: #9B9488">script.py</span>
                </div>
                <div class="flex items-center gap-1">
                  <span style="color: #6B6560">&gt;</span>
                  <span style="color: #84CC16">FETCH</span>
                  <span style="color: #9B9488">/api/data</span>
                  <span class="inline-block w-1.5 h-3 ml-0.5" style="background: #84CC16; animation: blink 1s step-end infinite" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
