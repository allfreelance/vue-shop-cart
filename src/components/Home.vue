<template>
  <div class="wrapper">
    <Header></Header>
    <div class="content mt-4">
      <div class="container mb-5 text-center">
        <h4 class="my4 fw-600 d-blue">Top rated</h4>
        <div class="row justify-content-between mb-4">
          <div class="col-md-6 col-lg-4 pointer" 
              v-for="item in topRated" 
              :key="item.id"
              @click="foodDetails(item)"
            >
            <img class="content-img" :src="item.url" alt="">
            <h5 class="fw-600 black">{{item.name}}</h5>
          </div>
        </div>
        <h4 class="my4 fw-600 d-blue">All Categories</h4>
        <div class="row justify-content-between mb-4">
          <div class="col-md-4 pointer" 
              v-for="item in allCategories" 
              :key="item.id"
              @click="foodDetails(item)"
            >
            <img class="content-img" :src="item.url" alt="">
            <h5 class="fw-600 black">{{item.name}}</h5>
          </div>
        </div>
        <h4 class="my4 fw-600 d-blue">Dishes Near You</h4>
        <div class="row justify-content-between mb-4">
          <div class="col-md-4 pointer" 
              v-for="item in dishesNearYou" 
              :key="item.id"
              @click="foodDetails(item)"
            >
            <img class="content-img" :src="item.url" alt="">
            <h5 class="fw-600 black">{{item.name}}</h5>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './common/Footer'
import Header from './common/Header'

export default {
  components: {
    Footer, Header 
  },
  computed: {
    topRated() {
      return this.$store.state.topRated;
    },
    allCategories() {
      return this.$store.state.allCategories;
    },
    dishesNearYou() {
      return this.$store.state.dishesNearYou;
    }
  },
  methods: {
    foodDetails(item) {
      this.$router.push({name: 'food-details', params: item})
    }
  }
}
</script>
<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #efe9e2;
  }
  .content {
    flex: 1;
    overflow-y: auto;
  }
  .content-img {
    width: 300px;
    height: 300px;
    border-radius: 15px;
    object-fit: cover;
  }
  .fw-600 {
    font-weight: 600;
  }
  .d-blue {
    color: dodgerblue
  }
  .black {
    color: #000;
  }
  .pointer {
    cursor: pointer;
  }
</style>