<template>
  <v-form ref="form">
    <v-container>
      <v-row>
        <v-col>
          <v-select
            v-model="select"
            item-text="forfait_name"
            :items="items"
            name="forfait_name"
            return-object
            label="Nos forfaits"
            :rules="selectRules"
            @change="onSelect"
          />
        </v-col>
      </v-row>
      <v-row v-if="currentItem">
        <v-col>
          <div>Type de données: {{ currentItem.typeData }}</div>
          <div>Maximum de données à emporter: {{ currentItem.limiteMax }} Go</div>
          <div>Prix: {{ currentItem.price }} $</div>
          <div>Emplacement: {{ currentItem.emplacement }} </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            label="Nom"
            required
          />
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            label="Prénom(s)"
            required
          />
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            label="E-mail"
            required
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-file-input
            placeholder="Votre données"
            prepend-icon="mdi-database-plus-outline"
            label="Données"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passRules"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Mot de passe"
            hint="Au moins 8 caractères"
            counter
            @click:append="show1 = !show1"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-btn
          class="mr-4"
          type="button"
          :disabled="invalid"
          @click="subscribe"
        >
          S'abonner
        </v-btn>
      </v-row>
      <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        color="success"
      >
        {{ text }}

        <template #action="{ attrs }">
          <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </v-form>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { isRequired, min } from '@/utils/validators'
  export default {
    data () {
      return {
        items: [],
        show1: false,
        show2: true,
        password: '',
        select: [],
        firstname: '',
        lastname: '',
        email: '',
        passRules: [isRequired(), min()],
        selectRules: [isRequired()],
        currentItem: null,
        snackbar: false,
        text: 'Ajout avec succès',
        timeout: 2000,
      }
    },
    computed: {
      ...mapGetters('forfaits', ['loaded', 'getForfaits']),
      invalid () {
        return false
      },
    },
    async created () {
      if (!this.loaded) {
        await this.get_forfaits()
      }
      this.select = this.getForfaits
      this.items = this.getForfaits
    },
    methods: {
      ...mapActions('forfaits', ['get_forfaits']),
      onSelect () {
        this.currentItem = this.select
      },
      subscribe () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
    },
  }
</script>

<style scoped>
</style>
