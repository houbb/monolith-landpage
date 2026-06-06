<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import GoldButton from '@/components/common/GoldButton.vue'
import { SITE } from '@/config/site'

const { t } = useI18n()
</script>

<template>
  <section class="hero">
    <!-- Background layers -->
    <div class="hero-bg-grid" />
    <div class="hero-bg-orbs">
      <div class="orb orb-a" />
      <div class="orb orb-b" />
      <div class="orb orb-c" />
    </div>

    <!-- Large decorative M watermark -->
    <div class="hero-watermark">M</div>

    <!-- Diagonal accent line -->
    <div class="hero-diagonal" />

    <!-- Main content -->
    <div class="hero-body">
      <!-- Left column: typography stack -->
      <div class="hero-type">

        <!-- Eyebrow -->
        <p class="hero-eyebrow reveal-1">
          <span class="eyebrow-dot" />
          {{ t('hero.label') }}
        </p>

        <!-- Monolith: split word treatment -->
        <h1 class="hero-brand reveal-2">
          <span class="brand-m">M</span><span class="brand-rest">onolith</span>
        </h1>

        <!-- Slogan: dramatic two-line -->
        <div class="hero-slogan reveal-3">
          <span class="slogan-a">{{ t('hero.sloganLine1') }}</span>
          <span class="slogan-b">{{ t('hero.sloganLine2') }}</span>
        </div>

        <!-- Description -->
        <p class="hero-desc reveal-4">{{ t('hero.subtitle') }}</p>

        <!-- CTAs -->
        <div class="hero-actions reveal-5">
          <GoldButton variant="primary" to="/download" class="cta-btn cta-main">{{ t('hero.btnDownload') }}</GoldButton>
          <GoldButton variant="secondary" :href="SITE.githubUrl" class="cta-btn cta-sub">{{ t('hero.btnGithub') }}</GoldButton>
        </div>

      </div>

      <!-- Right column: stats + visual anchor -->
      <div class="hero-side reveal-6">
        <div class="side-card">
          <div class="card-glow" />
          <div class="card-inner">
            <div class="stat-row">
              <div class="stat">
                <span class="stat-num stat-highlight">20<span class="stat-unit">MB</span></span>
                <span class="stat-name">{{ t('hero.statSize') }}</span>
              </div>
              <div class="stat-divider" />
              <div class="stat">
                <span class="stat-num">30<span class="stat-unit">+</span></span>
                <span class="stat-name">{{ t('hero.statThemes') }}</span>
              </div>
            </div>
            <div class="stat-divider-h" />
            <div class="stat-row">
              <div class="stat">
                <span class="stat-num">100<span class="stat-unit">%</span></span>
                <span class="stat-name">{{ t('hero.statLocal') }}</span>
              </div>
              <div class="stat-divider" />
              <div class="stat">
                <span class="stat-num stat-open">Free</span>
                <span class="stat-name">{{ t('hero.statOpen') }}</span>
              </div>
            </div>
          </div>
          <!-- Decorative corner marks -->
          <svg class="card-corners" viewBox="0 0 80 80" fill="none">
            <path d="M0 20 L0 0 L20 0" stroke="rgba(216,168,79,0.3)" stroke-width="1"/>
            <path d="M60 0 L80 0 L80 20" stroke="rgba(216,168,79,0.3)" stroke-width="1"/>
            <path d="M0 60 L0 80 L20 80" stroke="rgba(216,168,79,0.3)" stroke-width="1"/>
            <path d="M60 80 L80 80 L80 60" stroke="rgba(216,168,79,0.3)" stroke-width="1"/>
          </svg>
        </div>

        <!-- Floating tag pills -->
        <div class="side-tags">
          <span v-for="tag in ['Notes', 'Graph', 'AI', 'Plugins']" :key="tag" class="side-tag">{{ tag }}</span>
        </div>
      </div>
    </div>

    <!-- Bottom scroll hint -->
    <div class="hero-scroll reveal-7">
      <div class="scroll-line" />
      <span class="scroll-text">scroll</span>
    </div>

    <!-- Bottom fade -->
    <div class="hero-fade" />
  </section>
</template>

<style scoped>
/* ====== ROOT ====== */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #050505;
}

/* ====== BACKGROUND ====== */
.hero-bg-grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.03;
  background-image:
    linear-gradient(rgba(216,168,79,0.4) 1px, transparent 1px),
    linear-gradient(90deg, rgba(216,168,79,0.4) 1px, transparent 1px);
  background-size: 64px 64px;
}
.hero-bg-orbs {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.orb {
  position: absolute;
  border-radius: 50%;
}
.orb-a {
  top: -15%;
  right: -5%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(216,168,79,0.10) 0%, rgba(216,168,79,0.03) 40%, transparent 70%);
}
.orb-b {
  bottom: -25%;
  left: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 60%);
}
.orb-c {
  top: 40%;
  right: 30%;
  width: 400px;
  height: 400px;
  opacity: 0.04;
  background: radial-gradient(circle, rgba(16,185,129,1) 0%, transparent 70%);
}

/* Watermark M */
.hero-watermark {
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(300px, 45vw, 700px);
  font-weight: 900;
  line-height: 0.85;
  letter-spacing: -0.06em;
  color: rgba(216,168,79,0.025);
  pointer-events: none;
  user-select: none;
  z-index: 0;
}

/* Diagonal line */
.hero-diagonal {
  position: absolute;
  top: 12%;
  right: 8%;
  width: 1px;
  height: 35vh;
  background: linear-gradient(to bottom, rgba(216,168,79,0.25), rgba(216,168,79,0), rgba(99,102,241,0.08));
  transform: rotate(18deg);
  transform-origin: top center;
}

/* ====== BODY LAYOUT ====== */
.hero-body {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  width: 100%;
  max-width: 88rem;
  margin: 0 auto;
  padding: 7rem 1.5rem 6rem;
}
@media (min-width: 1024px) {
  .hero-body {
    grid-template-columns: 1fr 380px;
    gap: 4rem;
    padding: 7rem 2.5rem 6rem;
    align-items: center;
  }
}

/* ====== LEFT: TYPOGRAPHY ====== */
.hero-type {
  max-width: 56rem;
}

/* Eyebrow */
.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  margin-bottom: 2rem;
  border: 1px solid rgba(216,168,79,0.18);
  background: rgba(216,168,79,0.04);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #D8A84F;
}
.eyebrow-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #D8A84F;
  animation: dot-pulse 2s ease-in-out infinite;
}
@keyframes dot-pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(216,168,79,0.4); }
  50% { opacity: 0.6; box-shadow: 0 0 0 4px rgba(216,168,79,0); }
}

/* Brand name - THE HERO ELEMENT */
.hero-brand {
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(4rem, 11vw, 9rem);
  font-weight: 800;
  line-height: 0.88;
  letter-spacing: -0.035em;
  margin-bottom: 0.3em;
  color: #F5F1E8;
}
.brand-m {
  display: inline-block;
  background: linear-gradient(135deg, #D8A84F 0%, #FFD985 50%, #D8A84F 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 6s ease-in-out infinite;
  margin-right: -0.02em;
}
.brand-rest {
  color: #F5F1E8;
  font-weight: 600;
}
@keyframes shimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Slogan - editorial split */
.hero-slogan {
  display: flex;
  flex-direction: column;
  gap: 0.15em;
  margin-bottom: 1.75rem;
  padding-left: 0.15em;
  border-left: 2px solid rgba(216,168,79,0.35);
}
.slogan-a {
  display: block;
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(1.35rem, 3vw, 2.25rem);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: #F5F1E8;
}
.slogan-b {
  display: block;
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(1.1rem, 2.2vw, 1.65rem);
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 0.01em;
  color: #9B9488;
  font-style: italic;
}

/* Description */
.hero-desc {
  max-width: 38rem;
  font-size: 0.95rem;
  line-height: 1.7;
  color: #7A756D;
  margin-bottom: 2.5rem;
}
@media (min-width: 768px) {
  .hero-desc { font-size: 1.05rem; }
}

/* CTA buttons */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.875rem;
}
.cta-btn {
  border-radius: 0.875rem !important;
  font-size: 0.95rem !important;
  padding-left: 1.75rem !important;
  padding-right: 1.75rem !important;
  padding-top: 0.8rem !important;
  padding-bottom: 0.8rem !important;
}
.cta-main {
  font-weight: 700 !important;
  letter-spacing: 0.01em !important;
}

/* ====== RIGHT: STATS CARD ====== */
.hero-side {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
@media (min-width: 1024px) {
  .hero-side {
    justify-content: center;
  }
}

.side-card {
  position: relative;
  border-radius: 1.25rem;
  overflow: visible;
}
.card-glow {
  position: absolute;
  inset: -1px;
  border-radius: 1.25rem;
  background: linear-gradient(135deg, rgba(216,168,79,0.15), rgba(99,102,241,0.06), rgba(16,185,129,0.08));
  filter: blur(24px);
  opacity: 0.5;
}
.card-inner {
  position: relative;
  background: rgba(13,13,13,0.85);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(216,168,79,0.14);
  border-radius: 1.25rem;
  padding: 1.5rem 1.75rem;
}
.card-corners {
  position: absolute;
  inset: -1px;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: 1.25rem;
}

.stat-row {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
}
.stat {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  flex: 1;
}
.stat-num {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #F5F1E8;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}
.stat-unit {
  font-size: 0.85em;
  font-weight: 600;
  color: #9B9488;
}
.stat-highlight {
  color: #D8A84F !important;
}
.stat-open {
  font-size: 1.5rem !important;
  color: #10B981 !important;
}
.stat-name {
  font-size: 0.68rem;
  color: #6B6560;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-weight: 500;
}
.stat-divider {
  width: 1px;
  height: 2rem;
  background: rgba(255,255,255,0.07);
  flex-shrink: 0;
}
.stat-divider-h {
  height: 1px;
  background: rgba(255,255,255,0.06);
  margin: 1.25rem 0;
}

/* Side tags */
.side-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}
.side-tag {
  padding: 0.4rem 0.85rem;
  border-radius: 9999px;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  border: 1px solid rgba(216,168,79,0.15);
  background: rgba(216,168,79,0.04);
  color: #B8A06A;
  transition: all 0.3s ease;
}
.side-tag:hover {
  border-color: rgba(216,168,79,0.35);
  background: rgba(216,168,79,0.08);
  color: #D8A84F;
}

/* ====== SCROLL HINT ====== */
.hero-scroll {
  position: absolute;
  bottom: 2.5rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}
.scroll-line {
  width: 1px;
  height: 36px;
  background: linear-gradient(to bottom, rgba(216,168,79,0.5), rgba(216,168,79,0));
  animation: scroll-drip 2s ease-in-out infinite;
}
@keyframes scroll-drip {
  0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
  30% { transform: scaleY(1); opacity: 1; }
  70% { transform: scaleY(1); opacity: 1; transform-origin: bottom; }
  100% { transform: scaleY(0); opacity: 0; }
}
.scroll-text {
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #4A4540;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

/* Bottom fade */
.hero-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 8rem;
  pointer-events: none;
  background: linear-gradient(to bottom, transparent, #050505);
}

/* ====== REVEAL ANIMATIONS ====== */
.reveal-1,
.reveal-2,
.reveal-3,
.reveal-4,
.reveal-5,
.reveal-6,
.reveal-7 {
  opacity: 0;
  transform: translateY(24px);
  animation: reveal-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.reveal-1 { animation-delay: 0.05s; }
.reveal-2 { animation-delay: 0.15s; }
.reveal-3 { animation-delay: 0.28s; }
.reveal-4 { animation-delay: 0.4s; }
.reveal-5 { animation-delay: 0.52s; }
.reveal-6 { animation-delay: 0.65s; }
.reveal-7 { animation-delay: 1s; }

@keyframes reveal-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
