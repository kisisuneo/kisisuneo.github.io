<template>
  <nav id="nav">
    <p class="logo">The Chun Travel Blog</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/"> Home </router-link>
      </li>

      <li
        v-for="destination in destinations"
        :key="destination.name"
        class="links"
      >
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug },
          }"
        >
          {{ destination.name }}
        </router-link>
      </li>
      <li class="links">
        <router-link to="/user">Login</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: 1px solid grey;
  z-index: 1;
}

#nav a {
  font-weight: bold;
  color: purple;
}

#nav a.vue-chun-active-class {
  color: #20b2aa;
}

.nav-links {
  display: flex;
}

.links {
  padding-right: 20px;
  list-style: none;
}

.links :hover {
  text-decoration: underline;
}

.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
a {
  text-decoration: none;
}
</style>
