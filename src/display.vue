<template>
  <div class="flex flex-col gap-2 items-center justify-center">
    <div v-if="formattedDate">{{ formattedDate }}</div>
    <div v-if="lunarDate">{{ lunarDate }}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { LunarCalendar } from "@dqcai/vn-lunar";

export default defineComponent({
  props: {
    value: {
      type: String,
      default: null,
    },
    displayHeavenlyStemsAndEarthlyBranches: {
      type: Array,
      default: [],
    },
    displayGregorianDate: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    if (!props.value) {
      return {
        formattedDate: null,
        lunarDate: null,
      };
    }

    const hasDateCanChi =
      props.displayHeavenlyStemsAndEarthlyBranches.includes("date");
    const hasMonthCanChi =
      props.displayHeavenlyStemsAndEarthlyBranches.includes("month");
    const hasYearCanChi =
      props.displayHeavenlyStemsAndEarthlyBranches.includes("year");

    const gregorianDate = new Date(props.value);

    const day = gregorianDate.getDate();
    const month = gregorianDate.getMonth() + 1;
    const year = gregorianDate.getFullYear();

    const calendar = LunarCalendar.fromSolar(
      Number(day),
      Number(month),
      Number(year)
    );
    const lunarDate = calendar.lunarDate;

    const displayLunarDate = hasDateCanChi ? calendar.dayCanChi : lunarDate.day;
    const displayLunarMonth = hasMonthCanChi
      ? calendar.monthCanChi
      : lunarDate.month;
    const displayLunarYear = hasYearCanChi
      ? calendar.yearCanChi
      : lunarDate.year;

    return {
      formattedDate: computed(() => {
        if (!props.displayGregorianDate) {
          return null;
        }
        return `${day}/${month}/${year} Dương Lịch`;
      }),
      lunarDate: computed(() => {
        return ` Ngày ${displayLunarDate} tháng ${displayLunarMonth} năm ${displayLunarYear}`;
      }),
    };
  },
});
</script>
