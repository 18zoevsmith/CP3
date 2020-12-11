<template>
<div>
  <WatchList :movies="movies" />
</div>
</template>

<script>
import WatchList from "../components/WatchList.vue"
export default {
  name: 'Watch',
  components: {
    WatchList
  },
  data() {
    return {
    }
  },
  computed: {
    movies() {
      return this.$root.$data.todo;
    }
  },
}
</script>
