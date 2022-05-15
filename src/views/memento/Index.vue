<template>
  <div class="container">
    <div class="general-search">
      <v-row v-scroll:#scroll-target="onScroll">
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
      <v-card
        outlined
        color="transparent"
        class="d-flex justify-space-between mb-6"
        flat
        tile
      >
        <card
          v-for="(donnees, i) in datas"
          :key="i"
          :donnees="donnees"
        />
      </v-card>
    </div>
  </div>
</template>
<script>
  import PublicationService from '@/services/publication'
  import Card from './Card.vue'
  export default {
    components: {
      Card,
    },
    data: () => ({
      message: '',
      show: false,
      offsetTop: 0,
      publications: [],
      datas: [
        {
          url: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/cb/12/43/cb12431a-d13e-17dd-bd40-11705017336e/859746319460_cover.jpg/400x400cc.jpg',
          text: 'Je passe cette semaine la parole à Robert Zubrin qui vient de faire dans un texte magistral publié par la National Review, l’exposé le plus clair que j’ai lu sur la faisabilité de l’établissement de l’homme sur Mars. Selon lui (et je partage totalement ce point de vue), cette faisabilité repose sur le désir d’individus volontaires et capables, dont principalement Elon Musk, et sur l’esprit de Liberté. C’est cette combinaison qui a permis par la créativité, l’innovation sans entraves, le travail et la création de richesses propres, la réalisation du rêve américain. Et c’est cette même combinaison qui permettra l’ouverture sur Mars d’une nouvelle « frontière » pour l’humanité. Contrairement à ce que beaucoup croient, ce ne peut pas être les décisions des dirigeants des Etats aux commandes de lourdes bureaucraties car ils sont contraints par des procédures collectives, et des préoccupations électoralistes (auxquelles ils se soumettent volontiers car leur but est de se faire élire puis le plus souvent de rester au pouvoir), à l’indécision et au désir de « faire plaisir à tout le monde ». La démonstration, frappante, de cet état de fait est exposée par la comparaison entre le développement du programme Starship d’Elon Musk et celui du programme SLS de la NASA.',
        },
        {
          url: 'https://la1ere.francetvinfo.fr/image/U6r7YrLoI7tqtCBfU8Pil3Z17Wk/930x620/filters:format(webp)/outremer/2021/09/20/61482a0c143f4_627cbaf8-bb4f-4da1-b170-5c5bedd5eca4-1782371.jpg',
          text: 'Depuis 15 jours, les chiffres de la pandémie sont en constante diminution. La courbe du taux d’incidence a atteint 167 cas de Covid pour 100 000 habitants en sept jours. En comparaison au plus fort de la crise, ce taux atteignait 1250. C’est ici un indicateur particulièrement scruté par les pouvoirs publics et les services sanitaires. L’objectif affiché est que celui-ci passe en dessous de 100.Autre indicateur intéressant, le taux de positivité diminue également',
        },
        {
          url: 'https://www.ultimatemovierankings.com/wp-content/uploads/2015/06/chaplin-11111.jpeg',
          text: 'Charles “Charlie” Chaplin, was an English comic actor and filmmaker who rose to fame in movie shorts from Mack Sennett’s Keystone Studios.  Chaplin and his screen persona “the Tramp” became a worldwide icon.   From his start in shorts, he turned his attention to full length movies.  Between 1921 and 1940, Chaplin would star, write, produce, direct and compose the music for some of the greatest movies ever made!',
        },
        {
          url: 'https://www.lifeandstylemag.com/wp-content/uploads/2021/06/Shawn-Mendes-Camila-Cabello-Inline.jpg?fit=900%2C900&quality=86&strip=all',
          text: 'Despite being one of the most beloved couples in Hollywood, Shawn Mendes and girlfriend Camila Cabello still fight. In fact, the “Stitches” artist recalled a recent argument he had with the “Havana” singer — and what it taught him about himself.',
        },
      ],
    }),
    async created () {
      this.publications = await PublicationService.getPublications()
    },
    methods: {
      onScroll (e) {
        this.offsetTop = e.target.scrollTop
      },
    },
  }

</script>

<style scoped>

</style>
