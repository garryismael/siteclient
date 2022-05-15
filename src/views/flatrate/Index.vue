<template>
  <v-form>
    <v-row>
      <v-col
        cols="12"
        md="4"
      >
        <v-text-field
          v-model="firstname"
          :rules="nameRules"
          :counter="10"
          label="First name"
          required
        />
      </v-col>

      <v-col
        cols="12"
        md="4"
      >
        <v-text-field
          v-model="lastname"
          :rules="nameRules"
          :counter="10"
          label="Last name"
          required
        />
      </v-col>

      <v-col
        cols="12"
        md="4"
      >
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-file-input
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an avatar"
          prepend-icon="mdi-camera"
          cols="12"
          md="8"
          label="Photo"
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
  </v-form>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
