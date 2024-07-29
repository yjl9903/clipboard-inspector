<script setup lang="ts">
import prettify from "html-format";
import { ref } from "vue";

const types = ref<readonly string[]>([]);
const texts = ref<{ key: string; value: string }[]>([]);
const files = ref<File[]>([]);

const onPaste = (ev: ClipboardEvent) => {
  console.log(ev.clipboardData, ev.clipboardData?.files, ev.clipboardData?.types);
  if (ev.clipboardData?.types) {
    types.value = ev.clipboardData?.types;
  } else {
    types.value = [];
  }
  texts.value = [];

  for (const type of types.value) {
    if (
      type.startsWith("text/") ||
      type.startsWith("application/") ||
      type.startsWith("docx/")
    ) {
      let value = ev.clipboardData?.getData(type) ?? "";
      if (type === "text/html") {
        value = prettify(value);
      }
      texts.value.push({ key: type, value });
    }
  }

  console.log("Files", ev.clipboardData?.getData("Files"));
  files.value = [...(ev.clipboardData?.files ?? [])];

  const { dom, imgs } = parseHTML(ev.clipboardData?.getData("text/html") ?? "");
  console.log(dom, imgs);
};

function parseHTML(text: string) {
  const parser = new DOMParser();
  const dom = parser.parseFromString(text, "text/html");
  const imgs = Array.from(dom.querySelectorAll("img"));
  return { dom, imgs };
}
</script>

<template>
  <div class="flex justify-center mt-4 pb-12">
    <div class="w-[80vw]">
      <div class="rounded-md w-full">
        <div class="font-bold mb-4">Editor</div>
        <div
          contenteditable="true"
          class="editor w-full overflow-auto text-left rounded-md"
          @paste="onPaste"
        >
          12312312
        </div>
      </div>

      <div class="border-0 border-t-1 border-black border-solid mt-8 mb-8"></div>

      <div class="mb-4">
        <div>
          <span class="font-bold">Types:</span>
          <span v-for="type in types" class="type">{{ type }}</span>
        </div>
      </div>

      <div class="mb-4">
        <div>
          <span class="font-bold">Files:</span>
          <span v-for="file in files" class="mr-2">{{ file.name }}</span>
        </div>
      </div>

      <div v-for="{ key, value } in texts" class="text-left w-full mb-4">
        <div class="font-bold mb-2">{{ key }}</div>
        <div
          v-if="value"
          class="p-2 border border-black border-solid rounded-md h-[600px] overflow-auto"
        >
          <pre><code>{{ value }}</code></pre>
        </div>
        <div v-else>Empty</div>
      </div>
    </div>
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

pre {
  margin: 0;
}
</style>
