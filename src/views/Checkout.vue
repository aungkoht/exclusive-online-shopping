<template>
   <div class="checkout">
      <h4 class="my-4 bill">Billing Details</h4>
      <div class="d-flex billingDetail">
         <div class="col-12 col-lg-6  d-flex flex-column ">
            <div class="d-flex flex-column p-2 my-2">
               <div class="label">First Name</div>
               <input type="text" class="inputBox">
            </div>
            <div class="d-flex flex-column p-2 my-2">
               <div class="label">Company Name</div>
               <input type="text" class="inputBox">
            </div>
            <div class="d-flex flex-column p-2 my-2">
               <div class="label">Street Address Name</div>
               <input type="text" class="inputBox">
            </div>
            <div class="d-flex flex-column p-2 my-2">
               <div class="label">Apartment, floor, etc(optional)</div>
               <input type="text" class="inputBox">
            </div>
            <div class="d-flex flex-column p-2 my-2">
               <div class="label">Town, City</div>
               <input type="text" class="inputBox">
            </div>
            <div class="d-flex flex-column p-2 my-2">
               <div class="label">Email Address</div>
               <input type="email" class="inputBox">
            </div>
            <div class="d-flex flex-row my-2">
               <div>
                  <input type="checkbox" class="checkbox mx-2" style="width:16px">
                  <span class="labelTxt">Save this information for faster check-out next time</span>
               </div>
            </div>
         </div>
         <div class="col-12 col-lg-6">
            <div class="d-flex flex-column p-2 my-2">
              <div class="d-flex flex-row my-2">
                   <img class="checkoutImg" src="https://s3-alpha-sig.figma.com/img/5d5c/2e52/50752d55f8b60f2aa2923183dadbc135?Expires=1691971200&Signature=EPKYh9JQuXUNDYSGyyRqxILOTnheD2pYSwMdPT5575XsEJFw1~TUBnyWixux2z4bJUx6H46V9ncjfE0uKgJZ5yyTnXporU-hAd34ncAVIW0KZU3obyqhlf15r9ODirdr6gSH5-1Qeai4xyGOTdHAjDnWWFqSaCqnwT422tlZHp7uAav9V0Jd7tgNFmR5EA0AHydY38xB0JPcLfAzcAV0ZmCtrsp~lTSpBGH9a03BmbTSV5rk1P6-0~OvO5VcbTMfSQ8B1mnPkYOSHBtaQRJdFK7BhPqvAAibQlWPv15~eO3RfPAGgR55UCyalILn6u1D1kuPUvz7YXyei2sd2jMswg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
                   <span class="mt-2 mx-4">LCD Monitor</span>
                   <div class="mt-2 float-end" style="margin-left:155px">$650</div>
              </div>
              <div class="d-flex flex-row my-2">
                   <img class="checkoutImg" src="https://s3-alpha-sig.figma.com/img/5e63/4682/db5174aff99bb9337d2dc9598a0b44e4?Expires=1691971200&Signature=TCWsjDsliTiGVtXTdB7LK~oJfRXq3a7HNior7Qw2tMRUmX9K1pKpC-vo2bf98PoasDQtgZVBa0zIYSIqAF83et4Vb9zkDrcYQe0ucQizOiVpcl9y-MK8i-iduqU~BWnlc9W2xTw~mvGQi1hK6~dnX5~IPCKN9RjQ28dLKeIKX1i36Aj8pmA0wD8z2QxmsKGvKdO8Z~5wplq-oocFFUdCwEWttp1MRGOOsZo-sNGJgELG-d4h00R0Xv2EnOUC8mR2jGoomo9d1nLWvJ64bUZwcGFdjivFGCY9K84gPRiw6Z7oRrsY5iM6Fi-clGyUGjKMKXxSbAUkbsqawkudEYoXQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
                   <span class="mt-2 mx-4">H1 Gamepad</span>
                   <div class="mt-2 float-end" style="margin-left:150px">$1100</div>
              </div>
              <div class="d-flex flex-row border-bottom my-2 py-2 ">
                  <div>Subtotal:</div>
                  <div style="margin-left:270px">$1750</div>
              </div>
              <div class="d-flex flex-row border-bottom my-2 py-2 ">
                  <div>Shipping:</div>
                  <div style="margin-left:270px">free</div>
              </div>
              <div class="d-flex flex-row my-2 py-2 ">
                  <div>Total:</div>
                  <div style="margin-left:295px">$1750</div>
              </div>
              <div class="d-flex flex-row my-2 ">
                 <div>
                      <input type="radio" style="width:16px; height:16px;"> Bank
                 </div>
                 <div class="payments">
                     <img class="checkoutImg " src="https://s3-alpha-sig.figma.com/img/bacb/ff99/a8fc8e50822cb2d2d168e5d0e8bf7ea6?Expires=1691971200&Signature=iCFHjgz1VzNGH3oTbvo1NBd3Gob9QUFQa1Nf3qMzqKn-X4fK-Hcz3VaWmTJUqiLVbUclklfxltt7wbbIcWlaFrraXRFKG6rPi7nxQfoDAdN8Q1armc7u8YiF-Y9cFgUYe2qFm2ZntiiefKgB1UVPW4203125zkhSjC21uqWwYe372Yg2nU-s1PiLvucjlasnXf62nsOw-gaVtbY5vwgVB~FGlT4Trlqrllqj4v~ou-ZFXpsYNLzZZEUDaEx41eJA~wYnHq-LU4MI0CtAZFnWbzJmF4K-X-mELofcY0W4iAnUG6yMYCRxeOGlB3XQHmJ8oLgvmvugIT6p-6P1ze5y4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
                     <img class="checkoutImg ms-1" src="https://s3-alpha-sig.figma.com/img/cfb0/a6ee/01b240273b40dab07f8246ef98aed88a?Expires=1691971200&Signature=CWe5nLMyUOWCSQ4mUZG~TLeowW6L08tQStHvMDbJCpL6IA6LCE43diYIN1IKiELAOK8Z1udDzKZWM1K2wfPCrUhrgQeNTGFM99IDW8oHiGRSZpHgUFWuNFFpn6YTk3JkrOdbBdzkhsViWz5xpFiKAmCQWbAvBtM9tmedfhxGUCnuWKJoMTL8FL8iEDCpYOsCOYhI5qAFCVhmbvYdlw6KLbCpx1YTJsMlc88di4g1WKErl6kYwWZNezxYqFiFtEEaTW7gKX6eau8sDdOf7IiWSHdGiG-sn9ny0pk8bKk51k76txicNPrntnfPlMwrl1S4KgL1cJ~1JA7VV-3uLlVOPA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
                     <img src="https://s3-alpha-sig.figma.com/img/6eef/b61d/27c754abac218d25d8ea4360de61f8e8?Expires=1691971200&Signature=qur4zf8teHWzRvslBVI3nAoDB48zASeCHBkiEIKnshb7W8fa0BKkAzqXD-BU6GTb7~7e~y8au7ie6EnX26wTbj20s3ieTyyo-~BiOo3i4rnpT8TKMdxknyZXHKbMmDs0MqxcNsRNbOKsMPbnG63K8Rg6AqrnpqXeNgBHJp-PLM-gPRybOOPTHIxaqqqQ8AIR9LnTxCF5KhhQKcBXLklyNLfC1HEILp5mulMbrBHgLeXq7qeepGRNKex77-kpLcSh4hUqs4wnfGlpTIE~zse2r0chbMvKEHGakiHO1-WngXIt-RUJjAwNJoZECT8HjbqSkAZJyjjK0GW8aul~u-0msQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" class="checkoutImg ms-1" alt="">
                     <img src="https://s3-alpha-sig.figma.com/img/b28e/31b9/c88d0c9b038b82deeb0523d82cffe267?Expires=1691971200&Signature=EQ6dDc-xgKa3NQCHuTCdYa1wH7ICsVNpBV2f6Z-QJziHMb4qKqVVvjCz4LjEQczaBMNV-QCKXe2e4f6nz~vH~hMng-3h6JGI-bZ~iqhKasyuHyFyXBeJK~v7h-AeTIOCNxrXJdH-hft5Ll1jFKqCA1IjqPetsp9xMU-u19GuM5WvSWKZwibBvgCUbZf~sr1F4rYORgfqDk43fPhHrjDdbS4RVc1q0M3kf6dwI-SBCUiVHe7no-toGfQ74D9onLaBHNuM554ESCumzq2UKgyu7a298yuVRoknXEGZ7g0cQ73SfGZ3dFPIXU2ZlDVOONXnwoAL8LFvPZkx7U3GjvSCSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" class="checkoutImg ms-1" alt="">
                 </div>
              </div>
               <div class="d-flex flex-row my-2 ">
                 <div>
                      <input type="radio" style="width:16px; height:16px;"> Cash on delivery
                 </div>
               </div>
               <div class="d-flex flex-row my-4">
                  <input type="text" placeholder="Coupon Code" class="couponCode me-2">
                  <button class="applyCoupon">Apply Coupon</button>
               </div>
               <div class="d-flex flex-row my-4">
                  <button class="backCart" @click="backToCartPage">See My Cart</button>
                  <button class="placeOrder ms-2">Place Order</button>
               </div>
            </div>
         </div>

      </div>
   </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
   setup() {
      let router = useRouter();
      let backToCartPage = () => {
         router.push('/cart')
      };
      return { backToCartPage };
   }
}
</script>

<style scoped>
.backCart{
   background-color:#fff;
   border: 1px solid #000;
   border-radius: 4px;
   padding: 10px 30px;
   transition: .2s all;
}
.backCart:hover{
   background-color: #e76a6a;
   color:#fff;
}
.placeOrder{
   padding: 10px 30px;
   border: none;
   border-radius: 4px;
   background-color: #db4444;
   color:#fff;
}
.applyCoupon{
   padding: 5px 25px;
   background-color: #db4444;
   border: none;
   color:#fff;
   cursor: pointer;
   border-radius: 4px;
}
.couponCode{
   border: 1px solid #000;
   border-radius: 4px;
   outline:none!important ;
   padding: 5px 15px;
   height: auto;
   font-size: 16px;
   width: 220px;
}
.payments{
   margin-left: 150px;
}
.checkoutImg{
   width: 40px;
}
.labelTxt{
   font-size: 16px;
}

.bill{
   font-family:"inter";
   letter-spacing: 1.3px;
   font-size: 32px;
   font-weight: 500;
}
   .checkout{
      margin-top: 70px;
      margin-left: 40px;
   }
   .checkoutTxt{
      font-size: 14px;
      margin:0;
   }
   .label{
      font-size: 16px;
      font-weight: 400;
      line-height: 24px; 
      opacity: 0.4;
   }
   .inputBox{
      width: 450px;
      height: 45px;
      border-radius:4px;
      background-color: #f5f5f5;
      padding: 10px;
      font-size: 16px;
      outline: none;
      resize: none;
      caret-color: #aaa;
   }
   @media screen and (max-width:980px){
      .billingDetail{
         flex-direction: column;
      }
      .labelTxt{
         font-size: 12px;
      }
   }

</style>