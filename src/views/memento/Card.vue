<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-img
        :src="donnees.url"
        height="200px"
      />

      <v-card-title> Lorem ipsum dolor sit, amet consectetur adipisicing elit </v-card-title>

      <v-card-subtitle> Lorem, ipsum dolor. </v-card-subtitle>

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
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider />

          <v-card-text>
            {{ donnees.text }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>
<script>
  export default {
    props: {
      donnees: Object,
    },
    data () {
      return {
        show: false,
      }
    },
  }
</script>
