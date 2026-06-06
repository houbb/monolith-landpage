<script setup lang="ts">
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import FeatureGrid from '@/components/home/FeatureGrid.vue'
import ProductShowcase from '@/components/home/ProductShowcase.vue'
import DownloadCta from '@/components/home/DownloadCta.vue'
import CommunityCta from '@/components/home/CommunityCta.vue'
</script>

<template>
  <div class="min-h-screen bg-[#050505]">
    <SiteHeader />
    <main>
      <HeroSection />
      <FeatureGrid />
      <ProductShowcase />
      <DownloadCta />
      <CommunityCta />
    </main>
    <SiteFooter />
  </div>
</template>
