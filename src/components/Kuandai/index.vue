<template>
    <div class="kuandai-container">
        <header class="header-img">
            <img src="../../assets/kuandai.png" alt="">
        </header>
        <section class="section-content">
            <div class="kuandaitaocan">
                <h2 class="kuandai-title">
                    <i class="iconfont iconlogo"></i>
                    <span>
                        中国联通
                    </span>
                </h2>
                <div class="taocanguize" >
                    <p class="wangsu">300M</p>
                    <p class="yue">12个月</p>
                    <p class="price">￥1580</p>
                </div>
            </div>
            <div class="fuwushuoming">
                <h2 class="fuwushuoming-title">
                    <span>
                        服务说明
                    </span>
                </h2>
                <div class="xiadanshijian_1">
                    <span>下单时间：9:00-17:00，客服2h内回访</span>
                </div>
                <div class="xiadanshijian_2">
                    <span>下单时间：17:00-9:00，客服9:00-11:00内回访</span>
                </div>
                <div class="fuwudianhua">
                    <span>客服电话：</span>
                    <a href="#" class="tel">10106188转5</a>
                </div>
            </div>
            <div class="tuikuanguize">
                <h2 class="fuwushuoming-title">
                    <span>
                        退款规则
                    </span>
                </h2>
                <p>
                    退款规则依照运营商退款规则
                </p>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name:"kuandai",
    data(){
        return{

        }
    }
}
</script>

<style scoped lang="scss">
    $w:100%;
    .kuandai-container{
        position: relative;
        width: $w;
    }
    .kuandai-container .header-img{
        position:absolute;
        width: $w;
        height: 2.84rem;
        top:0;
        left: 0;
        >img{
            width: $w;
            height: $w;
        }
    }
    .section-content{
        position: relative;
        top:2.7rem;
        left: 0;
        width: $w;
        border-radius: .2rem;
        background-color: #fff;
        >div{
            width: 89%;
            margin: 0 .2rem .64rem .4rem ;
            text-align: left;
            font-size: .26rem;
            color:#8A909C;
        }
        h2{
            margin-bottom: .2rem;
            font-size: .38rem;
            font-weight: 550;
            color: #101d37;
        }
        .kuandaitaocan{
            padding-top:.4rem;
            .kuandai-title i{
                font-size: .38rem;
                color: #EE5862;
            }
            .taocanguize{
                width: 2.08rem;
                height: 2.08rem;
                margin: .24rem .2rem 0;
                color: #9399a5;
                border-radius: .1rem;
                box-shadow: 0 .082rem .26rem 0 #ebeef5;
                text-align: center;
                .wangsu{
                    padding-top: .3rem;
                    font-size: .36rem;
                    color: #000;
                }
                .price{
                    padding-top: .3rem;
                    font-size: .32rem;
                    color: #fe615a;
                }
            }
        }
        .fuwushuoming {
            >div span{
                line-height: .4rem;
            }
            >div a{
                font-size: .26rem;
            }
        }
    }
</style>