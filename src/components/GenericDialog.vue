<template>
  <DialogRoot>
    <DialogTrigger asChild>
      <slot name="trigger">
        <button class="btn-primary">{{ headline }}</button>
      </slot>
    </DialogTrigger>
    <DialogOverlay class="fixed inset-0 bg-black opacity-50" />
    <DialogContent class="fixed inset-0 flex items-center justify-center p-4">
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <DialogTitle class="text-xl font-bold mb-4">{{ headline }}</DialogTitle>
        <div v-for="option in options" :key="option.key" class="mb-4">
          <label :for="option.key" class="block text-sm font-medium text-gray-700">{{ option.key }}</label>
          <input
            v-if="option.type === 'text'"
            :id="option.key"
            v-model="formData[option.key]"
            type="text"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
          <textarea
            v-if="option.type === 'textarea'"
            :id="option.key"
            v-model="formData[option.key]"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          ></textarea>
          <!-- Add more input types as needed -->
        </div>
        <div class="flex justify-end">
          <DialogClose asChild>
            <button @click="handleSubmit" class="btn-primary">Save</button>
          </DialogClose>
        </div>
      </div>
        <DialogClose asChild>
        <button class="btn-primary">Close</button>
        </DialogClose>
    </DialogContent>
  </DialogRoot>
</template>

<script setup>
import { ref, watch } from 'vue';
import { DialogRoot, DialogTrigger, DialogOverlay, DialogContent, DialogTitle, DialogClose } from 'radix-vue';

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  headline: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['save']);

const formData = ref({});

watch(
  () => props.options,
  (newOptions) => {
    formData.value = newOptions.reduce((acc, option) => {
      acc[option.key] = option.default || '';
      return acc;
    }, {});
  },
  { immediate: true }
);

const handleSubmit = () => {
    emit('save', formData.value);
    // reset the formData values
    formData.value = props.options.reduce((acc, option) => {
      acc[option.key] = option.default || '';
      return acc;
    }, {});
};
</script>