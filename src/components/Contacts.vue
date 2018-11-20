<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar class="blue" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
           <!-- Give title as Conatcts use id as app-title. -->
           <v-toolbar-title id="app-title">Contacts</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon to="/addcontact" id="add-button">
        <!--give a button as add if it clicks it should go to addcontact component. -->
        <!-- use icon add. -->
            <v-icon>add</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list two-line>
         <!--  print all contacts in v-list-tile tag,use class as contact-item.-->
          <v-list-tile v-for="(contact, index) in contacts" :key="index">
            <v-list-tile-avatar>
              <v-icon class="blue white--text">face</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title class="contact-name">
              <!--   print contact name here, use class as contact-name. -->
              {{contact.name}}
              </v-list-tile-title>
              <v-list-tile-sub-title class="contact-phone">
                <!-- print contact phone here,use class as contact-phone. -->
              {{contact.phone}}
              </v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn :to="'/contacts/' + index" icon ripple class="contact-item">
                <v-icon class="grey--text text--lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>

</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "contacts",

  computed: {
    contacts() {
      //Fetch contacts here from store.
      return this.$store.state.contacts;
    }
  }
};
</script>
