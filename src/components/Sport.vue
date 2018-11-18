<template>
   <div>
    <!-- you need to fetch dynamic parameter which we are passing in router file  in h tag  -->
   <!-- If dynamic route is cricket then fetch cricket data which is defined below otherwise print football data in p tag -->
   <p v-if="$route.params.name === 'cricket'">{{cricket}}</p>
   <p v-else>{{football}}</p>
     <!-- use router-link tag, navigate to tournaments page and name it as major tournaments -->
    <router-link to="/sport/cricket/tournaments" v-if="$route.params.name === 'cricket'" class="link">major tournaments</router-link>
    <router-link to="/sport/football/tournaments" v-else class="link">major tournaments</router-link>
    <router-view/>
   </div>
</template>

<script>
export default {
  name: "Sport",
  data() {
    return {
      msg: "Sport",
      cricket:
        "Cricket is a sport which is played between two teams of eleven players each who score runs (points) by running between two sets of three small, wooden posts called wickets. Each of the wickets is at one end of a rectangle of flattened grass called the pitch. Around the pitch is a much larger oval of grass called the cricket ground.",
      football:
        "Football is a sport which is played between two teams of eleven players each The game is played by kicking a ball into the opponents goal. A match has 90 minutes of play, with a break of 15 minutes during the match. The 90 minutes of play also includes extra time. The break in the middle is called half-time."
    };
  }
};
</script>

<style>
.def {
  padding: 0 40px;
  max-width: 800px;
  margin: 0 auto;
}
</style>
