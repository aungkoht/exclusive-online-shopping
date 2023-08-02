<template>
  <div class="pagenotFound">
      <div class="d-flex flex-column txtContainer">
         <div class="headerTxt">404 Not Found</div>
         <div class="bodyTxt">You visited page not found. You must go home page.           
         </div>
         <button @click="backToHomepage" class="homePageBtn">Back to home page</button>
      </div>
  </div>
</template>

<script >
import { useRouter } from 'vue-router';
export default {
   setup() {
      const router = useRouter();
      let backToHomepage = () => {
         router.push('/')
      }
   return{ backToHomepage }
  }
}
</script>

<style scoped>
.pagenotFound{
   margin-top:100px;
}
.txtContainer{
   justify-content: center;
   align-items: center;
}
   .headerTxt{

      font-family: Inter;
      font-size: 90px;
      font-style: normal;
      font-weight: 500;
      line-height: 115px; /* 104.545% */
      letter-spacing: 3.3px;
   }
   .bodyTxt{
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 34px; 
   }
   .homePageBtn{
      padding: 16px 48px;
      background-color: #db4444;
      color: #fafafa;
      border: none;
      margin-top: 60px;
   }
   @media screen and (max-width: 980px){
      .headerTxt{
         font-size: 50px;
         letter-spacing: 2px
      }
   }
</style>