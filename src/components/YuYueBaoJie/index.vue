<template>
    <div class="yuyuebaojie-container">
        <OrderHead businessName="自如" :businessLogo="logo"/>
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
                        <span>- ￥10</span>
                        <i class="iconfont iconxiangyou"></i>
                    </p>
                </div>
                <div class="order-amount">
                    <p class="amount-qian">
                        支付金额：
                        <span>￥</span>
                        <span>620</span>
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
                logo:require("../../assets/ziru-Logo.png"),
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
        }
    }
</script>

<style scoped>
    .yuyuebaojie-container{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 15px auto;
    }
    .yuyuebaojie-container .order-confirm{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .order-confirm .order-confirm-container{
        position: relative;
        padding:0 17px 13px;
        box-shadow: 0 0.2rem 0.7rem 0 rgba(0,0,0,.1);
        border-radius: 6px;
    }
    .order-confirm-container>div{
        position: relative;
        display: flex;
        align-items: center;
        height: 45px;
        padding: 16px 0;
    }
    .order-confirm-container::after{
        content: "";
        position: absolute;
        width: 100%;
        height: .39rem;
        left: 0;
        bottom: -.15rem;
        background-image: url("../../assets/img-order-dot.png");
        background-repeat: no-repeat;
        background-size: contain;
    }
    .address-cell-wrapper .image-wrapper{
        width: 22px;
        height: 22px;
        margin: 0 auto;
    }
    .address-cell-wrapper .image-wrapper img{
        width: 100%;
        height: 100%;
    }
    .address-cell-wrapper .address-cell-wrapper-item{
        margin: 0 6px;
    }
    .address-cell-wrapper .address-cell-wrapper-item {
        text-align: left;
        width: 80%;
        overflow: hidden;
    }
    .address-cell-wrapper .address-cell-wrapper-item .double{
        color: #101d37;
        font-weight: 400;
    }
    .address-cell-wrapper .address-cell-wrapper-item .blur-wrapper{
        position: relative;
        width: 100%;
        font-size: 16px;
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
    @media screen and (max-width: 320px){
        .address-cell-wrapper .address-cell-wrapper-item,
        .address-cell-wrapper .address-cell-wrapper-item .blur-wrapper{
            font-size: 14px;
        }
    }
    @keyframes marquee {
        0% {
            text-indent: 0;
        }
        100% {
            text-indent: -8.5em;
        }
    }
    .order-confirm-container .van-cell>p{
        flex: 1;
    }
    .order-confirm-container .van-cell-title{
        text-align: left;
        font-size: 15px;
        color: #101d37;
        font-weight: 700;
    }
    .order-confirm-container .van-cell-value{
        text-align: right;
        font-size: 13px;
        color: #969799;
    }
    .order-confirm-container .van-cell-value>span{
        color: #fe615a!important;
        padding-right: 5px;
    }
    .order-confirm-container .order-amount{
        font-size: 13px;
    }
    .order-confirm-container .order-amount>p{
        width: 100%;
        text-align: right;
        font-size: 14px;
    }
    .order-amount .amount-qian >span{
        color: #fe615a;
    }
    .order-amount .amount-qian >span:nth-child(2){
        font-size: 20px;
    }
    .order-confirm .order-remark{
        margin: 34px 0;
    }
    .order-confirm .title{
        margin-bottom: 14px;
        font-size: 16px;
        text-align: left;
        font-weight: bold;
    }
    .order-remark textarea{
        border: none;
        outline: none;
        background: #f8f8f9;
        border-radius: .39rem;
        box-sizing: border-box;
        width: 100%;
        height: 7.1rem;
        padding: 1rem 1.2rem;
        font-size: 1rem;
    }
    .estimate-wrap .estimate-list{
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
    }
    .order-confirm .estimate-wrap{
        margin-top: 31px;
    }
    .estimate-wrap .estimate-item{
        padding:0  0 19px 13px;
        background: #fff;
        box-shadow: 0 0.2rem 0.7rem 0 rgba(0,0,0,.07);
        border-radius: 5px;
        margin: 8px 8px;
    }
    .estimate-item .user{
        margin-top: 9px;
        text-align: left;
        font-size: 16px;
        font-weight: bold;
        color: #101d37;
    }
    .estimate-item .van-rate{
        text-align: left;
        font-size: 10px;
        margin: 5px 0 8px;
        color: #E6E400;
    }
    .estimate-item .img-list{
        display: flex;
        width: 100%;
    }
    .estimate-item .img-list img{
        margin-right: 13px;
        width: 69px;
        height: 64px;
    }
    .estimate-item .label{
        margin-top: 8px;
        text-align: left;
    }
    .estimate-item .label img{
        width: 10px;
        height: 9px;
    }
    .estimate-item .des{
        text-align: left;
        font-size: 13px;
        line-height: 18px;
        color: #9399a5;
    }
    .order-confirm .explain{
        margin-top: 31px;
    }
    .explain .explain-content{
        font-size: 14px;
        text-align: left;
        color: #9399a5;
    }
    .explain .explain-content>p{
        line-height: 23px;
    }
    .explain .explain-content .protocol{
        margin-top: 10px;
    }
    .explain .explain-content .protocol>a{
        font-size: 14px;
    }
</style>