<template>
  <LayoutFixedScrollable>
    <template #header>
      <BaseAppBarHeader :showSettingsLink="true" :option="'main-header'"></BaseAppBarHeader>
    </template>
    <template #content>
      <div class="bg-white flex items-center justify-center min-h-full relative flex-shrink-0 py-6 text-center">
        <div class="w-full">
          <div class="max-w-sm mx-auto px-12">
            <h1 class="text-primary h1-mobile md:h1 mb-h1-mobile mb-14">Meredith Panel</h1>

            <div>
              <router-link
                :to="{ name: 'AuthLogin' }"
                class="block bg-primary w-full text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-100 ease-in-out transition-all label-mobile"
              >
                Login
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </template>
  </LayoutFixedScrollable>
</template>

<script>
import store from '@/store';
import LayoutFixedScrollable from '@/components/LayoutFixedScrollable';
import UserCard from '@/components/UserCard.vue';
import BaseAppBarHeader from '@/components/BaseAppBarHeader.vue';

export default {
  name: 'Dashboard',
  components: {
    LayoutFixedScrollable,
    BaseAppBarHeader
  }
};
</script>
