<script setup lang="ts">
import { type ClipboardResult } from '../clipboard';

import Ace from './render/Ace.vue';
import Plain from './render/PlainText.vue';

const props = defineProps<{ clipboard: ClipboardResult }>();

const isUseAce = (type: string) => {
  if (type === 'text/html') return true;
  if (type.startsWith('application/')) return true;
  if (type.startsWith('docx/')) return true;
  if (['vscode-editor-data'].includes(type)) return true;
  return false;
};

const base64 = (file: File) => {
  const url = URL.createObjectURL(file);
  return url;
};

// const onPaste = (ev: ClipboardEvent) => {
//   console.log(ev.clipboardData, ev.clipboardData?.files, ev.clipboardData?.types);
//   if (ev.clipboardData?.types) {
//     types.value = ev.clipboardData?.types;
//   } else {
//     types.value = [];
//   }
//   texts.value = [];

//   for (const type of types.value) {
//     if (type.startsWith('text/') || type.startsWith('application/') || type.startsWith('docx/')) {
//       let value = ev.clipboardData?.getData(type) ?? '';
//       if (type === 'text/html') {
//         value = prettify(value);
//       }
//       texts.value.push({ key: type, value });
//     }
//   }

//   console.log('Files', ev.clipboardData?.getData('Files'));
//   files.value = [...(ev.clipboardData?.files ?? [])];

//   const { dom, imgs } = parseHTML(ev.clipboardData?.getData('text/html') ?? '');
//   console.log(dom, imgs);
// };

// function parseHTML(text: string) {
//   const parser = new DOMParser();
//   const dom = parser.parseFromString(text, 'text/html');
//   const imgs = Array.from(dom.querySelectorAll('img'));
//   return { dom, imgs };
// }
</script>

<template>
  <div class="space-y-4">
    <div class="space-x-2 leading-loose">
      <span class="font-bold text-xl inline-block mr-3">Types</span>
      <a
        v-for="{ type } in clipboard.items"
        class="inline-block select-none cursor-pointer text-lg px-2 text-base-700 bg-neutral-200 hover:bg-neutral-300 rounded-lg"
        :href="`#${type}`"
        >{{ type }}</a
      >
      <a
        v-for="file in clipboard.files"
        class="inline-block select-none cursor-pointer text-lg px-2 text-base-700 bg-neutral-200 hover:bg-neutral-300 rounded-lg"
        :href="`#${file.name}`"
        >{{ file.name }}</a
      >
    </div>

    <table class="types w-full">
      <thead>
        <tr class="border-b-3 border-neutral-300 select-none">
          <th class="text-left border-r-1 text-lg">Type</th>
          <th class="text-left text-lg w-full">Content</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="({ type, content }, index) in clipboard.items"
          :id="type"
          :class="[index > 0 && 'border-t-1']"
        >
          <td class="border-r-1">
            <span class="inline-block px-2 text-base-700 bg-neutral-200 rounded-lg">{{
              type
            }}</span>
          </td>
          <td class="w-full">
            <div v-if="type === 'text/plain'"><Plain :content></Plain></div>
            <div v-else-if="isUseAce(type)"><Ace :type :content></Ace></div>
            <div v-else><Plain :content="content"></Plain></div>
          </td>
        </tr>

        <tr v-for="(file, index) in clipboard.files" :id="file.name" :class="['border-t-1']">
          <td class="border-r-1">
            <span class="inline-block px-2 text-base-700 bg-neutral-200 rounded-lg">{{
              file.name
            }}</span>
          </td>
          <td class="w-full">
            <img :src="base64(file)" :alt="file.name" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.types th,
.types td {
  --at-apply: text-left px-3 py-3;
}
</style>
