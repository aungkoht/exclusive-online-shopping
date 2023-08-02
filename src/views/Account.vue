<template>
  <div class="account">
      <div class="currentUserName">
         <span>Welcome!</span> <span style="color: #db4444; ">{{ firstName }} {{ lastName }}</span>
      </div>
      <div class="d-flex">
         <!-- Column1 -->
         <div class="col-6 col-lg-3  d-flex flex-column">
            <div class="linksCont">
               <div class="headerTxt">Manage My Account</div>
               <div class="bodyTxt">My Profile</div>
               <div class="bodyTxt">Address Book</div>
               <div class="bodyTxt">My Payment Options</div>
            </div>
            <div class="linksCont mt-3">
               <div class="headerTxt">My Orders</div>
               <div class="bodyTxt">My returns</div>
               <div class="bodyTxt">My Cancellations</div>
            </div>
           <div class="linksCont mt-3">
                <div class="headerTxt">
                  My Wishlist
               </div>
           </div>
         </div>
         <!-- Column2 -->
         <div class="col-6 col-lg-9  d-flex flex-column mt-5 border p-4 shadow">

            <div class="headerTxt text-danger col-12 ">
                <div v-if="showEdit">
                     <span><i class="fa-regular fa-pen-to-square "></i>
               </span>
               <span class="ms-2 edit" @click="showEdit =! showEdit" >  Edit Your Profile</span>
                </div>

               <div v-else>
                  <span><i class="fa-solid fa-arrow-up-from-bracket"></i></span>
                  <span class="ms-2 edit" @click="showEdit =! showEdit" >  Update Your Profile</span>
               </div>
              
            </div>
         <!-- Show My Profile -->
               <div  v-if="showEdit">
                     <div class="d-flex userName">
                     <div class="col-lg-6 ">
                        <!-- <div> -->
                              <div class="largeTxt mt-4">First Name</div>
                              <div class="smallTxt mt-3">{{ firstName}}</div>
                        <!-- </div> -->
                     </div>
                     <div class="  col-lg-6">
                              <div class="largeTxt mt-4">Last Name</div>
                              <div class="smallTxt mt-3">{{ lastName}}</div>
                     </div>
                  </div>
                  <div class="d-flex userName">
                     <div class="col-lg-6 ">
                        <!-- <div> -->
                              <div class="largeTxt mt-4">Email</div>
                              <div class="smallTxt mt-3">{{ email}}</div>
                        <!-- </div> -->
                     </div>
                     <div class="  col-lg-6">
                              <div class="largeTxt mt-4">Address</div>
                              <div class="smallTxt mt-3">{{ address}}</div>
                     </div>
                  </div>

               </div>
          <!-- Edit My Profile -->
               <div v-else>
                   <div class="d-flex userName">
                     <div class="col-lg-6 ">
                        <!-- <div> -->
                              <div class="largeTxt mt-4">First Name</div>
                              <input type="text" class="editInputs"  v-model="firstName">
                        <!-- </div> -->
                     </div>
                     <div class="  col-lg-6">
                              <div class="largeTxt mt-4">Last Name</div>
                              <input type="text" class="editInputs" v-model="lastName">
                     </div>
                  </div>
                  <div class="d-flex userName">
                     <div class="col-lg-6 ">
                        <!-- <div> -->
                              <div class="largeTxt mt-4">Email</div>
                              <input type="email" class="editInputs" v-model="email">
                        <!-- </div> -->
                     </div>
                     <div class="  col-lg-6">
                              <div class="largeTxt mt-4">Address</div>
                              <input type="text" class="editInputs" v-model="address">
                     </div>
                  </div>

               </div>
            <div class="d-flex flex-column">
                  <div class="mt-5 mb-3">Password Change</div>
                  <input type="text" class="inputTxt" placeholder="Current Password">
                  <input type="text" class="inputTxt" placeholder="New Password">
                  <input type="text" class="inputTxt" placeholder="Confirm New Password">
            </div>
            <div class=" mt-4 ">
               <button class="float-end saveBtn">Save Changes</button>
               <button class="float-end cancelBtn">Cancel</button>
            </div>
         </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
   setup() {
      let showEdit = ref(true);
      let firstName = ref("Md");
      let lastName = ref("Rimel")
      let email = ref("rimel1111@gmail.com");
      let address = ref("Kingston, 5236, United State");

      return { showEdit, firstName, lastName, email, address };
   }
   
}
</script>

<style scoped>
.editInputs{
   width: 300px;
   font-size: 16px;
   padding: 10px 15px;
}
.currentUserName{
   position: absolute;
   margin-right: 30px;
   top: -20px;
   right: 20px;
}
.cancelBtn{
   border: none;
   background-color: #fafafa;
   padding: 14px 48px;
}
   .saveBtn{
      border: none;
      padding: 14px 48px;
      background-color: #db4444;
      color:#f5f5f5;
   }
   .inputTxt{
      padding: 10px 15px;
      font-size: 14px;
      width: 780px;
      height: 50px;
      margin: 10px;
      outline: none;

   }
   .edit{
      cursor: pointer;
   }
   .edit:hover{
      opacity: .7
   }
.smallTxt{
    width: 330px;
    height: 50px;
    background-color: #f5f5f5;
   opacity: .5;
   
}
.account{
   margin-top: 100px;
   position: relative;
}
   .linksCont{
      margin-left: 45px;
   }
  
   .headerTxt{
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 34px;
   }
   .bodyTxt{
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px; 
      opacity: .6;
      transition: .4s all;
      margin-left: 30px;
   }
   .bodyTxt:hover{
      cursor: pointer;
      color: #DB4444;
      opacity: 1;
      margin-left: 35px;

   }
   .smallTxt{
      padding: 10px 15px;
   }
   @media screen and (max-width:980px){
       .userName{
         display:flex;
         flex-direction: column;
   }
     .linksCont{
      margin-left: 45px;
     }
     .headerTxt{
         font-size: 14px;
     }
     .bodyTxt{
      font-size: 12px;
     }
     .largeTxt{
      font-size: 14px;
     }
     .smallTxt{
      padding: 5px 10px;
      font-size: 12px;
      width: 200px;
      height:40px;
     }
     .inputTxt{
      width: 200px;
      height: 40px;

     }
     .saveBtn{
      padding: 10px 20px;
      font-size: 14px;
      /* margin-left: -20px */
     }
     .cancelBtn{
      padding: 10px 20px;
      text-align: center;
     }
     .editInputs{
      width: 210px;
      padding: 7px 18px;
     }
   }
</style>