<template>
  <header class="d-flex justify-content-between">
    <div class="header">
      <h4 class="sweet">Sweet Dish</h4>
      <img class="header-img" src="../../assets/breakfast.png" alt="">
    </div>
    <div class="d-flex cart">
      <b-icon-cart class="cart-icon"></b-icon-cart>
      <span class="cart-count">{{cartItemCount}}</span>
      
      <h5 class="login">Login</h5>
      <h5 class="register">Sign Up</h5>
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
  }
}
</script>
<style scoped>
  header {
    background-color: lightgrey;
    align-items: center;
  }
  .header {
    height: 60px;
    display: flex;
    justify-content: start;
    align-items: center;
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
    left: -6px;
  }
  .cart {
    height: 100%;
    align-items: center;
    width: 300px;
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
  }
  .header-img {
    width: 45px;
    height: 45px;
    margin-left: 10px;
  }
</style>