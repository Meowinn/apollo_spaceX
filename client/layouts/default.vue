<template>
	<v-app>
		
		<v-main>
			<AppHeader/>
			<slot />
			<AppFooter />
		</v-main>
	</v-app>
</template>
<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
export default {
	name: 'DefaultLayout',
	components: {
		AppHeader,
		AppFooter
	}
}
</script>
