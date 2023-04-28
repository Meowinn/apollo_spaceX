<template>
  <v-container fluid class="container">
    <v-row>
      <v-col v-for="rocket in allRockets" :key="rocket.name">
        <v-card class=" pa-3" height="390px">

          <v-card-item>
            <v-card-title class="pb-1">
              <h3>{{ rocket.name }}</h3>
            </v-card-title>
            <div class="pb-3">
              <v-chip class="" color="blue">Height: {{ rocket.height.meters }}m</v-chip>
              <v-chip class="ms-1" color="indigo">Diameter: {{ rocket.diameter.feet }}ft</v-chip>
              <v-chip class="mt-1" color="green">Mass: {{ rocket.mass.kg }}kg</v-chip>
            </div>
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
const { data } = await useAsyncQuery<RocketResults>(query)
const allRockets = computed(() => data.value?.rockets ?? [])

console.log(allRockets)
</script>

<style scoped>
.container {
  background-image: url('../static/rocketBg.png');
  padding: 10% 12%;
  height: 90%;
}
</style>