<template>
  <section>
      <div class="d-flex flex-row bodyContainer">
         <div class="col-lg-4">
            <div style="width:20px; height:40px; border-radius:5px;background-color:#DB4444"> 
               <span class="ms-5 today">Today's</span>
            </div>
            <div class="mt-5 flashSales">Flash Sales</div>
         </div>
         <div class="col-lg-4"> 
               <div class="mt-5 ">
                  <span class="ms-3 time">Days</span><span class="ms-4 time">Hours</span><span class="ms-4 time">Minutes</span><span class="ms-3 time">Seconds</span>
               </div> 
               <div class=" mt-2">
                   <span class="timeInNumber ms-3">03</span> <span class="timeInNumber ms-3">23</span> <span class="timeInNumber ms-3">56</span> <span class="timeInNumber ms-3">47</span>
               </div>
         </div>
         <div class="col-lg-4 arrowsContainer">
            <div class="d-flex float-end ">
               <div><i class="fa-solid fa-arrow-left me-3"></i></div>
               <div><i class="fa-solid fa-arrow-right "></i></div>
            </div>
         </div>
      </div>
  </section>
</template>

<script >
export default {

}
</script>

<style scoped>
   .bodyContainer{
      margin-left:25px;
      margin-top: 100px;
   }
   .today{
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; 
      color:#DB4444;
   }
   .flashSales{
      font-family: Inter;
      font-size: 30px;
      font-style: normal;
      font-weight: 600;
      line-height: 48px; /* 133.333% */
      letter-spacing: 1.44px;
   }
   .time{
      font-size:12px;
      line-height: 16px;
   }
   .timeInNumber{
      font-size: 34px;
      font-weight: 700
   }
   .arrowsContainer{
      margin-top: 80px
   }
   
   .fa-arrow-left{
      font-size:larger;
      position: absolute;
      right:150px;
      cursor:pointer;   
      transition:.3s all;
   
   }
   .fa-arrow-right{
      font-size:larger;
      position:absolute;  
      right:100px;
      cursor:pointer;
       transition:.3s all;
      
   }
   .fa-arrow-left:hover{
      color:#E07575;
      font-size:24px;
   }
   .fa-arrow-right:hover{
      color:#E07575;
      font-size:24px;
   }
   
   @media screen and (max-width: 980px){
      .bodyContainer{
         margin-left:20px;
      }
      .flashSales{
         font-size:23px;
      }
      .fa-arrow-left{
         right:50px;
      }
      .fa-arrow-right{
         right:20px;
      }
      .arrowsContainer{
         margin-top:15px;
      }
   }
</style>