<template>
  <div class="advContainer mt-5">
      <div class="categories">Categories</div>
      <div class="enhanceMusic">Enhance Your Music Experience</div>
      <div class="d-flex flex-row timeContainers">
         <div class="timeCon">
            <span class="nums">8</span>
            <span class="text">Days</span>
         </div>
         <div class="timeCon">
            <span class="nums" >23</span>
            <span class="text">Hours</span>
         </div>
         <div class="timeCon">
            <span class="nums">46</span>
            <span class="text">Minutes</span>
         </div>
         <div class="timeCon">
            <span class="nums">53</span>
            <span class="text">Seconds</span>
         </div>
      </div>
      <button class="buynowButton">Buy Now</button>
      <div class="backgroundBlur"></div>
         <img src="https://s3-alpha-sig.figma.com/img/3cc9/43ca/7e210f637fc0504b7d93cd207df744c2?Expires=1691366400&Signature=hsvDEm-iFMmofUJu1gwtiUk8CXZhowVuySUnw0s-BlLdMtvuX9N18c4fZrt5d2RfsFW6HfEi4l4RunBQ6ojBDZC1j759H21uFCeFbRzfr2q0fiyp87qUQRC5Fo~prEGwnop7KZOONaRybAdyHuWBunyTic364uT-VFNqZBWrPTV-gAZ6y5mlAen314uNhfkNKwGXBse0OmMdXRfx-D1XoYduZM3m6O1lRlHmaF0K85WPgcB4Z~YZ~7~H~k0J~LhSah-1PjO-lOFMdYTte3mOCv1xouYqOeTVhmyq45ieHZJN~~taiqgzU~AG1JsaoZ8UeAALyUBuv31kx0F0A~g7bg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" class="boomBox">
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
   .advContainer{
      position: relative;
      width:1000px;
      height:440px;
      background-color:#000;
      margin:0 auto;
   }
   .categories{
      position: absolute;
      top:60px;
      left:50px;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; color:#00ff66 
   }
   .enhanceMusic{
      width: 380px;
      font-family: Inter;
      color:#fff;
      font-size: 40px;
      font-style: normal;
      font-weight: 600;
      line-height: 60px; /* 125% */
      letter-spacing: 1.92px;
      position: absolute;
      top:90px;
      left: 50px;
   }
   .timeCon{
      display:flex;
      flex-direction: column;
      align-items: center ;
      justify-content: center;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin: 5px;
      background-color: #ffffff;
      
   }
   .timeContainers{
      position: absolute;
      bottom: 80px;
      left: 50px;
   }
   .nums{
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
   }
   .text{
      font-size: 10px;
      
   }

   .buynowButton{
      position: absolute;
      bottom: 10px;
      padding: 15px 45px;
      background-color: #00ff66;
      border: none;
      left: 50px;

   }
   .backgroundBlur{
      position: absolute;
      right:50px;
      width: 480px;
      height:476px;
      border-radius: 50%;
      border-radius: 504px;
      opacity: 0.30000001192092896;
      background: #D9D9D9;
      filter: blur(100px);
         }
     .boomBox{
         position: absolute;
         width: 500px;
         height: auto;
         right: 80px;
         bottom:5px;
         flex-shrink: 0;
         transform: scaleX(-1)
         }
   @media screen and (max-width: 980px){
      .advContainer{
         width: 450px;
         height: 280px;
      }
      .categories{
         font-size: 14px;
         top:40px;
         left:20px;
      }
      .enhanceMusic{
         width:250px;
         font-size: 20px;
         line-height: 45px;
         top:60px;
         left:20px;
      }
      .timeCon{
         width: 40px;
         height: 40px;
      }
      .timeContainers{
         bottom: 70px;
         left:15px
      }
      .nums{
         font-size: 13px;
      }
      .text{
         font-size: 7px;
         font-weight:500
      }
      .buynowButton{
         padding: 8px 20px;
         left: 20px;
      }
      .backgroundBlur{
         right: 20px;
         width:300px;
         height: 150px;
         top:50px
      }
      .boomBox{
         width: 250px;
         right:1px;
      }
   }
</style>