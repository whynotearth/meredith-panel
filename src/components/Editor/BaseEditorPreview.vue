<template>
  <MarkDownStyle>
    <div class="markdown-preview" v-html="preview"></div>
  </MarkDownStyle>
</template>

<script>
import Simplemde from 'simplemde';
import MarkDownStyle from './BaseMarkDownStyleProvider.vue';

export default {
  name: 'BaseEditorPreview',
  props: {
    content: {
      required: true
    }
  },
  components: {
    MarkDownStyle
  },
  computed: {
    preview() {
      return Simplemde.prototype.markdown(this.content);
    }
  }
};
</script>
