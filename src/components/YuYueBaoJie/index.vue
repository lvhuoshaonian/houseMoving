<template>
    <div class="yuyuebaojie-container">
        <OrderHead index="1" @business="business"/>
        <section class="order-confirm">
            <div class="order-confirm-container">
                <div class="address-cell-wrapper border1">
                    <div class="image-wrapper">
                        <img src="../../assets/icon-address.png" alt="">
                    </div>
                    <div class="address-cell-wrapper-item">
                        <p class="double">130 8603 7061</p>
                        <div class="blur-wrapper">
                            <span>北京市朝阳区黄厂南里3号院17Coffee HABlTats17</span>
                        </div>
                    </div>
                    <p class="van-icon">
                        <i class="iconfont iconxiangyou"></i>
                    </p>
                </div>
                <div class="van-cell border1">
                    <p class="van-cell-title">服务内容</p>
                    <p class="van-cell-value">日常保洁</p>
                </div>
                <div class="van-cell border1">
                    <p class="van-cell-title">服务项选择</p>
                    <p class="van-cell-value">2小时</p>
                </div>
                <div class="van-cell border1">
                    <p class="van-cell-title">服务开始时间</p>
                    <p class="van-cell-value">2019-09-30 08:30</p>
                </div>
                <div class="van-cell border1">
                    <p class="van-cell-title">优惠劵</p>
                    <p class="van-cell-value">
                        <span v-if="businessInfo.youhui!==''">- ￥{{businessInfo.youhui}}</span>
                        <span v-else class="wuyouhui" >暂无优惠减免</span>
                        <i class="iconfont iconxiangyou"></i>
                    </p>
                </div>
                <div class="order-amount">
                    <p class="amount-qian">
                        支付金额：
                        <span>￥</span>
                        <span>{{businessInfo.price}}</span>
                    </p>
                </div>
            </div>
            <div class="order-remark">
                <p class="title">
                    备注信息
                </p>
                <label>
                    <textarea placeholder="输入备注信息"></textarea>
                </label>
            </div>
            <div class="business-services">
                <ServiceJiesao :jiesaoList="jiesaoList" title="服务介绍"/>
            </div>
            <div class="estimate-wrap">
                <p class="title">用户评价</p>
                <div class="estimate-list">
                    <div class="estimate-item"
                         v-for="(item,index) in estimateList" :key="index+6">
                        <div class="user">
                            {{item.user}}
                        </div>
                        <div class="van-rate">
                            <i v-for="i in 5"
                               class="iconfont iconstar-award" :key="i+15"></i>
                        </div>
                        <div class="img-list">
                            <img v-for="img in item.imgList" alt=""
                                 :src="img.img" :key="img.img"/>
                        </div>
                        <div class="label">
                            <img src="../../assets/icon_text_qt.png" alt="" >
                        </div>
                        <p class="des">{{item.des}}</p>
                    </div>
                </div>
            </div>
            <div class="explain">
                <p class="title">服务说明</p>
                <div class="explain-content">
                    <p>
                        1、按小时计费，不足2小时按2小时计费，超过20分钟按1小时计费。
                    </p>
                    <p>
                        2、服务开始前2小时免费取消，2小时内收取20%服务费。
                    </p>
                    <p class="protocol">
                        支付即代表您同意
                        <a href="#">《贝壳生活用户服务协议》</a>
                    </p>
                </div>
            </div>
        </section>
        <footer>
            <div class="footer-btn">
                <a >
                    立即支付
                </a>
            </div>
        </footer>
    </div>
</template>

<script>
    import OrderHead from '../OrderHeader'
    import ServiceJiesao from '../ServiceJiesao'
    export default {
        name: "yuyuebaojie",
        components:{
            OrderHead,
            ServiceJiesao
        },
        data(){
            return{
                businessInfo:{
                    businessName:'自如搬家',
                    businessLogo:require("../../assets/ziru-Logo.png"),
                    price:'96',
                    youhui:''
                },
                jiesaoList:[
                    {
                        img:require("../../assets/img_renovation01.png"),
                        title:'全面除尘',
                        detail:'地面、台面、墙面、门窗等全面除灰除尘'
                    },
                    {
                        img:require("../../assets/img_renovation02.png"),
                        title:'除胶漆水泥块',
                        detail:'墙面、地面等室内表面遗留下的装修垃圾及涂料点，水泥块。'
                    },
                    {
                        img:require("../../assets/img_renovation03.png"),
                        title:'窗框玻璃',
                        detail:'玻璃窗框撕膜、除胶，内窗玻璃清洁'
                    }, {
                        img:require("../../assets/img_renovation04.png"),
                        title:'家电家具清洁',
                        detail:'家电家具表面清洁、撕膜，卫具撕膜消毒，五金清洁及保养。'
                    }

                ],
                estimateList:[
                    {
                        user:'138****0804',
                        imgList:[
                            {
                                img:require("../../assets/pingjia1.png")
                            },{
                                img:require("../../assets/pingjia2.png")
                            },{
                                img:require("../../assets/pingjia3.png")
                            }
                        ],
                        des:'非常认真负责，打扫周到，服务时间够长，对家人非常客气，服务态度满分！'
                    },
                    {
                        user:'138****0804',
                        imgList:[
                            {
                                img:require("../../assets/pingjia4.png")
                            },{
                                img:require("../../assets/pingjia5.png")
                            },{
                                img:require("../../assets/pingjia6.png")
                            }
                        ],
                        des:'阿姨准时到达，干活很仔细，服务非常满意！'
                    }
                ]

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
    .yuyuebaojie-container{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: .3rem auto;
    }
    .yuyuebaojie-container .order-confirm{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .order-confirm .order-confirm-container{
        position: relative;
        padding:0 .34rem .26rem;
        box-shadow: 0 0.2rem 0.7rem 0 rgba(0,0,0,.1);
        border-radius: .12rem;
    }
    .order-confirm-container>div{
        position: relative;
        display: flex;
        align-items: center;
        height: .9rem;
        padding: .32rem 0;
    }
    .order-confirm-container::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 1.1rem;
        left: 0;
        bottom: -.99rem;
        background-image: url("../../assets/img-order-dot.png");
        background-repeat: no-repeat;
        background-size: contain;
    }
    .address-cell-wrapper .image-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        width: .44rem;
        height:  .44rem;
    }
    .address-cell-wrapper .image-wrapper img{
        width: 100%;
        height: 100%;
    }
    .address-cell-wrapper .address-cell-wrapper-item{
        flex: 1;
        margin: 0 .12rem;
    }
    .address-cell-wrapper .address-cell-wrapper-item {
        text-align: left;
        width: 80%;
        overflow: hidden;
    }
    .address-cell-wrapper .address-cell-wrapper-item .double{
        font-size: .32rem;
        color: #101d37;
        font-weight: 400;
    }
    .address-cell-wrapper .address-cell-wrapper-item .blur-wrapper{
        position: relative;
        width: 100%;
        font-size: .32rem;
        font-weight: 700;
        white-space: nowrap;
        animation: marquee 10s linear forwards;
        box-sizing: border-box;
        /* animation-fill-mode: forwards; */
    }
    .address-cell-wrapper .address-cell-wrapper-item .blur-wrapper::before{
        position: absolute;
        content: "";
        display: block;
        width: 50%;
        height: 100%;
        top: 0;
        left: 1px;
        background: linear-gradient(to left,rgba(250,250,250,0),rgba(250,250,250,1));
    }
    @keyframes marquee {
        0% {
            text-indent: 0;
        }
        100% {
            text-indent: -8.5em;
        }
    }
    .address-cell-wrapper .van-icon {
        display: flex;
        align-items: center;
        width: .4rem;
        height: .9rem;
    }
    .order-confirm-container .van-cell>p{
        flex: 1;
    }
    .order-confirm-container .van-cell-title{
        text-align: left;
        font-size: .3rem;
        color: #101d37;
        font-weight: 700;
    }
    .order-confirm-container .van-cell-value{
        text-align: right;
        color: #969799;
        font-size: .3rem;
    }
    .order-confirm-container .van-cell-value>span{
        color: #fe615a;
        padding-right: .1rem;
    }
    .order-confirm-container .van-cell-value .wuyouhui{
        color: #969799;
    }
    .order-confirm-container .order-amount{
        font-size: .34rem;
    }
    .order-confirm-container .order-amount>p{
        width: 100%;
        text-align: right;
        font-size: .28rem;
    }
    .order-amount .amount-qian >span{
        color: #fe615a;
    }
    .order-amount .amount-qian >span:nth-child(2){
        font-size: .4rem;
    }
    .order-confirm .order-remark{
        margin: .68rem 0;
    }
    .order-confirm .title{
        margin-bottom: .28rem;
        font-size: .34rem;
        text-align: left;
        font-weight: bold;
    }
    .order-remark textarea{
        border: none;
        outline: none;
        background: #f8f8f9;
        border-radius: .12rem;
        box-sizing: border-box;
        width: 100%;
        height: 2.1rem ;
        padding: .18rem .2rem;
        font-size: .28rem;
    }
    .estimate-wrap .estimate-list{
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
    }
    .order-confirm .estimate-wrap{
        margin-top: .62rem;
    }
    .estimate-wrap .estimate-item{
        padding:0  0 .38rem .32rem;
        background: #fff;
        box-shadow: 0 .04rem .08rem 0 rgba(0,0,0,.07);
        border-radius: .1rem;
        margin: .16rem;
    }
    .estimate-item .user{
        margin-top: .18rem;
        text-align: left;
        font-size: .32rem;
        font-weight: bold;
        color: #101d37;
    }
    .estimate-item .van-rate{
        text-align: left;
        font-size: .24rem;
        margin: .1rem 0 .16rem;
        color: #E6E400;
    }
    .estimate-item .img-list{
        display: flex;
        width: 100%;
    }
    .estimate-item .img-list img{
        margin-right: .26rem;
        width: 1.38rem;
        height: 1.24rem;
    }
    .estimate-item .label{
        margin-top: .16rem;
        text-align: left;
    }
    .estimate-item .label img{
        width: .2rem;
        height: .18rem;
    }
    .estimate-item .des{
        text-align: left;
        font-size: .16rem;
        line-height: .36rem;
        color: #9399a5;
    }
    .order-confirm .explain{
        margin-top: .6rem;
    }
    .explain .explain-content{
        font-size: .28rem;
        text-align: left;
        color: #9399a5;
    }
    .explain .explain-content>p{
        line-height: .46rem;
    }
    .explain .explain-content .protocol{
        margin-top: .1rem;
    }
    .explain .explain-content .protocol>a{
        font-size: .28rem;
    }
</style>