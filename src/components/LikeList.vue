<template>
<div class="wrapper">
  <div class="like_movies">
    <div class="movie" v-for="movie in like_movies" :key="movie.id">
      <div class="info">
        <h1>{{movie.name}}</h1>
        <p>{{movie.year}}</p>
      </div>
      <div class="image">
        <img :src="'/images/'+movie.image">
      </div>
      <div class="note">
	<h2> {{movie.summary}} </h2>
      </div>
      <div class="options">
        <button @click="Remove(movie)">Remove</button>
        <button @click="TextBox1()">Note</button>
	<button @click="ChangeToDislikes(movie)">Dislike</button>
      </div>
	<input class="hide" type="text" id="textInput1" value="..." />
	<input id="submit" type="button" style="display:none" @click="Comment(movie)" value="Submit" />
    </div>
  </div>
  <div class="hate_movies">
    <div class="movie" v-for="movie in hate_movies" :key="movie.id">
      <div class="info">
        <h1>{{movie.name}}</h1>
        <p>{{movie.year}}</p>
      </div>
      <div class="image">
        <img :src="'/images/'+movie.image">
      </div>
      <div class="note">
	<h2> {{movie.summary}} </h2>
      </div>
      <div class="options">
        <button @click="Remove(movie)">Remove</button>
        <button @click="TextBox2()">Note</button>
	<button @click="ChangeToLikes(movie)">Like</button>
      </div>
	<input class="hide" type="text" id="textInput2" value="..." />
	<input id="submit2" type="button" style="display:none" @click="Comment(movie)" value="Submit" />
    </div>
  </div>
</div>

</template>
<script>
export default {
  name: 'LikeList',
  props: {
    like_movies: Array,
    hate_movies: Array
  },
  methods: {
	Remove(movie) {
		var index = this.$root.$data.likes.indexOf(movie);
		var index2 = this.$root.$data.hate.indexOf(movie);
		if (index == -1 && index2 != -1) {
			this.$root.$data.hate.splice(index2, 1);
		}
		else if (index != -1 && index2 == -1) {
			this.$root.$data.likes.splice(index, 1);
		}
	},
	TextBox1() {
		document.getElementById('textInput1').className="show";
		document.getElementById('submit').style.display='inline-block';
	},
	TextBox2() {
		document.getElementById('textInput2').className="show";
		document.getElementById('submit2').style.display='inline-block';
	},
	Comment(movie) {
		var index = this.$root.$data.likes.indexOf(movie);
		var index2 = this.$root.$data.hate.indexOf(movie);
		var note = "";
		if (index == -1 && index2 != -1) {
			note = document.getElementById("textInput2").value;
			this.$root.$data.hate[index2].summary = note;
			
		}
		else if (index != -1 && index2 == -1) {
			note = document.getElementById("textInput1").value;
			this.$root.$data.likes[index].summary = note;
		}
	},
	ChangeToLikes(movie) {
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
	ChangeToDislikes(movie) {
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

.hide{
  display:none;
}
.show{
  display:block;
}

.note {text-align: center;}

.hate_movies {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.like_movies {
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