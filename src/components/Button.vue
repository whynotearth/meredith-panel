<template>
  <component
    :is="type"
    class="cursor-pointer text-sm font-semibold uppercase inline-block"
    :class="[isRipple ? 'ripple' : '', width, buttonBg, padding, textColor]"
    @click="$emit('clicked')"
    :href="href"
    :to="to"
  >
    <div class="flex flex-row items-center">
      <div class="text-left">
        <slot name="icon"></slot>
      </div>
      <div class="text-left" :class="[titleLeft || title ? 'flex-1' : 'hidden']">
        {{ titleLeft }}
      </div>
      <div class="flex-grow text-center" v-if="title">
        {{ title }}
      </div>
      <div class="text-right" :class="[titleRight || title ? 'flex-1' : 'hidden']">
        {{ titleRight }}
      </div>
    </div>
  </component>
</template>

<script>
export default {
  name: 'Button',
  props: {
    href: {
      type: String
    },
    to: {
      type: [String, Object]
    },
    title: {
      type: String,
      default: ''
    },
    titleLeft: {
      type: String,
      default: ''
    },
    titleRight: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: 'w-full'
    },
    buttonBg: {
      type: String,
      default: 'bg-button'
    },
    textColor: {
      type: String,
      default: 'text-white'
    },
    isRipple: {
      type: Boolean,
      default: true
    },
    padding: {
      type: String,
      default: 'p-4'
    }
  },
  computed: {
    type() {
      if (this.href) {
        return 'a';
      } else if (this.to) {
        return 'router-link';
      } else {
        return 'button';
      }
    }
  }
};
</script>
