<template>
  <div class="story">
      <div class="d-flex  storyColumns">
        <!-- First Column -->
        <div class="d-flex flex-column col-12 col-lg-6 storyContainer">
          <div class="fw-bold storyHeader">
              Our Story
          </div>
          <div class="contentTxt">
                Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
          </div>
          <div class="mt-3">
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
          </div>
        </div>
        <!-- Second Column -->
        <div class="col-12 col-lg-6 storyImgContainer">
          <img class="storyImg" src="https://s3-alpha-sig.figma.com/img/fcc8/9aaa/7b85f8c1dcce81e71e2eb178be13bd4d?Expires=1691366400&Signature=dRE40bfWB-K2MjoWCMyMeKoHqEkdtfLAXqDoASG-VrdG~bTnG4EczM1z7fGAquWyz7i2iJl0Jo3ATChiJXjzve-6mI8uqg2IASKOoZye76CVyhfwTPK0c82Y4ka~jGVrcxwz8G2ZnLBExgMCrjcqPTCEyDV0NjnNphvyQoN9pWNojRqfKqDBR6hOSQiVTkrh6nSwmrOFC4K1tSIVZ1-y4wTmO5vV8qB49khqm28tRc3-aipTRSf~zn8SA7S5IOakKDdXaNRciC67dyBDyl8wop68gyHDel5baksVHvrDwmsmBvQ4ZopGnEVRuiEJfdMOqUlMc96RvbqSMUUp~TI6Ig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
        </div>
      </div>
  </div>
  <Activities></Activities>
  <LeadersProfile></LeadersProfile>
</template>

<script>
import LeadersProfile from '../components/LeadersProfile'
import Activities from '../components/Activities'
export default {
  components: {
    LeadersProfile, Activities },

}
</script>

<style>
.story{
  margin-top: 100px;
}
.storyContainer{
  width: 530px;
  margin-left: 40px;
  margin-top:70px;
}
.storyHeader{
  color: #000;
text-align: justify;
font-family: Inter;
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: 90px; /* 118.519% */
letter-spacing: 3.24px;
}
.contentTxt{
  font-size:16px;
  line-height:26px;
  font-weight: 400;
}
.storyImg{
  width: 680px;
  height: 470px;
  overflow: hidden;
  margin-left: 13px;
}
.storyImgContainer{
  position: relative;
}

@media screen and (max-width: 980px){
  .storyContainer{
    width: 440px;
  }
  .storyColumns{
    display: flex;
    flex-direction: column;
  }
  .storyImg{
    margin-top: 30px;
    width: 460px;
    height: 300px
  }
}

</style>