<template>
  <div class="addcontacts">
    <AddContact/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddContact from '@/components/AddContact.vue'

export default {
  name: 'addcontacts',
  components: {
    AddContact
  }
}
</script>
