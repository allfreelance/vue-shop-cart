<template>
  <div class="empty-cart container my-5">
    <b-icon-cart class="cart-icon"></b-icon-cart>
    <div class="mt-4">
      <h4 class="orange-red fw-600">Your cart is empty</h4>
      <h5 class="darkblue fw-600">You can go to home page to view more food items</h5>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EmptyCart'
}
</script>
<style scoped>
.empty-cart {
  text-align: center;
}
  .cart-icon {
    width: 200px;
    height: 200px;
    color: red;
  }
  .orange-red {
    color: orangered
  }
  .darkblue {
    color: darkblue;
  }
  .fw-600 {
    font-weight: 600;
  }
</style>