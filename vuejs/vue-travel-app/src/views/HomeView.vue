<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name">
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug },
          }"
        >
          <h2 class="color-destination">{{ destination.name }}</h2>
        </router-link>
        <figure>
          <router-link
            :to="{
              name: 'DestinationDetails',
              params: { slug: destination.slug },
            }"
          >
            <img
              :src="require(`@/assets/${destination.image}`)"
              :alt="destination.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}
img {
  max-width: 250px;
}
.destinations {
  display: flex;
  justify-content: space-between;
}

.color-destination {
  color: #20b2aa;
}

a {
  text-decoration: none;
  color: lightseagreen;
}

a:hover,
a:visited {
  text-decoration: underline;
}
</style>
