<template>
<div>
  <h1> Liked Movies <br /> </h1>
  <LikeList :like_movies="like_movies" />
  <h1> Disliked Movies <br /> </h1>
  <LikeList :hate_movies="hate_movies" />
</div>
</template>

<script>
import LikeList from "../components/LikeList.vue"
export default {
  name: 'Like',
  components: {
    LikeList
  },
  data() {
    return {
    }
  },
  computed: {
    like_movies() {
      return this.$root.$data.likes;
    },
    hate_movies() {
      return this.$root.$data.hate;
    }
  },
}
</script>
