<template>
  <BaseDropdown class="relative dropdown-text__align-left border-t" :options="time_slots" v-model="time">
    <template #title="{ selectedOption }">
      <span v-if="time_slots.length === 0" class="text-gray-500">
        No time slots!
      </span>
      <span v-else>
        <span class="text-black">Schedule:</span>
        <span v-if="selectedOption" class="ml-2 em-medium">
          {{ millisecondToTime(selectedOption) }}
        </span>
        <span class="ml-2 em-medium" v-else>
          No time selected
        </span>
      </span>
    </template>
    <template #option="{ option }">
      <span>
        {{ millisecondToTime(option) }}
      </span>
    </template>
  </BaseDropdown>
</template>

<script>
import BaseDropdown from '@/components/BaseDropdown';

export default {
  name: 'TimePicker',
  components: { BaseDropdown },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Date, Number]
    },
    emailDate: {
      type: [String, Date, Number]
    }
  },
  computed: {
    time: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('change', val);
      }
    },
    time_slots() {
      let time = [];
      if (this.emailDate) {
        let d = new Date(this.emailDate);
        let start = 800;
        let end = 2400;
        let startHours = Math.floor(start / 100) * 3600000;
        let endHours = Math.floor(end / 100) * 3600000;
        let startMinutes = (start % 100) * 60000;
        let endMinutes = (end % 100) * 60000;
        let startTime = startHours + startMinutes;
        let endTime = endHours + endMinutes;
        d.setHours(0, 0, 0, 0);
        if (Date.now() > d.getTime()) startTime = Date.now() - d.getTime() + 900000;
        for (let i = startTime; i <= endTime; i += 900000) {
          time.push(i);
        }
      }
      return time;
    }
  },
  methods: {
    millisecondToTime(duration) {
      let minutes = parseInt((duration / (1000 * 60)) % 60),
        hours = parseInt((duration / (1000 * 60 * 60)) % 24);

      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;

      return hours + ':' + minutes;
    }
  }
};
</script>

<style>
.dropdown-text__align-left div.items-strech,
.dropdown-text__align-left .option {
  text-align: left;
}
</style>
