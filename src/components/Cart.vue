<template>
  <div class="d-flex cart-outer-div">
    <Header></Header>
    <div class="cart-body">
      <div v-if="totalPrice > 0" class="container mb-5">
        <h4 class="my-r my-cart">My Cart</h4>
        <div class="d-flex cart-body-wrapper">
          <Summary :totalPrice="totalPrice"></Summary>
          
          <div class="row cart-info-wrapper justify-content-end">
            <div class="cart-info col-md-12">
              <h4 class="fw-600">Cart</h4>
              <ul>
                <li v-for="item in cartItems" :key="item.id" class="cart-info-li">
                  <div class="cart-items">
                    <img class="cart-info-li-img" :src="item.url" alt="">
                    <h6 class="mt-15 cart-item-name">{{item.name}}</h6>
                    <div class="cart-item-qnt-block">
                      <div class="d-flex mt-10">
                      <button @click="removeItems(item)" class="remove" type="button">-</button>
                      <span class="cart-quantity">{{item.quantity}}</span>
                      <button @click="addItems(item)" class="add" type="button">+</button>
                    </div>
                    <h6 class="mt-15 text-end cart-item-price">{{item.price * item.quantity}} $</h6>
                    </div>
                  </div>
                  <div class="line"></div>
                </li>
              </ul>
              <div class="checkout-btn d-flex justify-content-end">
                <button @click="checkout" class="btn btn-primary" type="button">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EmptyCart v-else></EmptyCart>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Summary from './Summary'
import EmptyCart from './EmptyCart'
import Footer from './common/Footer'
import Header from './common/Header'
import swal from 'sweetalert'
export default {
  name: 'Cart',
  components: {
    Summary,
    EmptyCart,
    Footer, Header 
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    totalPrice() {
      let price = 0;
      this.$store.state.cartItems.map(item => {
        price += item["quantity"] * item["price"]
      })
      return price;
    }
  },
  methods: {
    removeItems(item) {
      this.$store.dispatch('removeToCart', item)
    },
    addItems(item) {
      this.$store.dispatch('addToCart', item)
    },
    checkout() {
      swal("Good Job!", "Success").then(
        value => {
          if (value) {
            window.location.reload();
            this.$store.commit('checkout');
          }
      })
    }
  }
}
</script>
<style scoped>
  .cart-outer-div {
    flex-direction: column;
    min-height: 100vh;
  }
  .cart-body {
    background-color: #efe9e2;
    flex: 1;
    overflow-y: auto;
  }
  .cart-quantity {
    display: inline-block;
    padding: 3px 6px;
    width: 46px;
    height: 28px;
    border-radius: 2px;
    background-color: #fff;
    margin: 0 5px;
    text-align: center;
  }
  .cart-items {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .my-cart {
    color: orange;
    font-weight: 600;
  }
  input[type="text"] {
    border: none;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    vertical-align: middle;
    text-align: center;
    outline: none;
  }
  .fw-600 {
    font-weight: 600;
  }
  .line {
    height: 1px;
    border-bottom: 1px solid #000;
  }
  .w-120 {
    width: 120px;
  }
  .w-60 {
    width: 60%;
  }
  .add,
  .remove {
    width: 28px;
    height: 28px;
    background: linear-gradient(#fff, #f9f9f9);
    border: 1px solid #c2c2c2;
    cursor: pointer;
    font-size: 16px;
    border-radius: 7px;
    padding-top: 1px;
    outline: none;
  }
  .mt-10 {
    margin-top: 10px;
  }
  .mt-15 {
    margin-top: 15px;
  }
  .orange-red {
    color: orangered;
  }
  .darkblue {
    color: darkblue;
  }
  .cart-info-wrapper {
    width: 100%;
  }
  .cart-info {
    max-width: 70%;
  }
  .cart-info-li {
    list-style: none;
  }
  .cart-info-li-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
  .checkout-btn {
    margin-top: 2%;
  }
  .cart-item-name {
    width: 70%;
    margin-left: 15px;
  }
  ul,
  li {
    padding: 0;
  }
  .cart-item-price {
    min-width: 50px;
  }
  .cart-item-qnt-block {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
  
  @media (max-width: 768px) {
    .cart-body-wrapper {
      flex-direction: column-reverse;
      justify-content: flex-start;
    }
    .cart-info {
      max-width: 100%;
      margin-bottom: 40px;
      margin-top: 40px;
    }
  }
  @media (max-width: 576px) {
    .cart-items {
      flex-wrap: wrap;
    }
  }
</style>