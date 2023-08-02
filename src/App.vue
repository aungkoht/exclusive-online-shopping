<template>
  <TopHeader></TopHeader>
  <nav class="mt-4">
    <div class="logo">
      <h4>Exclusive</h4>
    </div>
    <div class="routeContainer">
      <router-link class="route" to="/">Home</router-link> 
      <router-link class="route" to="/contact">Contact</router-link>
      <router-link class="route" to="/about"> About</router-link>
      <router-link class="route" to="/signup">Sign Up</router-link>
    </div>
    <div class="cartContainer">
    <div class="searchbox" >
      <input type="text" class="px-3" placeholder="What are you looking for?">
      <span><i class="fa-solid fa-magnifying-glass text-center mt-2 mx-4 search"></i>
      </span>
    </div>
    
    <span class="ms-2 fav" style="position: relative">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
   </span>
    <span class="ms-2 cart" @click="goToCart">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3 5H7L10 22H26" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
    <span class="profile ms-2 user " @click="goToAccountSetting">
      <i class="fa-solid fa-user"></i>
    </span>
  
    </div>
  </nav>
   <router-view/>
   <Footer></Footer>
 
</template>
<script>
import { defineComponent, DefineComponent } from 'vue';
import Footer from './components/Footer'
import TopHeader from "./components/TopHeader.vue"
import { useRouter } from 'vue-router';
export default defineComponent({
     components: {
          Footer,
          TopHeader,
  },
  setup() {
    const router = useRouter();
    let goToAccountSetting = () => {
      router.push('/account')
    }
    let goToCart = () => {
      router.push('/cart')
    }
    return { goToAccountSetting, goToCart }
  }
 
  })
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
}
 
nav{
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
}
.logo{
  margin-left: -100px;
}
.routeContainer .route:hover{
  color:#DB4444;
}
.profile{
  position:relative;
  width: 30px;
  height:30px;
  border: 2px solid #303030;
  border-radius: 50%;
}
.profile:hover{
  background-color: #db4444;
  border:2px solid #db4444;
}
.profile:hover .fa-user{
  color: #fff;
}
.fa-user{
  position: absolute;
  top: 5px;
  margin-left: 7px;
  font-size: 15px;
  color:#8e8b8b

  
}
.routeContainer .route{
  color:#000;
  font-size:16px;
  text-decoration: none;
  margin:10px;
}
.cartContainer{
  display:flex;
  flex-direction: row;
}
.searchbox{
  max-width:360px;
  display:flex;
  flex-direction:row;
  background-color:#f5f5f5f5;

}
input{
  border:none;
  width:200px;
  background-color:#f5f5f5f5;
  border-radius:6px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
}
nav .route.router-link-exact-active {
   color:#DB4444;
  }
   .search{
    cursor: pointer;
    transition: .3s all;
   }
  .fav, .cart, .user{
    cursor: pointer;
    transition: .3s all;
  }
   .fav:hover{
    transform: scale(.9);
   } 
   .cart:hover{
    transform: scale(.9)
   }
   .user:hover{
    transform:scale(.9)
   }
   .search:hover{
    transform: scale(.9)
   }
  
@media screen and (max-width: 960px){
  nav{
    display:flex;
    justify-content: space-between;
    margin:5px;
  }
  .logo{
    margin-left:35px;
  }
  .routeContainer{
    display:none;
  }
  .searchbox{
    width:50px;
    margin-right:130px;
    padding-right:25px;
    font-size:18px;
    
  }
  input{
    width:160px;
    font-size:9px;
  }
  .fav, .cart{
    width:30px;
    height:30px;
  
  }
  
  
}
</style>