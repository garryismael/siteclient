<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      elevation="1"
      elevate-on-scroll
      height="80"
      color="#08172d"
    >
      <base-img
        :src="require('@/assets/images/fahagola_logo.png')"
        class="mr-3 hidden-xs-only"
        contain
        max-width="60"
        width="100%"
      />

      <v-spacer />

      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
          background-color="transparent"
        >
          <v-tab
            v-for="(name, i) in items"
            :key="i"
            :to="{ name }"
            :exact="name === 'Home'"
            :ripple="false"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ name }}
          </v-tab>
        </v-tabs>
      </div>

      <v-btn
        class="font-weight-bold ml-6"
        color="#ED156D"
        dark
        depressed
        href="#"
        rel="noopener"
        target="_blank"
        x-large
      >
        Se connecter
      </v-btn>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: 'HomeAppBar',

    data: () => ({
      drawer: null,
      items: [
        'Accueil',
        'Mémento',
        'Forfaits',
      ],
    }),
  }
</script>

<style lang="sass">
  #home-app-bar
    .v-tabs-slider
      max-width: 24px
      margin: 0 auto

    .v-tab
      &::before
        display: none

    a.v-tab
      color: white
</style>
