<template>
  <div class="flex flex-col items-center py-20">
    <div class="py-16 flex flex-col items-center">
      <div class="py-3">
        <img height="150" width="75" :src="foodoukenLogo" alt="foodouken-logo" />
      </div>
      <div class="py-3">
        <h1 class="tg-h1-mobile text-white text-opacity-84">
          Welcome to <br />
          Foodouken
        </h1>
      </div>
    </div>
    <div class="py-10 w-full md:w-auto px-5">
      <div class="py-3">
        <Button
          :to="{ name: 'SignUp', params: { step: 'business-info' } }"
          title="START SETTING UP YOUR BUSINESS"
          class="tg-color-label-mobile text-white text-opacity-84 rounded-full py-3 px-10"
        />
      </div>
      <div class="py-3 text-center">
        <Button
          :to="{ name: 'LogIn' }"
          class="hyperlink-text text-white text-opacity-54 normal-case"
          title="Already have an account? Log in!"
          buttonBg="bg-transparent"
          :isRipple="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import foodoukenLogo from '@/assets/foodouken.png';

export default {
  name: 'Welcome',
  components: {
    Button
  },
  data() {
    return {
      foodoukenLogo
    };
  }
};
</script>
