<template>

    <v-container fluid class="fill-height">
      <v-row dense>
        <v-col
            v-for="rocket in allRockets"
            :key="rocket.name"
            >
        <v-card class="ma-2 pa-3" height="550px" >

            <!-- <v-img
                cover
                height="250"
                
            ></v-img> -->

    

            
            
        <v-card-item>
            <v-card-title><h3>{{ rocket.name }}</h3></v-card-title>
            <v-card-subtitle>
                <div>Height: {{ rocket.height.meters }}m</div>
                <div>Diameter: {{ rocket.diameter.feet }}ft</div>
                <div>Mass: {{ rocket.mass.kg }}kg</div>
                
            </v-card-subtitle>
            <h4>First-flight: {{ rocket.first_flight }}</h4>
            
        </v-card-item>
        <v-card-text>
            
            <h4>Stages: {{ rocket.stages }}</h4>
            <p class="text-justify">{{ rocket.description }}</p>
        </v-card-text>
        
        </v-card>
          
        </v-col>
      </v-row>
    </v-container>
  
  </template>
  
  <script lang="ts" setup>
  
  type RocketResults = {
    allRockets: {
    results: {
      name: string,
      description: string,
      first_flight: string,
      height: string,
      diameter: string,
      mass: string,
      stages: number,
    }[]
  }
  }
  
  const query = gql`
  query Rockets {
  rockets {
    name
    description
    first_flight
    height {
      meters
    }
    diameter {
      feet
    }
    mass {
      kg
    }
    stages
  }
}
  `
  const {data} = await useAsyncQuery<RocketResults>(query)
  
  
  const allRockets = computed(() => data.value?.rockets ?? [])

  console.log(allRockets)
  </script>