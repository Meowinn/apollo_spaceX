<template>

  <v-container fluid class="bg-surface-variant">
    <v-row>
      <v-col cols="12" md="4">
          <v-text-field
            v-model.number="selectedYear"
            label="Filter by year"
            type="text"
            min="2000"
            max="2023"
            outlined
          />
          
        </v-col>
        <v-col >
          <v-select v-model="sortOrder" :items="['Ascending', 'Descending']" label="Sort Order" />
        </v-col>
    </v-row>
    
    <v-row dense>

      <v-col
          v-for="launch in filteredLaunches" :key="launch.id" cols="12" md="4"
          
          >
      <v-card class="ma-2 pa-3" height="500px"  >
      <v-card-item>
          <v-card-title><h3>Mission: {{ launch.mission_name }}</h3></v-card-title>
          <v-card-subtitle>Launch Date: {{ launch.launch_date_local.split('T')[0] }}</v-card-subtitle>
          <h4>{{ launch.launch_site }}</h4>
          
      </v-card-item>
      <v-card-text>
          
          <h4>Rocket: {{ launch.rocket.rocket_name }}</h4>
          <p class="text-justify">{{ launch.details }}</p>
      </v-card-text>
      
      </v-card>
        
      </v-col>
    </v-row>
  </v-container>

</template>

<script lang="ts" setup>
import { ref } from 'vue'


// sorting logic
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


type LaunchesResults = {
launched: {
  results: {
    mission_name: string,
    launch_date_local: string,
    id: string,
    launch_site: string,
    rocket: string,
    details: string,
    links: string
  }[]
}
}

const query = gql`
query getLaunches {
launches {
  mission_name
  launch_date_local
  id
  launch_site {
    site_name
  }
rocket {
    rocket_name
  }
  details
  links {
    mission_patch
    flickr_images
  }
}
}
`
const {data} = await useAsyncQuery<LaunchesResults>(query)
const launched = computed(() => data.value?.launches ?? [])


// filtering logic
const { selectedYear, filteredLaunches } = useFilterLaunches(launched);


</script>