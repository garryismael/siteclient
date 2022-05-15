<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-select
          v-model="select"
          :items="items"
          label="Nos forfaits"
          required
        ></v-select>
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
            accept="image/png, image/jpeg, image/jpg"
            placeholder="Pick an avatar"
            prepend-icon="mdi-camera"
            label="Photo"
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
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Mot de passe"
            hint="Au moins 8 caractères"
            counter
            @click:append="show1 = !show1"
          />
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Confirmer mot de passe"
            hint="Au moins 8 caractères"
            class="input-group--focused"
            @click:append="show2 = !show2"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-btn
          class="mr-4"
          type="submit"
          :disabled="invalid"
          @click="subscribe"
        >
          S'abonner
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data () {
      return {
        items: ['Items1', 'Items2', 'Items3'],
        show1: false,
        show2: true,
        password: '',
        rules: {
          required: value => !!value || 'Requis',
          min: v => v.length >= 8 || '8 caractères minimum',
        },
      }
    },
  }
</script>

<style scoped>

</style>
