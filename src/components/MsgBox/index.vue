<template>
    <div class="business-container">
        <div class="business-list">
            <div class="Cancel">
                <i class="iconfont iconX"  @touchstart="handleCancel()"></i>
            </div>
            <h2 >当前服务商</h2>
            <div class="dangqian" @touchstart="handleOk(activeIndex)">
                <div class="business-logo">
                    <img :src="list[activeIndex].businessLogo" alt="">
                </div>
                <div class="business-name">
                    <span>{{list[activeIndex].businessName}}</span>
                </div>
                <div class="price-youhui">
                    <p class="price">￥{{list[activeIndex].price}}</p>
                    <p class="youhui" v-if="list[activeIndex].youhui !=='' ">
                       <span>优惠减免少￥</span>{{list[activeIndex].youhui}}
                    </p>
                </div>
                <p>
                    <i class="iconfont iconxiangyou"></i>
                </p>
            </div>
            <h2 >其他服务商</h2>
            <div v-if="parseInt(activeIndex) !== index" v-for="(item,index) in list"
                 :key="index" class="qita" @touchstart="handleOk(index)">
                <div class="business-logo">
                    <img :src="item.businessLogo" alt="">
                </div>
                <div class="business-name">
                    <span>{{item.businessName}}</span>
                </div>
                <div class="price-youhui">
                    <p class="price">￥{{item.price}}</p>
                    <p class="youhui" v-if="item.youhui !=='' ">
                        {{item.youhui}}
                    </p>
                </div>
                <p>
                    <i class="iconfont iconxiangyou"></i>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name :"msgBox"
}
</script>
<style scoped>
    .business-container{
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.5);
    }
    .business-container .business-list .Cancel{

        margin: 0.7rem auto 0;
        text-align: right;
    }
    .business-container .Cancel i{
        color: #9399a5;
        font-size: 18px;
    }
    .business-container .business-list >h2{
        font-size: 18px;
        font-weight: normal;
    }
    .business-container .business-list >h2,
    .business-container .business-list >div{
        width: 93%;
        margin: 0 auto;
    }
    .business-container .business-list{
        width: 86%;
        height: 50%;
        background: white;
        border-radius: 0.4rem;
    }
    .business-container .business-list .dangqian{
        margin-bottom: 1rem;
    }
    .business-container .business-list .dangqian,
    .business-container .business-list .qita{
        position: relative;
        display: flex;
        align-items: center;
        padding: 0.7rem 0;
    }
    .business-container .business-list .qita:not(:last-child)::after{
        position: absolute;
        content: "";
        display: block;
        box-sizing: border-box;
        transform-origin: 0 0;
        width: 100%;
        height: 1px;
        left: 0;
        bottom: 0;
        border-bottom: 1px solid #e4e6f0;
        transform: scaleY(.5);
    }
    .business-list .business-logo{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.6rem;
        height: 2.6rem;
        border: .013rem solid #ececec;
        overflow: hidden;
    }
    .business-list .business-logo img{
        width: 90%;
        height: 90%;
    }
    .business-list .business-name {
        width: 49%;
        padding-left: 0.3rem;
        font-size: 14px;
    }
    .business-list .price-youhui{
        width: 40%;
        margin-right: 0.3rem;
        text-align: right;
    }
    .business-list .price-youhui .price{
        color: #fe615a;
    }
    .business-list .price-youhui .youhui{
        font-size: 12px;
        color: #9399a5;
    }
    .business-list .iconxiangyou{
        color: #9399a5;
    }
</style>