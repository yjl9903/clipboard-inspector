<script setup lang="ts">
import { type ClipboardResult } from '../clipboard';

const props = defineProps<{ clipboard: ClipboardResult }>();

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
    </div>

    <table class="types">
      <thead>
        <tr class="border-b-3 border-neutral-300">
          <th class="text-left border-r-1 text-lg">Type</th>
          <th class="text-left text-lg">Content</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="({ type, content }, index) in clipboard.items"
          :class="[index > 0 && 'border-t-1']"
        >
          <td class="border-r-1">
            <span :id="type">{{ type }}</span>
          </td>
          <td>{{ content }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.types th,
.types td {
  --at-apply: text-left px-2 py-2;
}
</style>
