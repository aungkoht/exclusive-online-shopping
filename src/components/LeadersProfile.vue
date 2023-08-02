<template>
  <div class="leaders">
         <div class="d-flex justify-content-center leaderCards">
            <div class="card col-6 col-lg-4 leaderCard ">
               <div class="card-header">
                  <img class="profileImg text-center" src="https://s3-alpha-sig.figma.com/img/0881/49fd/5afc043392ee3cbb529f429b3e2098d3?Expires=1691366400&Signature=YwMZMV8C~oLJLXBQv8eamkPgD3-F-xaPXWFc4WGS2kkQTcfGUw9df4foR4uzpjdqd-UPD~-ft5K4Km7mV7HZCUjIyOSK-CmqY56QZQGx6phsEe8DR6gteUFUsNVNG~X4I5btLHuF37XSFIARKpRfQUgJwm35i9K34qlJjSpDxtSwMFmPn6StpbnXsxkcMkFEWQ57WOWaNOMaJu1os1i52SpRqEf5kjPcqfNeVNUlrK7dtZ1sYhY4W5xs0OKNeydx-9-trqjWdjSqmrUizLvJOvZlhK5B21BoP8wf9EaVY7KEKY2Wca-2FMv6O9GbPMDUO6CPw7D0DaXaFppEq7Mdog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
               </div>
               <div class="body d-flex flex-column ">
                  <div class="name">Tom Cruise</div>
                  <div class="position">Founder & Chairman</div>
               </div>
               <div class="d-flex flex-row mt-2">
                     <i class="fa-brands fa-twitter me-3 twitter"></i>
                     <i class="fa-brands fa-instagram me-3 instagram"></i>
                     <i class="fa-brands fa-linkedin-in linkedin"></i>
               </div>
            </div>
            <div class="card col-6 col-lg-4 leaderCard ">
               <div class="card-header">
                  <img class="profileImg text-center" style="object-fit:cover" src="https://s3-alpha-sig.figma.com/img/8438/eab9/a2fe88af0272adecd83422d0cb7e20d7?Expires=1691366400&Signature=LGsTQiWFyQMXDMRdtvJcl9ZbIhgvePymoxsK84avNhNEGI-5-f4W3PI9S-WEBosyCVB8ySc~F9KIcGbS48EjTRSYF3hSJSWjUESnlzFy2hl9QjPTnZgsFauZc1QcJxUac~zsD~R3Az6-y9Xv-NgzMQhkW8Ci84LY~3zlwddqpDJbmW3rDJwu5cTQK7rmY8dM~30WWJ1HLaFkabGhl12dYWfSFPECOJK48HFXUUwilArZqhwEph~cMuIhUQf5t3ZDmR3qTjLN-ceFL7AyB2c9DMRLWrWp9nDS1WNlPuBBjGLlNs90C~rXUZyDPrs~nR4rRMTS3i5RUQADvn2PUaFmeQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
               </div>
               <div class="body d-flex flex-column ">
                  <div class="name">Emma Watson</div>
                  <div class="position">Managing Director</div>
               </div>
               <div class="d-flex flex-row mt-2">
                     <i class="fa-brands fa-twitter me-3 twitter"></i>
                     <i class="fa-brands fa-instagram me-3 instagram"></i>
                     <i class="fa-brands fa-linkedin-in linkedin"></i>
               </div>
            </div>
            <div class="card col-6 col-lg-4 leaderCard ">
               <div class="card-header">
                  <img class="profileImg text-center"  src="https://s3-alpha-sig.figma.com/img/ede4/8f2b/5df8103b281240ce5bafe5dd7d215ab8?Expires=1691366400&Signature=ZhDuUJyjJ1aNCsKK3opALL8jHxJ1YgyavKmB4WXMXn61udjoRvAp1bgN1RJme9Ak1L8BKd7P4JG-yjfYWJlxBbmWDaNmMSh3n8CPn~fAmh0M0uJmWV-6mCTDzljCBG1Ls-EcFFvD3YPL802OtAaKp1KUxpEWuzwrlaJZEbWC9CWJN~iJf9lX77W9xEPa-jCK6nxTFbqng8h6CMSu1HG5lfiG5eZK-UKlP1LvHFnpThu1j0HT7QUfMioIeBdcVZLvq1Yg0elVwjEpKGPfS9lzG32GKzur5aRPYtdUB~a2UCTe94r1f3qMpqROKc7HMJnxh80tIcuwZPU5pSVS5e8H0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
               </div>
               <div class="body d-flex flex-column ">
                  <div class="name">Will Smith</div>
                  <div class="position">Product Designer</div>
               </div>
               <div class="d-flex flex-row mt-2">
                     <i class="fa-brands fa-twitter me-3 twitter"></i>
                     <i class="fa-brands fa-instagram me-3 instagram"></i>
                     <i class="fa-brands fa-linkedin-in linkedin"></i>
               </div>
            </div>
           
         </div>
  </div>
 
   <Services></Services>

</template>

<script>
import Services from './Services'
export default {
  components: { Services },

}
</script>

<style scoped>

      .leaders{
         margin-top: 60px;
      }
      .card{
         width: 300px;
         margin: 30px;
         border:none;
      }
      .card:hover{
         transform: scale(1)
      }
      .card-body{
         border:none;
      }
      .name{
         font-family: Inter;
         font-size: 26px;
         font-style: normal;
         font-weight: 500;
         line-height: 30px; /* 93.75% */
         letter-spacing: 1.28px;
      }
      .position{
         font-family: Poppins;
         font-size: 14px;
         font-style: normal;
         font-weight: 400;
         line-height: 32px; 

      }
      .profileImg{
         width:230px;
         height:391px;
      }
      .instagram,.twitter, .linkedin{
         cursor: pointer;
         transition: .3s all;
      }
      .instagram:hover,.twitter:hover ,.linkedin:hover{
         transform: scale(1.1);
      }
      @media screen and (max-width:980px){
         .leaderCards{
            display: flex;
            flex-direction: column;
         }
         .card{
            margin: 0 auto;
         }
      }
</style>