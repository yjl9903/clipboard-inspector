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
        <a
          href="https://github.com/yjl9903/clipboard-inspector"
          target="_blank"
          class="text-link-active"
          >XLor</a
        >
        <span> © 2023</span>
      </div>
      <div font-sm text-base-400>
        Rendered at {{ now.toLocaleString('zh-CN', { timeZone: 'Asia/ShangHai' }) }}
      </div>
      <div font-sm text-base-400>Powered by Vue</div>
      <div font-sm text-base-400>Hosted on Cloudflare Pages</div>
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
