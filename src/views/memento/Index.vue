<template>
  <div class="container">
    <div class="general-search-input">
      <v-row>
        <v-col
          cols="12"
          md="11"
        >
          <v-text-field
            v-model="message"
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
    </div>
  </div>
</template>
<script>
  import PublicationService from '@/services/publication'
  export default {
    data () {
      return {
        publications: [],
      }
    },
    async created () {
      this.publications = await PublicationService.getPublications()
    },
  }

</script>

<style scoped>

</style>
