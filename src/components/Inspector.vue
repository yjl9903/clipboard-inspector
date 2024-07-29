<script setup lang="ts">
import { type ClipboardResult, readFromClipboardEvent, readFromClipboardItems } from '../clipboard';

const result = ref<ClipboardResult | undefined>(undefined);

const onUseAPI = async () => {
  const clipboard = await navigator.clipboard.read();
  result.value = await readFromClipboardItems(clipboard);
};

const onPaste = async (ev: ClipboardEvent) => {
  result.value = readFromClipboardEvent(ev);
};

const onReset = () => {
  result.value = undefined;
};

onMounted(() => {
  document.addEventListener('paste', onPaste);

  return () => {
    document.removeEventListener('paste', onPaste);
  };
});
</script>

<template>
  <div class="w-full font-sans">
    <div class="border shadow-box rounded-md p-4 mb-16">
      <div v-if="!result" class="font-bold text-xl mb-4 select-none">Get Started</div>
      <div v-else class="mb-4">
        <span class="font-bold text-xl select-none">Your clipboard</span>
        <span
          class="ml-4 inline-block bg-amber-200 hover:bg-op-50 px-2 py-[2px] rounded-md select-none cursor-pointer outline-none"
          @click="onReset"
          >Reset</span
        >
      </div>

      <ul v-if="!result" class="list-disc pl-4 space-y-2">
        <li>
          Press
          <span
            class="inline-block bg-sky-200 hover:bg-op-80 px-2 py-1 rounded-md select-none cursor-pointer outline-none"
            @click="onUseAPI"
            >Paste using the Clipboard API</span
          >
          if your browser supports the Asynchronous Clipboard API
        </li>
        <li>
          Paste with the
          <span class="font-mono underline underline-dotted underline-offset-4">Ctrl / ⌘ + V</span>
          keyboard shortcut
        </li>
        <li>
          Paste here
          <div
            contenteditable="true"
            @paste.prevent.stop="onPaste"
            class="p-2 overflow-auto max-w-[300px] border-1 border-solid border-base outline-main-300 rounded-md"
          ></div>
        </li>
      </ul>
      <div v-else class="p-4 border rounded-md max-h-[40vh] overflow-auto">
        <div v-html="result.html"></div>
      </div>
    </div>

    <Viewer v-if="result" :clipboard="result"></Viewer>
  </div>
</template>

<style scoped>
.type {
  display: inline-block;
  margin-right: 4px;
  background-color: gainsboro;
  border-radius: 4px;
  padding: 1px 8px;
}

.editor {
  height: 60vh;
  text-align: left;
  border: 1px solid black;
  padding: 8px;
}
</style>
