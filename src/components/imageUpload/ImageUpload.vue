<template>
  <div class="mx-4">
    <div class="mb-2">
      <slot name="title">
        <span class="tg-h3-mobile text-white text-opacity-54 mt-8 inline-block">
          Image
        </span>
      </slot>
    </div>
    <div class="flex flex-wrap -mx-1">
      <CloudinaryWidget
        @uploaded="onUpload"
        @opened="onUploaderOpened"
        :uploaderOptions="{
          maxFiles: 1,
          maxImageWidth: 560
        }"
      >
        <label class="bg-background m-1 block cursor-pointer" for="add-post-image-upload">
          <div class="upload-icon">
            <div
              class="upload-icon--dimension border border-white border-dashed border-opacity-38 flex justify-center items-center"
            >
              <ImageUploadPlus />
            </div>
          </div>
        </label>
      </CloudinaryWidget>
      <div class="upload-previews-wrapper flex flex-wrap">
        <template v-for="(image, index) in imagesToPreview">
          <BaseImagePreview
            v-if="image.secure_url"
            :selectImage="selectImage"
            :key="index"
            :image="image.secure_url"
            :index="index"
          />
        </template>
      </div>
      <ImagePreviewModal
        v-if="selectedImageInfo && selectedImageInfo.secure_url && selectedImageInfo.index >= 0"
        @deleteImage="deleteImage"
        @resetSelectedImage="resetSelectedImage"
        :image.sync="selectedImageInfo"
      />
    </div>
  </div>
</template>

<script>
import ImageUploadPlus from '@/assets/image_upload_plus.svg';

export default {
  name: 'ImageUpload',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    defaultImages: {
      type: Array
    },
    value: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      images: [],
      imagesToPreview: [],
      selectedImageInfo: {
        secure_url: '',
        index: null
      }
    };
  },
  components: {
    ImageUploadPlus,
    BaseImagePreview: () => import('./BaseImagePreview'),
    ImagePreviewModal: () => import('./ImagePreviewModal'),
    CloudinaryWidget: () => import('./CloudinaryWidget')
  },
  mounted() {
    if (this.defaultImages && this.defaultImages.length > 0) {
      this.images = [...this.defaultImages];
      this.imagesToPreview = [...this.defaultImages];
    }
  },
  methods: {
    deleteImage(index) {
      this.images.splice(index, 1);
      this.$emit('change', [...this.images]);
    },
    selectImage([secure_url, index]) {
      this.selectedImageInfo.secure_url = secure_url;
      this.selectedImageInfo.index = index;
    },
    resetSelectedImage() {
      this.selectedImageInfo = {
        secure_url: '',
        index: null
      };
    },
    onUploaderOpened() {
      //
    },
    onUpload(result) {
      if (result.event === 'success') {
        const images = [this.getCloudinaryImageAdaptedObject(result.info)];
        this.images = images;
        this.$emit('change', [...this.images]);
      }
    },
    getCloudinaryImageAdaptedObject(cloudinaryImageInfo) {
      const { secure_url, height, width } = cloudinaryImageInfo;
      return {
        secure_url,
        height,
        width
      };
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.imagesToPreview = [...val];
      }
    }
  }
};
</script>

<style scoped>
.upload-icon--dimension,
.upload-img--dimension {
  width: 76px;
  height: 108px;
}

.upload-previews-wrapper {
  height: 108px;
}
</style>
