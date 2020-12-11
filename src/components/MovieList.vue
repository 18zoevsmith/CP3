<template>
<div class="wrapper">
  <div class="movies">
    <div class="movie" v-for="movie in movies" :key="movie.id">
      <div class="info">
        <h1>{{movie.name}}</h1>
        <p>{{movie.year}}</p>
      </div>
      <div class="image">
        <img :src="'/images/'+movie.image">
      </div>
      <div class="options">
        <button @click="AddToWatchList(movie)">To Watch</button>
        <button @click="AddToLikes(movie)">Like</button>
	<button @click="AddToDislikes(movie)">Dislike</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'MovieList',
  props: {
    movies: Array
  },
  methods: {
	AddToWatchList(movie) {
		var index = this.$root.$data.todo.indexOf(movie);
		if (index == -1) {
			this.$root.$data.todo.push(movie);
		}
	},
	AddToLikes(movie) {
		var index = this.$root.$data.likes.indexOf(movie);
		var index2 = this.$root.$data.hate.indexOf(movie);
		if (index == -1 && index2 == -1) {
			this.$root.$data.likes.push(movie);
		}
		else if (index == -1 && index2 != -1) {
			this.$root.$data.hate.splice(index2, 1);
			this.$root.$data.likes.push(movie);
		}
	},
	AddToDislikes(movie) {
		var index = this.$root.$data.likes.indexOf(movie);
		var index2 = this.$root.$data.hate.indexOf(movie);
		if (index == -1 && index2 == -1) {
			this.$root.$data.hate.push(movie);
		}
		else if (index != -1 && index2 == -1) {
			this.$root.$data.likes.splice(index, 1);
			this.$root.$data.hate.push(movie);
		}
	}
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.movies {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.movie {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.movie img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.movie .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.options {
  width: 200px;
  padding: 0px 10px;
}


.info {
  background: #781111;
  color: #ffffff;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}



button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>