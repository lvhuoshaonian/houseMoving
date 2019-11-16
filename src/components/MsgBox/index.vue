<template>
    <div class="business-container">
        <div class="business-list" :class="{'donghua':animFlag}">
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
            <!-- eslint-disable-next-line -->
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
                        优惠减免少￥{{item.youhui}}
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
        margin: 0.2rem auto 0;
        text-align: right;
    }
    .business-container .Cancel i{
        color: #9399a5;
        font-size: .36rem;
    }
    .business-container .business-list >h2{
        font-size: .36rem;
        font-weight: normal;
    }
    .business-container .business-list >h2,
    .business-container .business-list >div{
        width: 93%;
        margin: 0 auto;
    }
    .business-container .business-list{
        width: 90%;
        height: 5.9rem;
        background: white;
        border-radius: .12rem;
        font-size: .28rem;

        animation: .3s Boxanima;
    }
    .business-container .donghua{
        animation: .1s Boxanima1 ;
    }
    @keyframes Boxanima {
        0%{
            transform: scale(.1);
        }
        100%{
            transform: scale(1);
        }
    }
    @keyframes Boxanima1 {
        0%{
            transform: scale(1);
        }
        100%{
            transform: scale(0);
        }
    }
    .business-container .business-list .dangqian{
        margin-bottom: .14rem;
    }
    .business-container .business-list .dangqian,
    .business-container .business-list .qita{
        position: relative;
        display: flex;
        align-items: center;
        padding: .2rem 0;
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
        width: .8rem;
        height: .8rem;
        border: .013rem solid #ececec;
        overflow: hidden;
    }
    .business-list .business-logo img{
        width: 90%;
        height: 90%;
    }
    .business-list .business-name {
        width: 49%;
        padding-left: .1rem;
        font-size: .28rem;
    }
    .business-list .price-youhui{
        width: 40%;
        margin-right: .1rem;
        text-align: right;
    }
    .business-list .price-youhui .price{
        font-size: .32rem;
        color: #fe615a;
    }
    .business-list .price-youhui .youhui{
        font-size: .24rem;
        color: #9399a5;
    }
    .business-list .iconxiangyou{
        color: #9399a5;
    }
</style>