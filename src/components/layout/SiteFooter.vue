<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { SITE } from '@/config/site'

const { t } = useI18n()

const productLinks = [
  { key: 'download', to: '/download' },
  { key: 'github', href: SITE.githubUrl },
  { key: 'releases', href: SITE.releaseUrl },
  { key: 'issues', href: 'https://github.com/houbb/monolith/issues' },
]

const communityLinks = [
  { key: 'contact', to: '/contact' },
  { key: 'discussions', href: 'https://github.com/houbb/monolith/discussions' },
]

const legalLinks = [
  { key: 'privacy', to: '#' },
  { key: 'eula', to: '#' },
]
</script>

<template>
  <footer
    class="relative"
    style="background: #0A0A0A; border-top: 1px solid rgba(216,168,79,0.12)"
  >
    <div class="max-w-7xl mx-auto px-6 py-16">
      <!-- Top: Logo + Tagline -->
      <div class="text-center mb-12">
        <div class="flex items-center justify-center gap-2 mb-3">
          <img src="/icon.png" alt="Monolith" class="w-6 h-6" />
          <span
            class="text-lg font-bold"
            style="font-family: 'Space Grotesk', sans-serif; background: linear-gradient(135deg, #D8A84F, #FFD985); -webkit-background-clip: text; -webkit-text-fill-color: transparent"
          >
            {{ SITE.name }}
          </span>
        </div>
        <p class="text-sm" style="color: #9B9488">{{ t('footer.tagline') }}</p>
      </div>

      <!-- Middle: Link Columns -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
        <!-- Product -->
        <div>
          <h3 class="text-sm font-semibold mb-4" style="color: #D8A84F">{{ t('footer.product') }}</h3>
          <ul class="space-y-2">
            <li v-for="link in productLinks" :key="link.key">
              <router-link
                v-if="link.to"
                :to="link.to"
                class="text-sm transition-colors duration-200 hover:text-[#D8A84F]"
                style="color: #9B9488"
              >
                {{ t(`footer.${link.key}`) }}
              </router-link>
              <a
                v-else
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm transition-colors duration-200 hover:text-[#D8A84F]"
                style="color: #9B9488"
              >
                {{ t(`footer.${link.key}`) }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Community -->
        <div>
          <h3 class="text-sm font-semibold mb-4" style="color: #D8A84F">{{ t('footer.community') }}</h3>
          <ul class="space-y-2">
            <li v-for="link in communityLinks" :key="link.key">
              <router-link
                v-if="link.to"
                :to="link.to"
                class="text-sm transition-colors duration-200 hover:text-[#D8A84F]"
                style="color: #9B9488"
              >
                {{ t(`footer.${link.key}`) }}
              </router-link>
              <a
                v-else
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm transition-colors duration-200 hover:text-[#D8A84F]"
                style="color: #9B9488"
              >
                {{ t(`footer.${link.key}`) }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h3 class="text-sm font-semibold mb-4" style="color: #D8A84F">{{ t('footer.legal') }}</h3>
          <ul class="space-y-2">
            <li v-for="link in legalLinks" :key="link.key">
              <router-link
                :to="link.to"
                class="text-sm transition-colors duration-200 hover:text-[#D8A84F]"
                style="color: #9B9488"
              >
                {{ t(`footer.${link.key}`) }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom: Copyright -->
      <div
        class="text-center pt-8"
        style="border-top: 1px solid rgba(216,168,79,0.12)"
      >
        <p class="text-xs" style="color: #9B9488">
          &copy; 2026 {{ SITE.name }}. {{ t('footer.copyright') }}
        </p>
      </div>
    </div>
  </footer>
</template>
