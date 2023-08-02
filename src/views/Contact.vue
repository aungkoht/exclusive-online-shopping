<template>
  <div class="mt-5">
    <div class="d-flex contactContainer">
        <div class="col-8 col-lg-4 d-flex flex-column justify-content-center">
          <div class="d-flex flex-column justify-content-center ">
              <div class="d-flex flex-row headCon ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="20" fill="#DB4444"/>
                    <path d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div class="headerTxt fw-bold ms-3 mt-2">Call To Us</div>
              </div>
              
              <div class="mt-2 bodyTxt">We are available 24/7, 7 days a week.</div>
              <div class="bodyTxt">Phone: +8801611112222</div>
          </div>

          <div class="d-flex flex-column mt-5 ">
              <div class="d-flex flex-row headCon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect width="40" height="40" rx="20" fill="#DB4444"/>
                        <path d="M10 13L20 20L30 13M10 27H30V13H10V27Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div class="fw-bold ms-3 mt-2">Write To Us</div>
              </div>
              <div class="bodyTxt mt-2">
                  Fill out our form and we will contact you within 24 hours.
              </div>
              <div class="bodyTxt">
                  Emails: customer@exclusive.com
              </div>
              <div class="bodyTxt">
                Emails: support@exclusive.com
              </div>
          </div>
      </div>

      <div class="col-12 col-lg-8 d-flex flex-column ">
        <div class="d-flex justify-content-center contactInputs">
          <div class="col-6 col-lg-4">
            <input type="text" placeholder="Your Name">
          </div>
          <div class="col-6 col-lg-4">
            <input type="email" placeholder="Your Email">
          </div>
          <div class="col-6 col-lg-4">
            <input type="phone" placeholder="Your Phone">
          </div>
        </div>
        <div class="mt-5 d-flex flex-column" style="position: relative">
            <textarea   cols="105" rows="10" placeholder="Your Message"></textarea>
            <button class="sendMessage">Send Message</button>
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
.headCon{
  margin-left: 35px;
}
.bodyTxt{
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  margin-left: 40px;
}
input{
  width: 255px;
  height: 50px;
  font-size: 16px;
  border: none;
  outline: none;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: #f5f5f5;
}
textarea{
  padding: 10px 10px;
  width:97%;
  height: 220px;
  background-color: #f5f5f5;
  border: none;
  outline: none;
  resize:none;
  

}
.sendMessage{
  position: absolute;
  right: 20px;
  bottom: 0px;
  padding: 16px 40px;
  background-color: #DB4444;
  color:#fafafa;
  border: none;
  border-radius: 4px;
  
}
  @media  screen and (max-width: 980px){
    .contactInputs{
      display: flex;
      flex-direction:column;
    }
    .contactContainer{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    input{
      margin-top: 30px;
      width: 400px;
      margin-left: 40px;
    }
  }
</style>