<template>
  <div>
    {{count}}
    <button @click="increment">Increment</button>
    <p>{{evenOrOdd}}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "counter",
  methods: {
    increment() {
      //call mutation increment here
      this.$store.commit('increment')
      console.log(this.$store)
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    evenOrOdd() {
      //get the counter value is even or odd from store/gettres
      return this.$store.state.evenOrOdd;
    }
  }
};
</script>
