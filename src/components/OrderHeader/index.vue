<template>
    <div class="order-header-container">
        <header class="order-details-supply">
            <div class="price-supply">
                <img :src="businessLogo" alt="">
            </div>
            <div class="price-supply-content">
                <p>{{businessName}}</p>
                <div class="van-rate">
                    <i v-for="item in 5" :key="item"
                       class="iconfont iconstar-award"></i>
                </div>
            </div>
            <div class="btn-content">
                <a class="btn">
                    <span @touchstart="switchBusiness()">切换商家</span>
                    <i class="iconfont icondown-trangle-copy-copy">
                    </i>
                </a>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: "orderHeader",
        props:['businessName','businessLogo'],
        data(){
            return{
                business:{
                    businessName:'',
                    businessLogo:'',
                    price:''
                }
            }
        },
        created(){

        }
    }
</script>

<style scoped>
    .order-header-container{
        width: 100%;
    }
    .order-details-supply{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 41px;
        margin-bottom: 15px;
    }
    .order-details-supply .price-supply{
        width: 35px;
        height: 35px;
    }
    .order-details-supply .price-supply img{
        width: 100%;
        height: 100%;
        border: .013rem solid #ececec;
    }
    .order-details-supply .price-supply-content{
        flex: 1;
        text-align: left;
        margin-left: 11px;
    }
    .order-details-supply .price-supply-content p{
        font-weight: 700;
        font-size: 1rem;
        color: #101d37;
    }
    .order-details-supply .price-supply-content i{
        font-size: 1rem;
        padding-right: 2px;
        color: #FDD606;
    }
    .order-details-supply .btn-content{
        position: relative;
        width: 78px;
        height: 29px;
        line-height: 28px;
        color: #9399a5;
    }
    .move-to-item .move-type>span::before,
    .order-details-supply .btn-content::before{
        border: 1px solid #c9ccd2;
        box-sizing: border-box;
        content: "";
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        width: 200%;
        height: 200%;
        -webkit-transform: scale(.5);
        transform: scale(.5);
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
    }
    .order-details-supply .btn-content::before{
        border-radius: 29px;
    }
    .btn-content .btn{
        font-size: 12px;
    }
</style>