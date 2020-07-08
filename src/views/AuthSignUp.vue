<template>
  <div class="clear-margin clear-max-width">
    <AuthSignup />
  </div>
</template>

<script>
import AuthSignup from '@/components/auth/SignUpForm.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'AuthSignupPage',
  components: {
    AuthSignup
  },
  methods: {
    ...mapMutations('tenant', ['resetCreateTenantForm'])
  },
  destroyed() {
    this.resetCreateTenantForm();
  }
};
</script>
