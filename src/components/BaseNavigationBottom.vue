<template>
  <nav class="flex w-full relative bottom-0 bg-transparent z-100" id="bottom-nav">
    <div class="flex flex-auto">
      <div class=" bg-primary flex-1"></div>
      <div class="container container--border px-0">
        <div class="flex relative">
          <ul class="flex-auto flex justify-start text-left menu list-none bg-primary px-2 md:px-0">
            <li class="text-white inline-block m-2 mx-3 md:mx-5 mb-1 text-xs flex-shrink-0">
              <router-link
                :active-class="'router-active-link'"
                class="router-normal-link"
                :to="{ name: 'Dashboard' }"
                exact
              >
                <HomeIcon class="m-auto" />
                Home
              </router-link>
            </li>
          </ul>
          <!-- <IconBottomNavFabOutcircle class="h-14 text-primary flex-shrink-0" />
          <a
            @click.prevent=""
            class="absolute flex content-center w-14 h-14 opacity-100 rounded-full cursor-pointer toggle-button bg-secondary shadow-6dp"
          >
            <AddIcon class="m-auto ease-in-out" :class="{ 'transform rotate-45': isOpen }" />
          </a>
          <div v-if="isOpen" class="fixed w-full h-full top-0 left-0 -z-1 bg-opacity-50 bg-black"></div> -->
        </div>
      </div>
      <div class=" bg-primary flex-1"></div>
    </div>
  </nav>
</template>

<script>
import HomeIcon from '@/assets/home.svg';

export default {
  name: 'NavigationBottom',
  components: {
    HomeIcon
  },
  data() {
    return {
      isOpen: false,
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      activeClass: {
        home: 'opacity-100',
        stats: 'opacity-100',
        blue: 'opacity-100',
        archive: 'opacity-100'
      }
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
.toggle-button {
  top: -30px;
  right: 16px;
}

.toggle-button:hover {
  background: #03b3f9;
  transition: background ease-in 0.6s;
}

/* .toggle-button:active {
  background: #fff;
  transition: background ease-in 0.6s;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
} */

.toggle-menu {
  top: -37px;
  right: 23px;
}

.ease-in-out {
  transition: all ease-in 0.2s;
}

ul.toggle-menu > li {
  transition: all 0.2s ease;
  color: transparent;
}

ul.toggle-menu.opened > li:nth-child(1) {
  transition-duration: 450ms;
  color: #fff;
  top: -70px;
}

ul.toggle-menu.opened > li:nth-child(2) {
  color: #fff;
  transition-duration: 450ms;
  top: -130px;
}

.router-normal-link {
  opacity: 0.54;
}

.router-normal-link svg path {
  fill: #fff;
  fill-opacity: 0.54;
}

.router-active-link {
  opacity: 1;
}

.router-active-link svg path {
  opacity: 1;
  fill: #fff;
  fill-opacity: 1;
}

.container--border {
  @screen md {
    border-left: 24px solid;
    border-right: 24px solid;

    @apply border-primary;
  }
}
</style>
