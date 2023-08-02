<template>
   <div class="mt-5">
         <div class="categoryCont">
            <div class="d-flex">
               <div class="block"></div> 
               <span class="ms-4" style="font-size: 16px; font-weight:600; line-height:20px;color:#DB4444">Categories</span>
            </div>
            <div class="d-flex ">
               <div class="browseCate mt-4">Browse By Category</div> 
               <div class="d-flex arrsCont mt-3">
                  <div class="leftCon"><i class="fa-solid fa-arrow-left lfArr"></i></div>
                  <div class="rightCon"><i class="fa-solid fa-arrow-right riArr"></i></div>
               </div>  
            </div>
         </div>
   </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.categoryCont{
   margin-left:-50px
}
   .block{
      width: 20px;
      height:40px;
      border-radius:5px;
      background-color: #DB4444;
      margin-left:80px;
   }
   .browseCate{
      font-size:30px;
      font-weight:  600;
      line-height: 48px;
      letter-spacing: 1.44px;
      /* margin-left: 80px; */

   }
   .arrsCont{
      position: absolute;
      right: 100px;
   }
   .leftCon, .rightCon{
      width:46px;
      height:46px;
      border-radius: 50%;
      background-color:#f5f5f5;
      position: relative;
      margin: 5px;
      cursor: pointer;
      transition: .5s all;
   }

   .leftCon:hover{
      transform: scale(1.1);
   
   }
   .rightCon:hover{
      transform: scale(1.1)
   }
   .lfArr, .riArr{
      position:absolute;
      top:15px;
      left: 15px;
   }
   
   @media screen and (max-width:980px){
      .categoryCont{
         margin-left: 10px;
      }
      .block{
         margin-left: 20px;
      }
      .browseCate{
         margin-left:20px;
      }
      .browseCate{
         font-size: 25px;
         line-height: 20px;
      }
      .arrsCont{
         right:20px;
         
      }
   }

</style>