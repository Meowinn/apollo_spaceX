import { computed, ref } from 'vue';

export const useFilterLaunches = (launched: any) => {
    const selectedYear = ref<number | null>(null);
  
    const filteredLaunches = computed(() => {
      if (selectedYear.value === null || selectedYear.value === '') {
        // If no year is selected, show all launches
        return launched.value;
      } else {
        // Otherwise, filter the launches by the selected year
        return launched.value.filter((launch: any) => {
          const launchYear = new Date(launch.launch_date_local).getFullYear();
          return launchYear === selectedYear.value;
        });
      }
    });
  
    return {
      selectedYear,
      filteredLaunches,
    };
  };



