<template>
  <textarea
    v-if="type === 'textarea'"
    :class="[
      'flex h-40 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      className
    ]"
    v-bind="$attrs"
    v-model="internalValue"
    ref="inputRef"
  />
  <input
    v-else
    :type="type"
    :class="[
      'flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      className
    ]"
    v-bind="$attrs"
    v-model="internalValue"
    ref="inputRef"
  />
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "Input",
  props: {
    className: String,
    type: String,
    modelValue: [String, Number]
  },
  setup(props, { emit, attrs }) {
    const inputRef = ref(null);
    const internalValue = ref(props.modelValue);

    watch(internalValue, (newValue) => {
      emit('update:modelValue', newValue);
    });

    watch(() => props.modelValue, (newValue) => {
      internalValue.value = newValue;
    });

    return { inputRef, internalValue, ...props, ...attrs };
  }
};
</script>