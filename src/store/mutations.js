import { debug } from "util";

const mutations = {
    //write a logic for ADD_CONTACT && DELETE_CONTACT.
    ADD_CONTACT: function(state, contact){
      state.contacts.push(contact);
    },
    DELETE_CONTACT: function(state, contact){
      state.contacts.splice(contact.index, 1);
    }
  
  }
  export default mutations