<script setup lang="ts">
import now from '~build/time';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <main class="main pt-4vh lt-lg:pt-4vh pb-8vh flex-grow-1">
      <a href="/" class="block select-none cursor-pointer">
        <!-- prettier-ignore -->
        <h1 class="text-gradient inline-block font-quicksand text-3xl font-700 hover:underline underline-dotted">Clipboard Inspector</h1>
      </a>
      <Inspector class="mt-4vh"></Inspector>
    </main>
    <footer class="main pb-4vh select-none">
      <div font-sm text-base-400>
        <span class="mr1 text-sm i-carbon-update-now op-80"></span>
        <span>Built at {{ now.toLocaleString('zh-CN', { timeZone: 'Asia/ShangHai' }) }}</span>
      </div>
      <div font-sm text-base-400>
        <span class="mr1 text-sm i-devicon-github op-80"></span>
        <a
          href="https://github.com/yjl9903/clipboard-inspector"
          target="_blank"
          class="text-link-active"
          >yjl9903/clipboard-inspector</a
        >
      </div>
      <div font-sm text-base-400>
        <span class="mr1 text-sm i-devicon-cloudflare op-80"></span>
        <span
          >Hosted on&nbsp;<a class="text-link-active" href="https://cloudflare.com" target="_blank"
            >Cloudflare</a
          ></span
        >
      </div>
    </footer>
  </div>
</template>

<style scoped>
.main {
  /* prettier-ignore */
  --at-apply: mx-auto mx-w-[68vw] lg:w-4xl md:w-[46rem] lt-md:mx-w-[90vw] lt-md:w-[90vw];
}

.text-gradient {
  background-image: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400%;
  background-position: 0%;
}

.text-link {
  /* prettier-ignore */
  --at-apply: text-sky-700 hover:text-sky-500;
}

.text-link-active {
  /* prettier-ignore */
  --at-apply: hover:text-sky-600;
}
</style>
