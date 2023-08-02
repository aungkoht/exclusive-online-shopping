<template>
  <HeadSection></HeadSection>
   <BodySection></BodySection>
   <FlashSalesItems></FlashSalesItems>
   <Categories></Categories>
   <AllCategories></AllCategories>
   <BestSellingProducts></BestSellingProducts>
   <BoomBoxAdv></BoomBoxAdv>
   <OurProducts></OurProducts>
   <NewArrival></NewArrival>
   <Services></Services>
</template>

<script>
import Services from '../components/Services'
import NewArrival from '../components/NewArrival'
import OurProducts from '../components/OurProducts'
import BoomBoxAdv from '../components/BoomBoxAdv'
import BestSellingProducts from '../components/BestSellingProducts'
import AllCategories from '../components/AllCategories'
import Categories from '../components/Categories'
import FlashSalesItems from '../components/FlashSalesItems'
import BodySection from '../components/BodySection'
import HeadSection from '../components/HeadSection'
export default {
  components: {
    Services,
    NewArrival,
    OurProducts,
    BoomBoxAdv,
    BestSellingProducts,
    AllCategories,
    Categories,
    FlashSalesItems,
    BodySection, HeadSection },
  
}
</script>

<style>

</style>