<template>
  <div class="d-flex food-details-outer">
    <Header></Header>
    <div class="food-details">
      <div class="container mb-5">
        <h4 class="my-4 fw600">Add item to cart</h4>
        <div class="row food-details-wrapper">
          <div class="col-md-4 food-img-wrapper">
            <img class="food-img" :src="details.url" alt="">
          </div>
          <div class="col-md-4 food-data">
            <h5 class="my-4 fw-600">Name: {{details.name}}</h5>
            <h5 class="my-4 fw-600">Price: {{details.price}}</h5>
            <h5 class="my-4 fw-600">Description: {{details.desc}}</h5>
            <h5 class="my-4 fw-600">Rating: {{details.rate}}</h5>
            <div>
              <button class="btn btn-primary" @click="goToCart">Go to cart</button>
              <button class="btn btn-success" @click="addToCart">Add item</button>
              <button class="btn btn-danger" @click="removeToCart">Remove item</button>
            </div>
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
  name: 'FoodDetails',
  components: {
    Footer, Header 
  },
  data() {
    return {
      details: this.$route.params
    }
  },
  methods: {
    goToCart() {
      this.$router.push('/cart')
    },
    addToCart() {
      this.$store.dispatch('addToCart', this.details)
    },
    removeToCart() {
      this.$store.dispatch('removeToCart', this.details)
    }
  },
  created() {
    if (this.$route.params.id !== undefined) {
      localStorage.setItem('details', JSON.stringify(this.$route.params))
    }
  },
  mounted() {
    this.details = JSON.parse(localStorage.getItem('details'))
  }
}
</script>
<style scoped>
  .food-details-outer {
    flex-direction: column;
    min-height: 100vh;
  }
  .food-details {
    background-color: #efe9e2;
    flex: 1;
    overflow-y: auto;
  }
  .fw-600 {
    font-weight: 600;
  }
  .food-img-wrapper {
    width: 300px;
    cursor: pointer;
    margin-right: 20px;
  }
  .food-img {
    width: 300px;
    height: 300px;
    border-radius: 15px;
    object-fit: cover;
  }
  .food-data {
    cursor: pointer;
    flex: 1;
  }
  .btn {
    margin-right: 10px;
  }
  
  @media (max-width: 768px) {
    .btn {
      width: 100%;
      margin-bottom: 10px;
    }
    .food-details-wrapper {
      flex-direction: column;
      align-items: center;
    }
  }
</style>