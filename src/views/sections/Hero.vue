<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/images/fahagola.jpeg')"
      class="white--text bannier"
      gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
      height="450"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-subheading
            weight="regular"
            title="En attendant le voyage dans le temps, et la colonisation de mars, nous vous présentons Fahagola. Encapsuler vos mémoires pour qu'elles voyagent vers le futur."
          />

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          />
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
