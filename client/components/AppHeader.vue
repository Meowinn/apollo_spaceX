<template>
    <header class="header">

        <v-app-bar :elevation="5" class='pa-5'>
            <v-app-bar-title>
                <h2>
                <v-icon icon="mdi-vuetify" /> 
                SpaceX Launches
                </h2>
            </v-app-bar-title>
            <ul>
                <li>
                    <nuxt-link to="/" class="pr-5">Home</nuxt-link>
                    <nuxt-link to="rockets" class="pr-5">Rockets</nuxt-link>
                </li>
            </ul>
            </v-app-bar>

        
    </header>
    
    </template>
    
    <script>
    
    </script>

    <style>
        li {
            list-style: none;
        }
        
        </style>