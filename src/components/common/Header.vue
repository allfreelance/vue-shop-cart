<template>
  <header class="d-flex justify-content-between">
    <div class="header" @click="goto('home')">
      <h4 class="sweet">Sweet Dish</h4>
      <img class="header-img" src="../../assets/breakfast.png" alt="">
    </div>
    <div class="d-flex right">
      <div class="d-flex cart" @click="goto('cart')">
      <b-icon-cart class="cart-icon"></b-icon-cart>
      <span class="cart-count">{{cartItemCount}}</span>
    </div>
    <div class="d-flex">
      <h5 class="login">Login</h5>
      <h5 class="register">Sign Up</h5>
    </div>
    </div>
    
  </header>
</template>
<script>
export default {
  name: 'Header',
  computed: {
    cartItemCount() {
      return this.$store.state.cartItemCount;
    }
  },
  methods: {
    goto(page) {
      page === 'home' ? this.$router.push('/') : this.$router.push('/cart');
    }
  }
}
</script>
<style scoped>
  header {
    background-color: lightgrey;
    align-items: center;
    padding: 0 15px;
  }
  .header {
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
  }
  .logo {
    display: flex;
    margin-left: 15px;
    padding: 6px;
    cursor: pointer;
  }
  .sweet {
    color: deeppink;
    font-weight: 600;
    margin-top: 7px;
  }
  .cart-count {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: rgba(245, 132, 40, 0.467);
    padding: 0 5px;
    margin-left: -35px;
    background-color: #fff;
    height: 20px;
    border-radius: 50%;
    width: 20px;
    position: relative;
    top: -10px;
    left: 28px;
  }
  .right {
    width: 200px;
    justify-content: space-between;
    align-items: center;
  }
  .cart {
    height: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 3px;
    
  }
  .cart-icon {
    line-height: 45px;
    font-size: 24px;
    color: cadetblue;
    cursor: pointer;
  }
  .login,
  .register {
    font-weight: 600;
    margin-top: 10px;
    margin-left: 25px;
  }
  .header-img {
    width: 45px;
    height: 45px;
    margin-left: 10px;
  }
  
  @media (max-width: 576px) {
    header {
      flex-direction: column;
    }
  }
</style>