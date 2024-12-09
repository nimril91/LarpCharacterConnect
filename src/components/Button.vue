<template>
  <component
    :is="asChild ? 'slot' : 'button'"
    :class="computedClass"
    v-bind="attrs"
    v-on="listeners"
    ref="buttonRef"
  >
    <slot></slot>
  </component>
</template>

<script setup>
import { computed, ref, toRefs, useAttrs } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: 'default',
  },
  asChild: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: '',
  },
});

const { variant, size, asChild, className } = toRefs(props);

const buttonRef = ref(null);
const buttonClasses = {
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    close: "text-gray-500 hover:text-gray-700"
  },
  sizes: {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  },
};

const computedClass = computed(() => {
  return [
    buttonClasses.base,
    buttonClasses.variants[variant.value],
    buttonClasses.sizes[size.value],
    className.value,
  ].join(' ');
});

const attrs = useAttrs();
const listeners = Object.keys(attrs).reduce((acc, key) => {
      if (key.startsWith('on')) {
        acc[key] = attrs[key];
      }
      return acc;
    }, {});
</script>