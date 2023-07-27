<template>
  <div class="topHeader col">
         <span class="advtext">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </span>
         <span><a href="#" class="shopNoti">ShopNow</a></span>
         <span class="dropdown">
            <span class="dropdown-toggle" data-bs-toggle="dropdown">
               English
            </span>
            <ul class="dropdown-menu">
               <li >
                  <a href="#" class="dropdown-item">English</a>
               </li>
               <li >
                  <a href="#" class="dropdown-item">Myanmar</a>
               </li>
            </ul>
         </span>
       
  </div>
 
</template>

<script>
export default {

}
</script>

<style scoped>
   .topHeader{
      background-color:#000;
      color:#fff;
      padding:10px;
   }
   
   .advtext{
      /* font-weight: 100; */
      margin-left:250px;
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px; 
      
   }
   .shopNoti{
      color:#fff;
      margin-left:2px;
   }
   .dropdown{
      font-size:14px;
      cursor:pointer;
      /* float: right; */
      margin-left:200px;

   }
   
   @media screen and (max-width :960px){
      .advtext{
         font-size:10px;
         margin:0;
      }
      .shopNow{
         font-size:12px;
      }
      .dropdown{
         margin-left:12px;
         /* float:right; */
      }
      .dropdown-toggle{
         font-size:12px;
      }
      .dropdown-item{
         font-size: 12px;
      }
   }
</style>