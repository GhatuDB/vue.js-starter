<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar class="blue" dark>
          <v-toolbar-side-icon>
            <!-- use a button to back navigation use id as back-button. -->
            <v-btn id="back-button" :to="'/'">
              <v-icon>arrow_back</v-icon>
            </v-btn>
          </v-toolbar-side-icon>
          <!-- Give title as Conatcts use id as app-title. -->
          <v-toolbar-title id="app-title">Contacts</v-toolbar-title>
          <v-spacer></v-spacer>
            <!-- use a button to back navigation use id as delete-button and add a click handler to deleteConfirm method. -->
          <v-btn id="delete-button" @click="deleteConfirm">delete</v-btn>
        </v-toolbar>
        <div color="indigo">
          <v-icon class="blue white--text face-bg">face</v-icon>
        </div>
        <v-card-title primary-title>
          <div>
            <!-- print contact user name use id as contact-name. -->
            <span id="contact-name">{{contact.name}}</span>
            <p class="text-lg-center">
              <v-icon small>smartphone</v-icon>
              <!-- print contact phone number use id as contact-phone. -->
              <span id="contact-phone">{{contact.phone}}</span>
            </p>
          </div>
        </v-card-title>
      </v-card>
      <v-dialog v-model="dialog" max-width="290">
        <v-card id="delete-modal">
          <v-card-title class="headline">Delete Contact?</v-card-title>
          <v-card-text>
            Are you sure you want to delete the contact?
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <!-- write a buttons as No and Delete, if cliks on Delete, contact should be deleted and add a click handler to deleteContact method.otherhand if click on No button  dialog should be closed-->
            <v-btn @click="dialog = false">No</v-btn>
            <v-btn @click="deleteContact">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-flex>
  </v-layout>
</template>
<script>
  import {
    store,
    mapMutations
  } from 'vuex'

  export default {
    name: 'contact',
    data() {
      return {
        //define data here.
        dialog: false,
      }
    },
    methods: {
      ...mapMutations([
        'DELETE_CONTACT'
      ]),
      deleteConfirm() {
     //open a dialog
        this.dialog = true;
      },
      deleteContact() {
       // write a logc here to delete contact.
        this.DELETE_CONTACT({ 
          index: this.$route.params.index
        //add code to take a name and phone fields from a form.
        });
        this.$router.push('/');
      }
    },
    computed: {
      contact() {
        //fetch contact details here.
        return this.$store.state.contacts[this.$route.params.index];
      }
    },
  }

</script>

<style>
  .face-bg {
    width: 100%;
    height: 200px;
    font-size: 100px;
  }

  .headline {
    margin-bottom: 5px;
  }

</style>
