<template>
  <div class="mb-4 relative">
    <input
      class="input appearance-none outline-none relative bg-transparent rounded w-full px-4 py-3 border focus:border-2 active:border-2 focus:border-opacity-54 active:border-opacity-54"
      :class="[
        { filled: value && value.length > 0 },
        error ? 'border-red-600 placeholder-red-600' : 'border-white border-opacity-38'
      ]"
      :id="idName"
      :type="type"
      min="0"
      :step="step"
      :value="value"
      @blur="$emit('input', $event.target.value)"
      :placeholder="placeholder || label"
    />
    <label
      :for="idName"
      class="label bg-secondary absolute mb-0 top-0 left-0 mt-3 ml-3 cursor-text"
      :class="[error ? 'text-red-600' : 'text-white text-opacity-50', labelBg]"
    >
      {{ label }}
    </label>
    <slot></slot>
  </div>
</template>

<script>
import { randomId } from '@/helpers.js';

export default {
  name: 'TextInput',
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    label: {
      type: String,
      default: 'Label'
    },
    placeholder: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    step: {
      type: String,
      default: '1'
    },
    error: {
      default: Boolean
    },
    idName: {
      type: String,
      default: randomId
    },
    labelBg: {
      type: String
    }
  }
};
</script>

<style scoped>
.input {
  transition: border 0.2s ease-in-out;
  z-index: 2;
}

.label {
  transition: all 0.2s ease-out;
  transition: all 200ms;
  opacity: 0;
  padding: 0 5px;
  z-index: 1;
}

.input:focus + .label,
.input:active + .label,
.input.filled + .label {
  font-size: 0.75rem;
  transition: all 0.2s ease-out;
  top: -1.3rem;
  opacity: 1;
  display: block;
  z-index: 3;
}

.input:focus::placeholder {
  color: transparent;
}
</style>
