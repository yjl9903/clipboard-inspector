<script setup lang="ts">
const props = defineProps<{ content: string }>();
</script>

<template>
  <div class="rounded-md shadow-box p-2 max-h-[300px] max-w-[800px] overflow-auto">
    {{ content }}
  </div>
</template>
