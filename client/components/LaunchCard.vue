<template>
  <v-container fluid class="launchContainer">
    <v-row>
      <v-col cols="6"  >
          <v-text-field 
            v-model.number="selectedYear"
            label="Filter by year"
            type="text"
            min="2000"
            max="2023"
            outlined
            class="input-field"
          />
        </v-col>
        <v-col >
          <v-select class="input-field" v-model="sortOrder" :items="['Ascending', 'Descending']" label="Sort Order" />
        </v-col>
    </v-row>
    
    <v-row dense>
      <v-col v-for="launch in filteredLaunches" :key="launch.id" cols="12" md="4">
      <v-card class="ma-2 pa-3" color="#191717"
            theme="dark" height="350px"  >
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

//sorting logic
const { sortOrder } = useSort(launched);

</script>

<style>
  .launchContainer {
    padding: 2% 12% !important;
    background-image: url('../static/launch.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }

  .input-field {
    color: white;
  }
</style>