<template>
    <header >
        <v-app-bar :elevation="5" class='pa-5 header text-white'>
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
    
    <style>
        .header {
            background-image: url('../static/banner2.png') !important;
        }

        li {
            list-style: none;
        }

        a:link, a:visited {
            font-size: 1.2rem;
            font-weight: 600;
            color: white;
            text-decoration: none ;
        }
        </style>