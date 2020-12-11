<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <h1> AFI's Top Movies </h1>
      </router-link>
    </div>
    <div id="side">
      <router-link to="/watch">
        <div class="menu-item watch">
          <p>To Watch</p>
        </div>
      </router-link>
      <router-link to="/list">
        <div class="menu-item">
          <p>Like/Dislike List</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
  background-color: #c4c4c4;

}

#menu {
  display: grid;
  //grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #9e2424;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}


#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}


.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.watch {
  margin-right: 50px;
}
</style>