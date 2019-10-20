<template>
    <div id="content" class="van-pull-refresh">
        <OrderHead index="0" @business="business"/>
        <section class="details-container">
            <div class="details-info">
                <div class="move-to-container border1">
                    <div class="move-to-item">
                        <span>有电梯</span>
                        <span class="move-date">2019-09-30 11:00</span>
                        <span>有电梯</span>
                    </div>
                    <div class="move-to-item">
                        <h1 class="move-kaishi">正义路10号院</h1>
                        <div class="move-type">
                            <span>金杯搬家</span>
                        </div >
                        <h1 class="move-end">正义路10号院</h1>
                    </div>
                </div>
                <div class="predict-cost">
                    <div class="predict-title">
                        <p class="order-font-2">预估报价</p>
                        <p class="order-font-3">￥{{businessInfo.price}}</p>
                    </div>
                    <div class="predict-cost-item">
                        <p class="order-font-2">优惠减免</p>
                        <p class="order-font-3">
                            <span v-if="businessInfo.youhui === ''">暂无可用，去兑换</span>
                            <span v-else>优惠减免{{businessInfo.youhui}}</span>
                            <i class="iconfont iconxiangyou">
                            </i>
                        </p>
                    </div>
                    <div class="total-price">
                        <p class="order-font-2"></p>
                        <p class="order-font-3">
                            <span>预估费用</span>
                            <strong class="price"><span>￥</span>{{businessInfo.price}}</strong>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="remark-container">
            <div class="details-list">
                <div class="remark-not-lock">
                    <p class="order-font-1 remark-title">
                        备注信息
                    </p>
                    <p class="colorgary">
                        <span >请输入备注</span>
                        <i class="iconfont icontiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing">
                        </i>
                    </p>
                </div>
                <div class="feiyong-list">
                    <div class="cost-details">
                        <p class="cost-details-header order-font-1">费用明细</p>
                    </div>
                    <div class="cost-details-content">
                        <div class="predict-cost-item border1">
                            <p class="order-font-5">起步价(含10.0公里)</p>
                            <p class="predict-cost-item-fees">
                                <span class="order-font-4">¥ 173</span>
                            </p>
                        </div>
                        <div class="predict-cost-item border1">
                            <p class="order-font-5">超里程费</p>
                            <p class="predict-cost-item-fees">
                                <span class="order-font-3">5元/1公里*0=</span>
                                <span  class="order-font-4">¥ 0</span>
                            </p>
                        </div>
                        <div class="predict-cost-item border1 banyunfei">
                            <div class="predict-cost">
                                <p class="order-font-5">楼层搬运费</p>
                                <p class="predict-cost-item-fees">
                                    <span class="order-font-3">搬出：1层</span>
                                    <span  class="order-font-4">¥ 0</span>
                                </p>
                            </div>
                            <div class="predict-cost-item-extend">
                                <span class="order-font-3">搬入：有电梯无楼层费</span>
                                <span  class="order-font-4">¥ 0</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="extra-cost">
                    <p class="order-font-1 extra-cost-title">
                        额外费用报价表
                    </p>
                    <div class="extra-cost-item border1">
                        <p class="order-font-5">加人费</p>
                        <p class="order-font-3">¥ 150/1人</p>
                    </div>
                    <div class="extra-cost-item border1">
                        <p class="order-font-5">中途装卸费</p>
                        <p class="order-font-3">¥ 50/1点</p>
                    </div>
                    <div class="extra-cost-item border1">
                        <p class="order-font-5">平地搬运费</p>
                        <p class="order-font-3">¥ 20/20米</p>
                    </div>
                    <div class="extra-cost-item border1">
                        <p class="order-font-5 ">过路费、停车费</p>
                        <p class="order-font-3">由客户承担</p>
                    </div>
                </div>
            </div>
            <div>
                <ServiceJiesao :jiesaoList="jiesaoList" title="商家详细"/>
            </div>
            <div class="bill-info">
                <p class="order-font-1">发票信息</p>
                <div class="bill-tip">
                    <span >如需开具发票请联系商家客服</span>
                    <i class="iconfont iconxiangyou"></i>
                </div>
            </div>
            <div class="evaluation">
                <div class="evaluation-title">
                    <span class="order-font-1">用户评价</span>
                    <span class="order-font-2">
                        <span class="proportion">99.68%</span>
                        好评
                    </span>
                </div>
                <div class="evaluation-tags">
                    <span class="comment-tag">无加价</span>
                    <span class="comment-tag">收费合理</span>
                    <span class="comment-tag">准时</span>
                    <span class="comment-tag">师傅耐心</span>
                    <span class="comment-tag">迟到赔偿</span>
                </div>
                <div class="estimate-container">
                    <div class="estimate-item">
                        <span class="user-info">147***9080</span>
                    </div>
                    <div class="estimate-rate">
                        <div class="rate-disabled">
                            <i v-for="i in 5" :key="i" class="iconfont iconstar-award"></i>
                        </div>
                        <p class="estimate-time">2019-09-29</p>
                    </div>
                    <div class="estimate-content">
                        用户未评价，系统默认好评
                    </div>
                    <div class="estimate-btn">
                        <a class="life-button-text">
                            查看全部评价
                        </a>
                    </div>
                </div>
            </div>
            <div class="explain">
                <p class="explain-title order-font-1">服务说明</p>
                <div class="explain-content">
                    <p>
                        1.预约订单服务开始前2小时内取消，收取60元取消费
                    </p>
                    <p>
                        2.由于用户原因造成的司机到达后无法搬运、装车后无
                        法出门的情况，等待30分钟以上，收取30元起的误工费
                        ，为避免耽误您的时间，请提前打包好行李，备好出门
                        条等
                    </p>
                    <p>
                        3.小面车型，每车只包含司机一人独立搬运，无法搬运
                        一人无法承担的大件物品，如您搬运物品涉及大件，请
                        与司机共同搬运或提前与司机沟通，加一名搬运工人
                    </p>
                    <p>
                        4.搬家服务暂不支持空调、水电的拆装
                    </p>
                    <p>
                        5.蓝犀牛搬家服务免费提供5000元搬家运输险，为您提
                        供物品在运输途中的安全保障
                    </p>
                    <p class="protocol">
                        <span>预约即代表您同意</span>
                        <a href="#">《贝壳生活用户服务协议》</a>
                    </p>
                </div>
            </div>
        </section>
        <footer >
            <div class="footer-btn">
                <a >
                   免费预约
                </a>
            </div>
        </footer>
    </div>
</template>

<script>
    import OrderHead from '../OrderHeader'
    import ServiceJiesao from '../ServiceJiesao'
    export default {
        name: "Yuyue",
        components:{
            OrderHead,
            ServiceJiesao
        },
        data(){
            return{
                businessInfo:{
                    businessName:'蓝犀牛搬家',
                    businessLogo:require("../../assets/lanxiniu.png"),
                    price:'89',
                    youhui:'￥10'
                },
                jiesaoList:[
                    {
                        img:require("../../assets/lxn-1.png"),
                        title:'全程搬运',
                        detail:'师傅提供整车搬运服务，全程无需您动手'
                    },
                    {
                        img:require("../../assets/lxn-2.png"),
                        title:'明码标价',
                        detail:'全部明码标价，费用在线支付，杜绝乱收费。'
                    }

                ],
            }
        },
        methods:{
            business(data){
                this.businessInfo = data
            }
        }
    }
</script>

<style scoped>
    .van-pull-refresh{
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .details-container{
        width: 98%;
        height: 4.9rem;
        margin: 0 auto;
        padding: .3rem 0;
        box-shadow:  0 0.1rem 0.32rem 0 rgba(0,0,0,.1);
        border-radius: .12rem;
    }
    .details-container .details-info{
        width: 92%;
        display: flex;
        flex-direction: column;
        margin:0 auto;
    }
    .details-info .move-to-container{
        position: relative;
        padding-bottom: .32rem;
    }
    .details-container .move-to-item{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: .2rem;
    }
    .details-container .move-to-item>span,
    .details-container .move-to-item>h1{
        text-align: center;
    }
    .details-container .move-to-item>h1{
        font-size: .36rem;
    }
    .details-container .move-to-item>span:nth-child(1),
    .details-container .move-to-item .move-kaishi{
        flex: 1;
        text-align: left;
    }
    .details-container .move-to-item>span:nth-child(3),
    .details-container .move-to-item  .move-end{
        flex: 1;
        text-align: right;
    }
    .details-container .move-to-item>span{
        font-size: .24rem;
        color: #9399a5;
    }
    .details-container .move-to-item .move-date{
        width: 55%;
    }
    .move-to-item .move-type{
        width: 40%;
        margin: 0 .014rem;
        text-align: center;
        font-size: .24rem;
    }
    .move-to-item .move-type>span{
        position: relative;
        display: block;
        width: 1.86rem;
        height: .46rem;
        line-height: .44rem;
        margin: 0 auto;
    }
    .move-to-item .move-type >span::before{
        position: absolute;
        content: "";
        display: block;
        box-sizing: border-box;
        width: 200%;
        height: 200%;
        transform-origin: 0 0;
        transform: scale(.5);
        z-index: -1;
        border: 1px solid #c9ccd2;
        border-radius: .46rem;
    }
    .details-info .predict-cost{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: .3rem;
    }
    .details-info .predict-cost>div{
        width: 100%;
        display: flex;
        margin-bottom: .44rem;
        font-size: .28rem;
        color: #000;
    }
    .details-info .predict-cost .order-font-2{
        flex: 1;
        text-align: left;
    }
    .details-info .predict-cost .order-font-3{
        width: 50%;
        text-align: right;
        color: #9399a5;
    }
    .details-info .predict-cost .order-font-3>span{
        color: #000;
    }
    .details-info .predict-cost .order-font-3 i{
        font-size: .24rem;
        padding-left: .04rem;
    }
    .predict-cost .order-font-3 strong>span{
        font-size: .28rem;
        padding: 0 3px;
    }
    .predict-cost .order-font-3 strong{
        font-size: .4rem;
        color: #EE5248;
    }
    .remark-container{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .remark-container .details-list{
        width: 100%;
        margin-top: .6rem;
    }
    .details-list .remark-not-lock{
        display: flex;
    }
    .remark-container .order-font-1{
        text-align: left;
        font-size: .32rem;
        font-weight: bold;
    }
    .details-list .remark-not-lock .remark-title{
        width: 45%;
        text-align: left;
    }
    .details-list .remark-not-lock .colorgary{
        flex: 1;
        font-size: .28rem;
        text-align: right;
        color: #9399a5;
    }
    .details-list .remark-not-lock .colorgary i{
        font-size: 14px;
        padding-left: .1rem;
    }
    .details-list .feiyong-list{
        width: 100%;
    }
    .details-list .cost-details{
        text-align: left;
        width: 100%;
        margin-top: .7rem;
    }
    .feiyong-list .cost-details-content{
        width: 100%;
    }
    .feiyong-list .cost-details-content>div{
        position: relative;
        display: flex;
    }
    .feiyong-list .cost-details-content>div:nth-child(1),
    .feiyong-list .cost-details-content>div:nth-child(2){
        height: .98rem;
        line-height: .98rem;
    }
    .remark-container .order-font-5{
        text-align: left;
        flex: 1;
        font-size: .3rem;
    }
    .cost-details-content .predict-cost-item.banyunfei{
        display: flex;
        flex-direction: column;
        padding: .22rem 0 .2rem;
    }
    .cost-details-content .predict-cost-item .predict-cost{
        display: flex;
    }
    .predict-cost-item .predict-cost-item-extend{
        margin-top: .1rem;
        text-align: right;
        font-size: .28rem;
        color: #9399a5;
    }
    .cost-details-content .predict-cost-item-fees{
        width: 45%;
        text-align: right;
        font-size: .26rem;
    }
    .remark-container .order-font-3{
        text-align: right;
        font-size: .26rem;
        color: #9399a5;
    }
    .remark-container .order-font-4{
        font-size: .26rem;
        padding-left: 5px;
        color: #000;
    }
    .remark-container .details-list .extra-cost{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: .46rem auto;
    }
    .details-list .extra-cost .extra-cost-title{
        text-align: left;
    }
    .details-list .extra-cost>div{
        position: relative;
        display: flex;
        height: .98rem;
        line-height: .98rem;
    }
    .remark-container .bill-info{
        width: 100%;
        margin: .7rem  0;
    }
    .bill-info .bill-tip{
        display: flex;
        width: 100%;
        color: #9399a5;
        margin-top: .3rem;
    }
    .bill-info .bill-tip >span{
        flex: 1;
        text-align: left;
        font-size: .26rem;
    }
    .remark-container .evaluation{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .remark-container .evaluation >div{
        width: 100%;
    }
    .evaluation .evaluation-title{
        display: flex;
        align-items: center;
        margin-bottom: .34rem;
    }
    .evaluation .evaluation-title>span{
        flex: 1;
    }
    .evaluation .evaluation-title .order-font-2{
        text-align: right;
        font-size: .26rem;
    }
    .evaluation .evaluation-title .proportion{
        color: #fe615a;
    }
    .evaluation .evaluation-tags{
        width: 100%;
        text-align: left;
        margin-bottom: .4rem;
    }
    .evaluation .evaluation-tags .comment-tag{
        font-size: .24rem;
        padding: .06rem .1rem;
        margin-right: .1rem;
        background-color: rgb(255, 249, 218);
    }
    .evaluation .estimate-container>div{
        display: flex;
        width: 100%;
    }
    .evaluation .estimate-container .estimate-item{
        margin: .1rem 0 .2rem;
    }
    .estimate-container .estimate-item .user-info{
        font-size: .28rem;
        font-weight: bold;
    }
    .estimate-container .estimate-rate .rate-disabled,
    .estimate-container .estimate-rate .estimate-time{
        flex: 1;
    }
    .estimate-container .estimate-rate .rate-disabled{
        text-align: left;
    }
    .estimate-container .estimate-rate .rate-disabled i{
        color: rgb(255, 218, 0);
        font-size: .28rem;
    }
    .estimate-container .estimate-rate .estimate-time{
        font-size: 12px;
        text-align: right;
        color: #9399a5;
    }
    .estimate-container .estimate-content{
        margin: .16rem 0;
        font-size: .28rem;
        color: #101d37;
    }
    .estimate-container .estimate-btn {
        margin-top: .3rem;
    }
    .estimate-container .estimate-btn .life-button-text{
        display: block;
        width: 2.32rem;
        height: .72rem;
        line-height: .72rem;
        margin: 0 auto;
        font-size: .28rem;
        font-weight: bold;
        color: #101d37;
        background-color: #F8F8FA;
        border-radius: .12rem;
        text-align: center;
    }
    .remark-container .explain{
        width: 100%;
    }
    .remark-container .explain .explain-title{
        margin-bottom: .2rem;
    }
    .remark-container .explain .explain-content{
        color: #9399a5;
    }
    .remark-container .explain .explain-content>p{
        text-align: left;
        font-size: 0.28rem;
        line-height: .44rem;
    }
    .remark-container .explain .explain-content .protocol{
        margin-top: .34rem;
        font-size: .24rem;
    }
</style>