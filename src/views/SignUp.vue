<template>
  <div class="mt-5 " v-if="showForm">
      <div class="row d-flex flex-row">
          <div class="col-12 col-lg-6 signUpImgCont">
              <img src="https://s3-alpha-sig.figma.com/img/75f3/94c0/a1c7dc5b68a42239311e510f54d8cd59?Expires=1691366400&Signature=T9-2aKDBfC8X97ELIxwjBz9wTLCRQNwR17sc6B7YpoqZJaoayEvlNhUJrCtBOfpJjuZysLNyKRJmTPwZko359EsPNlxc-lkkRVK8Xlag5OX90vAO-FAM5CSxMBB-kHzD3aBTku4MiI9vkWI9foK48glBAx5eTfqNI047sXgFxLM1FnlVyvdzZd7PtFIrwfaPBiqoJtJKxmlqhxWrGkKvEmQUM9t9I~HvkAqIF5IaFgcYrqt78Sbgt8-qtxdbIyQttEyY5MgikuZL502Tud0UEBUiRaFhRZDxBD69FUoNpNHBUtx9Wy2M79bd-RLGz5sFba1owfudep7nE-bPlJwCpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" class="signUpImg">
          </div>
          <div class="col-12 col-lg-6 d-flex flex-column formContainer">
              <div class="accHeader">Create an account</div>
              <div class="accBody">Enter your details below</div>
              <form action="">
                <input type="text" placeholder="Name">
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Password">
              </form>
              <div class="d-flex justify-content-center align-items-center">
                <button type="submit" class="createAccBtn">Create Account</button>
              </div>
              <div class="d-flex flex-row googleContainer">
                  <div class="google me-3">
                    <!-- Google LOGO -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                          <g clip-path="url(#clip0_969_3336)">
                          <path d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z" fill="#4285F4"/>
                          <path d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z" fill="#34A853"/>
                          <path d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z" fill="#FBBC04"/>
                          <path d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z" fill="#EA4335"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_969_3336">
                          <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                          </clipPath>
                          </defs>
                      </svg>
                  </div>
                  <div class="signupGoogle">Sign up with Google</div>
              </div>
              <div class="d-flex flex-row justify-content-center text-center questionsCon">
                <div>Already have an account?</div> <span class="login" @click="showForm =! showForm">Login</span>
              </div>
          </div>
      </div>
  </div>
  <div class="mt-5" v-else>
      <div class="row d-flex flex-row">
          <div class="col-12 col-lg-6 signUpImgCont">
              <img src="https://s3-alpha-sig.figma.com/img/75f3/94c0/a1c7dc5b68a42239311e510f54d8cd59?Expires=1691366400&Signature=T9-2aKDBfC8X97ELIxwjBz9wTLCRQNwR17sc6B7YpoqZJaoayEvlNhUJrCtBOfpJjuZysLNyKRJmTPwZko359EsPNlxc-lkkRVK8Xlag5OX90vAO-FAM5CSxMBB-kHzD3aBTku4MiI9vkWI9foK48glBAx5eTfqNI047sXgFxLM1FnlVyvdzZd7PtFIrwfaPBiqoJtJKxmlqhxWrGkKvEmQUM9t9I~HvkAqIF5IaFgcYrqt78Sbgt8-qtxdbIyQttEyY5MgikuZL502Tud0UEBUiRaFhRZDxBD69FUoNpNHBUtx9Wy2M79bd-RLGz5sFba1owfudep7nE-bPlJwCpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" class="signUpImg">
          </div>
          <div class="col-12 col-lg-6 d-flex flex-column formContainer">
              <div class="accHeader">Login to Exclusive</div>
              <div class="accBody">Enter your details below</div>
              <form action="">
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Password">
              </form>
             <div class="d-flex flex-row justify-content-between loginBtnContainer">
                <div>
                  <button type="submit" class="loginBtn">Login</button>
                </div>
                <div class="forgetPassword">Forget password?</div>
             </div>
              <div class="d-flex flex-row justify-content-center text-center questionsCon">
                <div >Do not have an account?</div> <span class="login" @click="showForm =! showForm">SignUp</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    let showForm = ref(true);

     return { showForm }
  }
 
}
</script>

<style scoped>
  .signUpImgCont{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #cbe4e8;
  }
  .signUpImg{
    padding-top: 75px;
    overflow: hidden;
  }
  .formContainer{
    padding-top: 60px;
  }
  .accHeader{
    font-size: 30px;
    font-family: inter;
    font-weight: 500;
    line-height: 30px;
    padding-left: 120px;

  }
  .accBody{
    font-family: poppins;
    font-size: 16px;
    font-weight: 400;
    padding-top: 15px;
    padding-left: 120px
  }
  form{
    margin: 0 auto;
  }

  input{
    font-size: 16px;
    line-height:24px;
    display: block;
    width: 370px;
    height: 40px;
    padding: 10px 0px;
    margin: 20px;
    border: none;
    border-bottom: 1px solid #aaa;
    border-radius:0px;
    background: none;
    outline: none;
    caret-color: #aaa;
  
  }
  .createAccBtn{
    cursor: pointer;
    padding: 16px 122px;
    border: none;
    background-color: #DB4444;
    color: #fafafa;
  }
 
  .googleContainer{
    margin: 0 auto;
    border: 1px solid #aaa;
    padding:16px 85px;
    margin-top: 20px;
    cursor: pointer;

  }
  .questionsCon{
    margin-top: 30px;
    opacity: 0.6
  }
  .login{
    margin-left: 10px;
    color:#0d0d0d;
    border-bottom: 1px solid #000;
    cursor: pointer;

  }
  .login:hover{
    color:#DB4444;
    border-bottom: 1px solid #DB4444;
  }
  .loginBtnContainer{
    width: 370px;
    margin: 0 auto;
  }
  .loginBtn{
    padding:12px 46px;
    background-color: #Db4444;
    color: #fafafa;
    border: none;
    border-radius: 4px;
  }
  .forgetPassword{
    color: #DB4444;
    display: flex;
    align-items: center;
  }
  @media screen and ( max-width: 980px){
    .accHeader{
      padding-left: 55px;
    }
    .accBody{
      padding-left: 55px;
      padding-top: 10px;
      
    }
  }
</style>