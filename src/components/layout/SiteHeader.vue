<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Menu, X, Globe } from 'lucide-vue-next'
import GoldButton from '@/components/common/GoldButton.vue'
import { SITE } from '@/config/site'

const { t, locale } = useI18n()
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navLinks = [
  { key: 'features', to: '/#features' },
  { key: 'download', to: '/download' },
  { key: 'contact', to: '/contact' },
]

function toggleLocale() {
  const next = locale.value === 'zh-CN' ? 'en' : 'zh-CN'
  locale.value = next
  localStorage.setItem('monolith-locale', next)
}

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      scrolled ? 'py-2' : 'py-4',
      scrolled ? 'bg-[rgba(5,5,5,0.9)]' : 'bg-[rgba(5,5,5,0.6)]',
    ]"
    style="backdrop-filter: blur(16px); border-bottom: 1px solid rgba(216,168,79,0.12)"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2 group">
        <img src="/icon.png" alt="Monolith" class="w-7 h-7 transition-transform duration-300 group-hover:rotate-12" />
        <span
          class="text-xl font-bold"
          style="font-family: 'Space Grotesk', sans-serif; background: linear-gradient(135deg, #D8A84F, #FFD985); -webkit-background-clip: text; -webkit-text-fill-color: transparent"
        >
          {{ SITE.name }}
        </span>
      </router-link>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <router-link
          v-for="link in navLinks"
          :key="link.key"
          :to="link.to"
          class="text-sm transition-colors duration-200 hover:text-[#D8A84F]"
          style="color: #9B9488"
        >
          {{ t(`nav.${link.key}`) }}
        </router-link>
        <a
          :href="SITE.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm transition-colors duration-200 hover:text-[#D8A84F]"
          style="color: #9B9488"
        >
          {{ t('nav.github') }}
        </a>
      </nav>

      <!-- Desktop Right -->
      <div class="hidden md:flex items-center gap-4">
        <button
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs transition-colors duration-200 hover:text-[#D8A84F]"
          style="color: #9B9488; border: 1px solid rgba(216,168,79,0.2)"
          @click="toggleLocale"
        >
          <Globe :size="14" />
          {{ locale === 'zh-CN' ? 'EN' : '中文' }}
        </button>
        <GoldButton variant="primary" to="/download" class="!px-4 !py-1.5 !text-xs">
          {{ t('nav.download') }}
        </GoldButton>
      </div>

      <!-- Mobile Hamburger -->
      <button
        class="md:hidden p-2 transition-colors duration-200"
        style="color: #9B9488"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <Menu v-if="!mobileMenuOpen" :size="24" />
        <X v-else :size="24" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden px-6 pb-6 pt-4"
        style="background: rgba(5,5,5,0.95); border-top: 1px solid rgba(216,168,79,0.12)"
      >
        <nav class="flex flex-col gap-4">
          <router-link
            v-for="link in navLinks"
            :key="link.key"
            :to="link.to"
            class="text-sm py-2 transition-colors duration-200 hover:text-[#D8A84F]"
            style="color: #9B9488"
            @click="closeMobileMenu"
          >
            {{ t(`nav.${link.key}`) }}
          </router-link>
          <a
            :href="SITE.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm py-2 transition-colors duration-200 hover:text-[#D8A84F]"
            style="color: #9B9488"
          >
            {{ t('nav.github') }}
          </a>
          <div class="flex items-center gap-4 pt-2" style="border-top: 1px solid rgba(216,168,79,0.12)">
            <button
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs transition-colors duration-200 hover:text-[#D8A84F]"
              style="color: #9B9488; border: 1px solid rgba(216,168,79,0.2)"
              @click="toggleLocale"
            >
              <Globe :size="14" />
              {{ locale === 'zh-CN' ? 'EN' : '中文' }}
            </button>
            <GoldButton variant="primary" to="/download" class="!px-4 !py-1.5 !text-xs" @click="closeMobileMenu">
              {{ t('nav.download') }}
            </GoldButton>
          </div>
        </nav>
      </div>
    </transition>
  </header>
</template>
