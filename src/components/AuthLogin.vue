<template>
  <div>
    <!-- <form ref="form" name="Login" @submit.prevent="submit" class="py-4 text-left">
      <div class="mb-4">
        <BaseInputText
          class="bg-surface"
          v-model="$v.email.$model"
          label="Email"
          placeholder="Email"
          :error="$v.email.$dirty && (!$v.email.required || !$v.email.email)"
        >
          <span v-if="$v.email.$dirty && !$v.email.required" class="text-xs text-error pl-error-message">
            Email is required
          </span>
          <span v-if="$v.email.$dirty && !$v.email.email" class="text-xs text-error pl-error-message">
            Please enter valid email
          </span>
        </BaseInputText>
      </div>
      <div class="mb-4">
        <BaseInputText
          class="bg-surface"
          v-model="$v.password.$model"
          label="Password"
          placeholder="Password"
          type="password"
          :error="$v.password.$dirty && !$v.password.required"
        >
          <span v-if="$v.password.$dirty && !$v.password.required" class="text-xs text-error pl-error-message">
            Password is required
          </span>
        </BaseInputText>
      </div>
      <div class="mb-6">
        <span v-if="loginError.length > 0" class="text-xs text-error">
          {{ loginError }}
        </span>
      </div>
      <div class="auth-button">
        <button
          class="bg-secondary w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-100 ease-in-out transition-all label-mobile cursor-pointer"
          type="submit"
        >
          Log In
        </button>
        <div class="auth-recovery">
          <router-link
            :to="{ name: 'AuthForgotPassword' }"
            class="inline-block align-baseline font-bold text-sm text-primary"
          >
            Forgot Password?
          </router-link>
        </div>
      </div>
    </form> -->

    <div class="rounded pt-6 pb-8 mb-4">
      <p class="mb-4">
        <a
          class="text-center block bg-primary w-full text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-100 ease-in-out transition-all label-mobile cursor-pointer"
          @click="oauth('Facebook')"
          >Login by Facebook</a
        >
      </p>
      <p class="mb-4">
        <a
          class="text-center block bg-primary w-full text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-100 ease-in-out transition-all label-mobile cursor-pointer"
          @click="oauth('Google')"
          >Login by Google</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import isEmail from 'validator/lib/isEmail';
import { required, email } from 'vuelidate/lib/validators';

export default {
  name: 'AuthLogin',
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  beforeDestroy() {
    this.cleanup();
  },
  methods: {
    cleanup() {
      this.password = '';
    },
    updateActiveState(value) {
      this.$store.dispatch('auth/updateActiveState', value);
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }
      this.login().then(() => {
        this.$emit('success');
      });
    },
    async login() {
      await this.$store.dispatch('auth/loginStandard');
      this.$store.dispatch('snackbar/show', {
        color: 'success',
        text: 'Logging in was successful',
        class: 'dark--text'
      });
    },
    async oauth(provider) {
      // TODO: move to store
      await this.$store.commit('auth/updateProvider', provider);
      await this.$store.dispatch('auth/updateReturnUrl', window.location.origin);
      const redirectUrl = await this.$store.getters['auth/oauth'];
      window.location.assign(redirectUrl);
    }
  },
  computed: {
    email: {
      get() {
        return this.$store.getters['auth/email'];
      },
      set(value) {
        this.$store.commit('auth/updateEmail', value);
      }
    },
    password: {
      get() {
        return this.$store.getters['auth/password'];
      },
      set(value) {
        this.$store.commit('auth/updatePassword', value);
      }
    },
    loading() {
      return this.$store.getters['auth/loading'];
    },
    loginError() {
      return this.$store.getters['auth/loginError'];
    }
  }
};
</script>
<style scoped>
.auth-button {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-recovery {
  margin-top: 20px;
}
</style>
