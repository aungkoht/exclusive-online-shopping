<template>
   <section>              
        <div class="cateSec mt-3">
                <div class="container ">
                <div class=" d-flex row">
                    <div class=" row categories col-lg-3 col-sm-6 col-md-8"  >
                        <div class="mt-4 ">
                            <ul class="ms-3">
                                <li >Woman's Fashion <i class="fa-solid fa-angle-right ms-4"></i></li> 
                            </ul>
                            <ul class="ms-3">
                                <li >Men's Fashion   <i class="fa-solid fa-angle-right ms-4"></i> </li>
                            </ul>
                            <ul class="ms-3">
                                <li >Electronic</li>
                            </ul>
                            <ul class="ms-3">
                                <li >Home & Lifestyle</li>
                            </ul>
                            <ul class="ms-3">
                                <li >Medicine</li>
                            </ul>
                            <ul class="ms-3">
                                <li >Sports & Outdoor</li>
                            </ul>
                            <ul class="ms-3">
                                <li >Baby's & Toys</li>
                            </ul>
                            <ul class="ms-3">
                                <li >Groceries & Pets</li>
                            </ul>
                            <ul class="ms-3">
                                <li >Health & Beauty</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-9 sliderContainer">
                            <div class="slider ms-2 mt-4">
                                
                                <div class="d-flex applelogoAndText">
                                <div>
                                        <i class="fa-brands fa-apple" style="color: #fcfcfc;"></i>
                                </div>
                                <div class="text-center text-white ms-3 series">
                                        iPhone 14 Series
                                </div>
                                </div>
                                <div class="sliderText">
                                    Up to 10% off Voucher
                                </div>
                                <div class="text-light shopNow">
                                    Shop Now <i class="fa-solid fa-arrow-right " style="color: #ffffff;"></i>
                                </div>
                                <div>
                                    <img src="../assets/7215f42e5883a64157f0aa3a4d1a866a.jpeg" alt="" class="iph14promax">
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
   </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    .cateSec{
        border-top:1px solid #aaa;
    }
    ul li{
        list-style:none;
        font-size: 16px;
        font-weight:400;
        line-height:24px;
        cursor:pointer;
        transition: .5s all;
    }
    ul li:hover{
        transform: translateX(7px)
    }
    .categories{
        border-right: 1px solid #aaa;
    }
    .sliderContainer{
        margin-left:20px;
    }
    .slider{
        width:780px;
        height:344px;
        background-color:#000;
        position:relative;
    }
    .fa-apple{
        font-size:40px;
    }
    .series{
        font-size:13px;
        font-weight:200;
        padding:10px

    }
    .applelogoAndText{
        position:absolute;
        margin-top:50px;
        margin-left:60px;
        
    }
    .sliderText{
        width:300px;
        font-size:48px;
        font-weight:600;
        font-family:Inter;
        line-height:60px;
        letter-spacing: 1.92;
        color:#fff;
        position:absolute;
        top:110px;
        left:60px
    }
    .iph14promax{
        width:496px;
        height:344px;
        position:absolute;
        right:-10%;
    }
    .shopNow{
        font-size: 16px;
        font-weight:300;
        position:absolute;
        bottom: 60px;
        left:70px;
        text-decoration: underline;
        cursor:pointer;
    }
    @media screen and (max-width:960px){
        .slider{
            width:450px;
            height:250px;
        }
        .applelogoAndText{
            margin-top:30px;
            margin-left:30px
        }
        .sliderContainer{
            margin-left:0;
        }
        .sliderText{
            font-size:32px;
            top:80px;
            left:30px
        }
        .shopNow{
            bottom:10px;
            left:30px
        }
        .iph14promax{
            height:250px;
            width:210px;
            right:-3%;
            overflow:hidden;
        }
    }
</style>