<template>
  <pre class="hljs"><code ref="codeBlock">{{ props.code }}</code></pre>
</template>

<script setup>
import { onMounted, watch, ref } from 'vue';

import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/arduino-light.css'; // 样式需要单独引入
// import 'highlight.js/styles/vs2015.css'; // 样式需要单独引入
import javascript from 'highlight.js/lib/languages/javascript';

const props = defineProps({ code: String });

hljs.registerLanguage('javascript', javascript);

const codeBlock = ref();

onMounted(() => {
  hljs.highlightElement(codeBlock.value);
});

watch(() => props.code, () => {
  hljs.highlightElement(codeBlock.value);
});

</script>


<style scoped>
.hljs {
  border-radius: 10px;
  font-size: 16px;
  background-color: #cccccc;
}
</style>