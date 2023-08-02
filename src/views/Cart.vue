<template>
  <div class="CartView ">
   <!-- Header -->
      <div class="d-flex row itemsCost my-4">
         <div class="col-3 ">Product</div>
         <div class="col-3 ">price</div>
         <div class="col-3">Quantity</div>
         <div class="col-3">SubTotal</div>
      </div>

      <!-- Cart Items -->
      <div class="d-flex row">
         <div class="col-3">
            <img class="cartImg" src="https://s3-alpha-sig.figma.com/img/5e63/4682/db5174aff99bb9337d2dc9598a0b44e4?Expires=1691971200&Signature=TCWsjDsliTiGVtXTdB7LK~oJfRXq3a7HNior7Qw2tMRUmX9K1pKpC-vo2bf98PoasDQtgZVBa0zIYSIqAF83et4Vb9zkDrcYQe0ucQizOiVpcl9y-MK8i-iduqU~BWnlc9W2xTw~mvGQi1hK6~dnX5~IPCKN9RjQ28dLKeIKX1i36Aj8pmA0wD8z2QxmsKGvKdO8Z~5wplq-oocFFUdCwEWttp1MRGOOsZo-sNGJgELG-d4h00R0Xv2EnOUC8mR2jGoomo9d1nLWvJ64bUZwcGFdjivFGCY9K84gPRiw6Z7oRrsY5iM6Fi-clGyUGjKMKXxSbAUkbsqawkudEYoXQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
         </div>
         <div class="col-3"> $650</div>
         <div class="col-3">
            <input type="number" value="01" class="quantity" min="01" max="20">
         </div>
         <div class="col-3">$650</div>
      </div>
      <div class="d-flex row">
         <div class="col-3">
            <img class="cartImg" src="https://s3-alpha-sig.figma.com/img/5d5c/2e52/50752d55f8b60f2aa2923183dadbc135?Expires=1691971200&Signature=EPKYh9JQuXUNDYSGyyRqxILOTnheD2pYSwMdPT5575XsEJFw1~TUBnyWixux2z4bJUx6H46V9ncjfE0uKgJZ5yyTnXporU-hAd34ncAVIW0KZU3obyqhlf15r9ODirdr6gSH5-1Qeai4xyGOTdHAjDnWWFqSaCqnwT422tlZHp7uAav9V0Jd7tgNFmR5EA0AHydY38xB0JPcLfAzcAV0ZmCtrsp~lTSpBGH9a03BmbTSV5rk1P6-0~OvO5VcbTMfSQ8B1mnPkYOSHBtaQRJdFK7BhPqvAAibQlWPv15~eO3RfPAGgR55UCyalILn6u1D1kuPUvz7YXyei2sd2jMswg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
         </div>
         <div class="col-3"> $550</div>
         <div class="col-3">
            <input type="number" value="02" class="quantity" min="01" max="20">
         </div>
         <div class="col-3">$1100</div>
      </div>
      <div class="d-flex justify-content-between my-5 mx-2">
         <button class="functionBtn" @click="goToHomePage">Return to shop</button>
         <button class="functionBtn" @click="updateCart">Update Cart</button>
      </div>

      <!-- Coupon  -->
      <div class="d-flex row justify-content-center align-item-center my-5" >
         <div class="col-12  d-flex flex-row coupon">
            <input type="text" placeholder="Coupon Code" class="couponInput">
            <button class="applyCouponBtn">Apply Coupon</button>
         </div>
        
      </div>
      <!-- Voucher -->
      <h3 class="mt-5 fw-bold" style="text-align:center">Voucher</h3>
        <div class="col-12 col-lg-6 d-flex flex-column voucher p-4 mt-2 " >
            <div class="fs-5 fw-bold mb-3">Cart Total</div>
            <div class="d-flex flex-row justify-content-between border-bottom p-2">
               <div>Subtotal:</div> <div>$1750</div>
            </div>
            <div class="d-flex flex-row justify-content-between border-bottom p-2">
               <div>Shipping:</div> <div>free</div>
            </div>
            <div class="d-flex flex-row justify-content-between  p-2">
               <div>Total:</div> <div>$1750</div>
            </div>
            <div class="processBtn mt-4" @click="goToCheckoutPage">Process to checkout</div>
      </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
   setup() {
      let router = useRouter();
      let goToHomePage = () => {
         router.push('/')
      };
      let goToCheckoutPage = () => {
         router.push("/checkout")
      }
      return { goToHomePage, goToCheckoutPage }
   }
}
</script>

<style scoped>
.coupon{
  margin-left: 50%;
}
   .CartView{
      margin-top: 70px;
      margin-left: 50px;
   }
.processBtn{
   padding: 10px 36px;
   text-align: center;
   background-color: #db4444;
   color:#fff;
   border-radius: 4px;
   margin-top: 30px;
   /* width: 400px; */
   margin: 0 auto;
   cursor: pointer;

}
.voucher{
   width: 420px;
   height: 350px;
   border: 1px solid #000;
   margin: 0 auto;
}
.couponInput{
   margin-right:5px;
   padding:8px 20px;
   width: 400px;
   /* margin: 0 auto; */
   background-color: none;
   border: 1px solid #000;
   font-size: 16px;
   line-height: 24px;
   outline: none;
   resize: none;

}
.applyCouponBtn{
   padding:8px 30px;
   background-color: #db4444;
   color:#fff;
   border: none;
   border-radius: 4px;
   cursor: pointer;
}
.functionBtn{
   border: 1px solid #aaa;
   border-radius: 4px;
   background: none;
   outline: none;
   padding: 12px 46px;
   cursor: pointer;
   transition:.3s ease all;

}
button:hover{
   background-color: #db4444;
   color:#fff;
}
.cartImg{
   object-fit: cover ;
   width: 50px;
   height: auto;
}
.quantity{
   width: 3rem!important;
   height: 2rem !important;
   border: 1px solid #000;
   padding: 5px;
   font-size:16px;
   line-height: 24px;
}
   #CartView{
      margin-top: 70px;
   }
      @media screen and ( max-width: 980px){
         .couponInput{
            margin-right:5px;
            padding:8px 20px;
            width: 250px;
            background-color: none;
            border: 1px solid #000;
            font-size: 16px;
            line-height: 24px;
            outline: none;
            resize: none;
}
      }
         .applyCouponBtn{
            padding:8px 30px;
            background-color: #db4444;
            color:#fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
}
   .coupon{
      margin: 0 auto;
   }
</style>