<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar class="blue" dark>
          <v-toolbar-side-icon>
            <!-- use a button to back navigation use id as back-button. -->
            <v-btn id="back-button" :to="'/'">
              <v-icon>arrow_back</v-icon>
            </v-btn>
          </v-toolbar-side-icon>
            <!--Give a title Contacts using toolbar-title tag.-->
            <!--use id as app-title inside the tag. -->
            <v-toolbar-title id="app-title">Contacts</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon to="/addcontact">
           <v-icon>add</v-icon>
          </v-btn>
        </v-toolbar>
        <div color="indigo">
          <v-icon class="blue white--text face-bg">face</v-icon>
        </div>
        <v-form ref="form">
          <!--write  textfields for name  & contact.-->
          <!-- use id as addcontact-name, addcontact-phone in textfields. -->
           <v-text-field
            v-model="name"
            id="addcontact-name"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="phone"
            id="addcontact-phone"
            label="Phone Number"
            required
          ></v-text-field>
          <!-- should contain buttons ADD,Clear.
          use id's as  addcontact-button,clear-button.and add a click handlers to addContacts and clear method  -->
          <v-btn @click="addContact" id="addcontact-button">ADD</v-btn>
          <v-btn @click="clear" id="clear-button">Clear</v-btn>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  data: () => ({
    name: "",
    phone: ""
    //You can define data here if you want.
  }),
  methods: {
    ...mapMutations(["ADD_CONTACT"]),
    addContact() {
      this.ADD_CONTACT({ 
        name: this.name, 
        phone: this.phone
        //add code to take a name and phone fields from a form.
      });
      this.$router.push("/");
    },
    clear() {
      // add code to clear name and phone fields
      this.name = '';
      this.phoen = '';
    }
  }
};
</script>

<style>
.v-form {
  padding: 10px;
}
</style>