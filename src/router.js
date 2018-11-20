import Vue from 'vue'
import Router from 'vue-router'
import Contacts from './views/Contacts.vue';
import Contact from './views/Contact.vue';
import AddContact from './views/AddContact.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Contacts
    },
    {
      path: '/contacts/:index',
      component: Contact
    },
    {
      path: '/addcontact',
      component: AddContact
    }
  ]
})
