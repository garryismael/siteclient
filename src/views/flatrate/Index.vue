<template>
  <v-form ref="form">
    <v-container>
      <v-row>
        <v-col>
          <v-select
            v-model="select"
            :items="items"
            label="Nos forfaits"
            required
          />
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
            @click:append="show1 = !show1"
          />
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="confirmPass"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.isSame]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Confirmer mot de passe"
            class="input-group--focused"
            @click:append="show2 = !show2"
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
        confirmPass: '',
        rules: {
          required: value => !!value || 'Requis',
          min: v => v.length >= 8 || '8 caractères minimum',
          isSame: v => v === this.password || 'Valeur n\'est pas conforme au champs "Mot de passe"',
        },
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
