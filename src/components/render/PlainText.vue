<script setup lang="ts">
const props = defineProps<{ content: string }>();
</script>

<template>
  <div class="rounded-md shadow-box p-2 max-h-[600px] max-w-[800px] overflow-auto">
    <pre><code>{{ content }}</code></pre>
  </div>
</template>
