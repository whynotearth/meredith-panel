<template>
  <LayoutFixedScrollable>
    <template #header>
      <BaseAppBarHeader :showSettingsLink="true" :option="'main-header'"></BaseAppBarHeader>
    </template>
    <template #content>
      <div class="flex items-center justify-center min-h-full relative flex-shrink-0 py-6 text-center">
        <div class="w-full">
          <div class="max-w-md mx-auto px-4 text-center">
            <img class="mx-auto" src="https://placehold.it/184x184" alt="logo" />
            <h1 class="text-primary tg-h1-mobile mb-4">Meredith Core</h1>

            <h2 class="text-white tg-h1-mobile">Webapps for you</h2>

            <p class="mb-4 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere explicabo praesentium enim dolorum illo.
              Totam asperiores veniam fugit voluptatibus odio.
            </p>

            <router-link
              :to="{ name: 'SignUp', params: { step: 'business-info' } }"
              class="mb-8 block bg-primary w-full text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline duration-100 ease-in-out transition-all label-mobile"
            >
              Sign Up
            </router-link>

            <hr class="my-10" />

            <div v-for="site in sites" :key="site.id" class="mb-6">
              <a class="text-white" :href="site.url">
                <img class="block mx-auto mb-2 w-full" src="http://placehold.it/328x136" alt="" />

                <h2 class="text-left tg-h3-desktop uppercase">{{ site.title }}</h2>
              </a>

              <div class="text-left text-white text-opacity-54 tg-desktop-caption">
                {{ site.subtitle }}
              </div>

              <div class="text-left mt-2">
                <BaseChip v-for="tag in site.tags" :key="tag" isSmall :text="tag" classes="mr-2" />
              </div>
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
import BaseChip from '@/components/BaseChip.vue';
import BaseAppBarHeader from '@/components/BaseAppBarHeader.vue';

export default {
  name: 'Dashboard',
  data: () => ({
    sites: [
      {
        id: 1,
        title: 'Foodouken',
        subtitle: '$ | Food Delivery | Open Source',
        url: 'https://foodouken.com',
        tags: ['E-COMMERCE', 'SMALL BUSINESS FOCUSED']
      },
      {
        id: 2,
        title: 'Brow Tricks Beauty',
        subtitle: '$ | Salon Booking | Open Source',
        url: 'https://www.browtricks.com/TODO:fixlink',
        tags: ['E-COMMERCE', 'SMALL BUSINESS FOCUSED']
      }
    ]
  }),
  components: {
    LayoutFixedScrollable,
    BaseAppBarHeader,
    BaseChip
  }
};
</script>
