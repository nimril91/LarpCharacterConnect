<template>
  <div :class="['rounded-lg border bg-card text-card-foreground shadow-sm', className]" v-bind="$attrs" ref="cardRef">
    <div :class="['flex flex-col space-y-1.5 p-6', headerClassName]" ref="headerRef">
      <slot name="header" />
    </div>
    <div :class="['p-6 pt-0', contentClassName]" ref="contentRef">
      <slot name="content" />
    </div>
    <div :class="['flex items-center p-6 pt-0', footerClassName]" ref="footerRef">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  className: String,
  headerClassName: String,
  contentClassName: String,
  footerClassName: String
});

const cardRef = ref(null);
const headerRef = ref(null);
const contentRef = ref(null);
const footerRef = ref(null);
</script>