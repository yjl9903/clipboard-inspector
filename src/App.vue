<script setup lang="ts"></script>

<template>
  <div>
    <main class="main pt-4vh lt-lg:pt-4vh pb-8vh">
      <a href="/" class="block select-none cursor-pointer pb-4vh">
        <!-- prettier-ignore -->
        <h1 class="inline-block font-quicksand text-3xl font-700 hover:underline underline-dotted">Clipboard Inspector</h1>
      </a>
      <Inspector></Inspector>
    </main>
    <footer class="main pb-8vh select-none">
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
        Rendered at {now.toLocaleString('zh-CN', { timeZone: 'Asia/ShangHai' })}
      </div>
      <div font-sm text-base-400>Powered by Astro</div>
      <div font-sm text-base-400>Hosted on Cloudflare Pages</div>
    </footer>
  </div>
</template>

<style scoped>
:root {
  /* --accent: 124, 58, 237; */
  --accent: 0, 204, 170;
  --accent-gradient: linear-gradient(45deg, rgb(var(--accent)), /* #da62c4 30%, */ #08c, white 60%);

  --color-bg-primary: #fcfcfc;
  --color-bg-secondary: #fafafa;
}

html {
  background-color: var(--color-bg-primary);

  --at-apply: font-sans;
}

code {
  --at-apply: font-mono;
}

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
