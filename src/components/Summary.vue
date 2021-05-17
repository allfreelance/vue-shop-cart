<template>
  <div class="row summary-wrapper">
    <h4 class="fw-600 summary-title">Summary</h4>
    <div class="col-md-4 summary-item">
      <h6>Total: </h6>
      <h6>Promo Code:</h6>
      <h6>Shipping:</h6>
      <div class="my-3 line w-120"></div>
      <h6>Subtotal:</h6>
    </div>
    <div class="col-md-4 summary-item">
      <h6>Rs {{totalPrice}}</h6>
      <h6>SWEETDISH</h6>
      <h6>Rs 50:</h6>
      <div class="my-3 line w-60"></div>
      <h6>Rs {{totalPrice + 50}}</h6>
    </div>
  </div>
</template>
<script>
export default {
  name: "Summary",
  props: ['totalPrice']
}
</script>
<style scoped>
  .summary-wrapper {
    justify-content: space-between;
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
  .fw-600 {
    font-weight: 600;
  }
  
  .summary-item {
    width: 50%;
  }
  .summary-title {
    width: 100%;
  }
</style>