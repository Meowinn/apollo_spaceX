<!-- index.vue -->
<template>
	<v-container>
		<h2>
			<v-icon icon="mdi-vuetify" />
			Starter Test
		</h2>
		<h5>SpaceX Launches</h5>
		
		<h3 class="my-5">
			Example Vuetify
			<v-chip color="blue">SimpleTable</v-chip>
			<v-chip color="orange">Data from spaceX graphql</v-chip>
		</h3>
		<h3>Launches fools!</h3>
		<!-- <div>{{ launched }}</div> -->
		<LaunchCard 
			v-for="launch in launched"
			:key="launch.mission_name"
			:mission_name="launch.mission_name"
			:launch_date_local ="launch.launch_date_local.split('T')[0]"
			:launch_site="launch.launch_site"
			:rocket="launch.rocket.rocket_name"
			:details = "launch.details" 

			

		/>
		<!-- <v-table>
			<thead>
				<tr>
					<th class="text-left">Name</th>
					<th class="text-left">Active</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="ship in ships" :key="ship.name">
					<td>{{ ship.name }}</td>
					<td>
						<v-chip :color="ship.active ? 'green' : 'red'">{{ ship.active }}</v-chip>
					</td>
				</tr>
			</tbody>
		</v-table> -->

		
	</v-container>
</template>

<script lang="ts" setup>


type LaunchesResults = {
	launched: {
		results: {
			mission_name: string,
			launch_date_local: Date,
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


</script>

<!-- launchCard -->
<template>

    <v-container class="bg-surface-variant">
      <v-row no-gutters>
        <v-col
        
    
            >
        <v-card class="ma-2 pa-3">
        <v-card-item>
            <v-card-title><h3>Mission: {{ mission_name }}</h3></v-card-title>
            <v-card-subtitle>Launch Date: {{ launch_date_local }}</v-card-subtitle>
            <h4>{{ launch_site }}</h4>
        </v-card-item>
        <v-card-text>
            
            <h4>Rocket: {{ rocket }}</h4>
            <p>{{ details }}</p>
        </v-card-text>
        
        </v-card>
          
        </v-col>
      </v-row>
    </v-container>



    
</template>

<script lang="ts" setup>
    const props = defineProps({
        mission_name: {
            type: String
        },
        launch_date_local: {
            type: String
        },
        launch_site: {
            type: String
        },
        rocket: {
            type: String
        },
        details: {
            type: String
        },
        links: {
            type: String
        },
        launchProps: {
		type: Object
	}
    })
</script>


<!-- launchCard updated v1.2  -->
<template>

  <v-container fluid class="bg-surface-variant">
      <!-- {{ data }} -->

      <v-select
      v-model="selectedDate" :items="dates" 
      label="Filter by date..." 
      >
      
      </v-select>


    <v-row dense>
      <v-col
          v-for="launch in launched"
          :key="launch.id"

          cols="4"
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



const {sayHello} = useFilter();
sayHello();
  
const launches = ref([]);
// const selectedDate 

type LaunchesResults = {
launched: {
  results: {
    mission_name: string,
    launch_date_local: Date,
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
</script>


<!-- v3 -->
<template>

  <v-container fluid class="bg-surface-variant">
    <label for="Dates">Filter dates: </label>
    <select name="Dates" @change="onChange($event)" class="form-control" v-model="key">
      <option value="2000">2000</option>
      <option value="2001">2001</option>
    </select>
    

    <v-row dense>
      <v-col
            v-for="launch in dataLaunch"
            :key="launch.id"
            cols="4"
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
// import { ref } from 'vue';


  
const launches = ref([]);
const selectedDate = "";



type LaunchesResults = {
launched: {
  results: {
    mission_name: string,
    launch_date_local: Date,
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


// const launched = computed(() => data.value?.launches ?? [])
let dataLaunch = data.value?.launches; 

// const {sayHello} = useFilter();
// sayHello( dataLaunch.map(a => a.launch_date_local.split('T')[0]) );

const dates = dataLaunch.map(a => a.launch_date_local.split('T')[0]);

function onChange(event) {
  console.log(event.target.value)
  
  console.log(dataLaunch.filter(dataPiece => dataPiece.rocket.rocket_name == 'Falcon 1'))

  
  dataLaunch = dataLaunch.filter(dataPiece => dataPiece.rocket.rocket_name == 'Falcon 1')
}



</script>

<style>
select {
  background-color: white;
  padding: 2px 10px;
  width: 15%;
}
</style>

<!-- Working filter!!!!!!!!!!!!! -->
<template>

  <v-container fluid class="bg-surface-variant">
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

const selectedYear = ref<number | null>(null)
// Initialize selectedYear to null to show all launches by default

const filteredLaunches = computed(() => {
  if (selectedYear.value === null || selectedYear.value === "") {
    // If no year is selected, show all launches
    return launched.value
  } else {
    // Otherwise, filter the launches by the selected year
    return launched.value.filter(launch => {
      const launchYear = new Date(launch.launch_date_local).getFullYear()
      return launchYear === selectedYear.value
    })
  }
})

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
</script>

<!-- working filter and sort!!!! -->

<template>

  <v-container fluid class="bg-surface-variant">
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
    
      <v-row dense>
      <v-col cols="12" md="4" >
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


const { sayHello } = useFilter();
sayHello();

// filtering logic

const selectedYear = ref<number | null>(null)
// Initialize selectedYear to null to show all launches by default

const filteredLaunches = computed(() => {
  if (selectedYear.value === null || selectedYear.value === "") {
    // If no year is selected, show all launches
    return launched.value
  } else {
    // Otherwise, filter the launches by the selected year
    return launched.value.filter(launch => {
      const launchYear = new Date(launch.launch_date_local).getFullYear()
      return launchYear === selectedYear.value
    })
  }
});

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
</script>