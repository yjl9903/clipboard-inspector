<script setup lang="ts">
import prettify from 'html-format';

import { VAceEditor } from 'vue3-ace-editor';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-chrome';

const props = defineProps<{ type: string; content: string }>();
const { type, content } = toRefs(props);

const buffer = ref('');
const lang = ref('plain');
watch(
  [type, content],
  ([type, content]) => {
    if (type === 'text/html') {
      lang.value = 'html';
      buffer.value = prettify(content, undefined, 100);
    } else {
      try {
        buffer.value = JSON.stringify(JSON.parse(content), null, 2);
        lang.value = 'json';
      } catch (error) {
        buffer.value = content;
        lang.value = 'plain';
      }
    }
  },
  { immediate: true }
);
</script>

<template>
  <v-ace-editor
    v-model:value="buffer"
    :lang="lang"
    theme="chrome"
    class="h-[300px] border-1 border-base"
  />
</template>
