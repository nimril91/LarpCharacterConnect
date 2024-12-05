
<template>
  <input
    :type="type"
    :class="[
      'flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      className
    ]"
    v-bind="$attrs"
    ref="inputRef"
  />
</template>

<script>
import { ref } from "vue";

export default {
  name: "Input",
  props: {
    className: String,
    type: String
  },
  setup(props, { attrs }) {
    const inputRef = ref(null);
    return { inputRef, ...props, ...attrs };
  }
};
</script>