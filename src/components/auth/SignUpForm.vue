<template>
  <div class="">
    <div class="min-h-screen w-full flex flex-col justify-between">
      <div>
        <StepperTop class="clear-margin" :navigation="navigation" :page="page" />
        <div class="my-4">
          <transition name="fade" mode="out-in">
            <keep-alive>
              <component :is="component" :ref="component" @nextStep="nextStep"></component>
            </keep-alive>
          </transition>
          <div v-if="errors" class="px-4 text-error text-xs">
            <div v-for="(error, key) in errors" :key="key">
              <p v-for="(detail, key) in error" :key="key">{{ detail }}</p>
            </div>
          </div>
        </div>
      </div>
      <StepperBottom
        :page="page"
        :nextStepText="`${navigation[page] && page < navigation.length ? 'NEXT STEP' : 'FINISH'} ►`"
        @previousStep="previousStep"
        @nextStep="nextStep"
        class="clear-margin"
        :firstPageStepBack="true"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import StepperTop from '@/components/BaseStepperTopBar';
import StepperBottom from '@/components/BaseStepperBottomBar';
import BusinessInfo from '@/components/tenant/BusinessInfo';
import LinkAccount from '@/components/tenant/LinkAccount';
import { showOverlayAndRedirect } from '@/helpers';

export default {
  name: 'SignUpForm',
  components: {
    StepperTop,
    StepperBottom,
    BusinessInfo,
    LinkAccount
  },
  data() {
    return {
      navigation: [
        {
          step: 'business-info',
          name: 'Your Info'
        },
        {
          step: 'link-account',
          name: 'Link Account'
        }
      ],
      errors: null
    };
  },
  computed: {
    ...mapGetters('tenant', ['page']),
    component() {
      return this.navigation[this.page - 1].step;
    }
  },
  created() {
    if (!this.$route.query.signUpStarted && this.$route.params.step !== 'business-info') {
      this.$router.replace({ params: { step: 'business-info' } });
    }
  },
  methods: {
    ...mapMutations('tenant', ['pageChange', 'resetCreateTenantForm']),
    ...mapActions('tenant', ['createTenant']),
    ...mapActions('auth', ['ping']),
    previousStep() {
      if (this.page > 1) {
        this.pageChange(this.page - 1);
      } else if (this.page === 1) {
        this.$router.push({ name: 'Dashboard' });
      }
    },
    nextStep() {
      let valid = true;
      const isThereValidationAtComponent = !!this.$refs[this.component].$v;
      if (isThereValidationAtComponent) {
        this.$refs[this.component].$v.$touch();
        valid = !this.$refs[this.component].$v.$invalid;
      }

      if (valid) {
        if (this.page < this.navigation.length) {
          this.pageChange(this.page + 1);
        } else {
          showOverlayAndRedirect({ title: 'Success!', route: { name: 'Dashboard' } });
        }
      }
    }
  },
  watch: {
    component(step) {
      this.$router.push({ name: 'SignUp', params: { step } }).catch(() => {});
    },
    '$route.params.step': {
      immediate: true,
      handler() {
        const stepFromUrl = this.$route.params.step;
        const index = this.navigation.findIndex(nav => nav.step === stepFromUrl);

        if (index >= 0) {
          this.pageChange(index + 1);
        } else if (index < 0) {
          this.$router.push({ name: 'Welcome' });
        }
      }
    }
  }
};
</script>
