<template>
  <div>
    <h3>{{$route.params.name}}<!-- Fetch dynamic route(child route) name here --> tournaments</h3>
  <!-- If route name is cricket print cricket tournaments which is defined below otherwise print football tournaments -->
<p v-if="$route.params.name === 'cricket'">{{cricket}}</p>
   <p v-else>{{football}}</p>
  </div>
</template>

<script>
export default {
  name: "Tournaments",
  data() {
    return {
      cricket: "ICC ODI World Cup * ICC Champions Trophy * ICC World Twenty20",
      football: "FIFA World Cup * UEFA Euro Cup * Copa América"
    };
  }
};
</script>