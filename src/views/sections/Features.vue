<template>
  <base-section
    id="features"
    class="secondary"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="3"
          >
            <base-info-card
              align="center"
              dark
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      cards: [
        {
          btn: 'mdi-keyboard-outline',
          title: 'Free',
          text: 'Pour la maudite somme de gratuité, vous pouvez laisser une trace de votre existence sur Fahagola. Cela prend en compte tout message contextuel, des lettres d\'amour à la Roméo et Juliette ou encore votre thèse de doctorat, tout en respectant les limites du forfait.',
        },
        {
          icon: 'mdi-camera-outline',
          title: 'Copper',
          text: 'Une image vaut mille mot. Plus facile à interpréter par les générations futures, la gamme de bronze de Fahagola offre, en plus des textes, une sauvegarde d\'images que vous souhateriez être vues dans le futur.',
        },
        {
          icon: 'mdi-pencil-outline',
          title: 'Silver',
          text: 'Vous voulez toujours plus, alors le forfait argent est pour vous. Il permet de conserver vos vidéos, vos images, et vos textes dans la limite dse 500 Go. et ceux pour 1000ans.',
        },
        {
          icon: 'mdi-puzzle-outline',
          title: 'Gold',
          text: 'Avec l\'ascension toute nouvelle de l\'holographique, il est désormais aussi possible d\'envoyer à vos arrières arrières petits enfants des holographiques de votre quotidien. Ou même à des extraterrestres puisque vos messages pourront voyager à travers l\'univers tout entier',
        },
      ],
    }),
  }
</script>
