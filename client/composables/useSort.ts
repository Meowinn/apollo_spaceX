import { ref } from 'vue';

export const useSort = (launched) => {
    const sortOrder = ref(null);
  
  const sortByLaunchDate = () => {
    if (sortOrder.value === 'Ascending') {
      launched.value.sort((a, b) => {
        return new Date(a.launch_date_local).getTime() - new Date(b.launch_date_local).getTime();
      });
    } else if (sortOrder.value === 'Descending') {
      launched.value.sort((a, b) => {
        return new Date(b.launch_date_local).getTime() - new Date(a.launch_date_local).getTime();
      });
    }
  };
  
        watch(sortOrder, () => {
            sortByLaunchDate();
        });


    return {
        sortOrder,
    }
  };



