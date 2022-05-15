<template>
  <div class="container">
<<<<<<< HEAD
    <div class="general-search-input">
      <v-row>
=======
    <div class="general-search">
      <v-row v-scroll:#scroll-target="onScroll">
>>>>>>> 3c9ad7b05cbe8a5fc74bc8393f03a547383a3168
        <v-col
          cols="12"
          md="11"
        >
          <v-text-field
<<<<<<< HEAD
            v-model="message"
=======
            v-model="message3"
>>>>>>> 3c9ad7b05cbe8a5fc74bc8393f03a547383a3168
            filled
            label="Rechercher"
            clearable
          />
        </v-col>
        <div class="my-2">
          <v-btn
            color="primary"
            fab
            large
            dark
          >
            <v-icon>mdi-crosshairs</v-icon>
          </v-btn>
        </div>
      </v-row>
      <v-row
        no-gutters
      >
        <v-col
          cols="12"
          md="4"
        >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              :src="require('@/assets/images/fahagola.jpeg')"
              height="200px"
            />

            <v-card-title>
              Top western road trips
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="#ED156D"
                text
              >
                Explore
              </v-btn>

              <v-spacer />

              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider />

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
  import PublicationService from '@/services/publication'
  export default {
<<<<<<< HEAD
    data () {
      return {
        publications: [],
      }
    },
    async created () {
      this.publications = await PublicationService.getPublications()
=======
    data: () => ({
      show: false,
      offsetTop: 0,
    }),

    methods: {
      onScroll (e) {
        this.offsetTop = e.target.scrollTop
      },
>>>>>>> 3c9ad7b05cbe8a5fc74bc8393f03a547383a3168
    },
  }

</script>

<style scoped>

</style>
