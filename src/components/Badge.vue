<template>
  <div
    :class="[
      'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      variantClasses,
      className
    ]"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "Badge",
  props: {
    className: String,
    variant: {
      type: String,
      default: "default"
    }
  },
  setup(props, { attrs }) {
    const variantClasses = computed(() => {
      switch (props.variant) {
        case "secondary":
          return "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80";
        case "destructive":
          return "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80";
        case "outline":
          return "text-foreground";
        default:
          return "border-transparent bg-primary text-primary-foreground hover:bg-primary/80";
      }
    });

    return { variantClasses, ...props, ...attrs };
  }
};
</script>