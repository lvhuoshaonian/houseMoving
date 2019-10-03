<template>
    <div class="MovingServices">
        <SlidingNav :navList="navList" :index="index"/>
        <section class="info-wrapper">
            <div class="info-left">
                <i v-if="banjiaDate===''" class="iconfont iconyuandian"></i>
                <i v-else class="iconfont iconzhengque"></i>
                <i v-for="i in 6" class="iconfont iconyuandian1" :key="i"></i>
                <i v-if="banjiaStart===''" class="iconfont iconyuandian"></i>
                <i v-else class="iconfont iconzhengque"></i>
                <i v-for="i in 6" class="iconfont iconyuandian1" :key="i+6"></i>
                <i v-if="banjiaEnd===''" class="iconfont iconyuandian"></i>
                <i v-else class="iconfont iconzhengque"></i>
            </div>
            <div class="info-right">
                <div class="info-right__item">
                    <div class="banjia-date border1">
                        <span v-if="banjiaDate!==''">{{banjiaDate}}</span>
                        <span v-else>搬家时间</span>
                        <i class="iconfont iconxiangyou"></i>
                    </div>
                    <div class="banjia-start border1">
                        <span v-if="banjiaStart!==''">{{banjiaStart}}</span>
                        <span v-else>从哪里搬出来？</span>
                        <i class="iconfont iconxiangyou"></i>
                    </div>
                    <div class="banjia-end">
                        <span v-if="banjiaEnd!==''">{{banjiaEnd}}</span>
                        <span v-else>想搬到哪里去？</span>
                        <i class="iconfont iconxiangyou"></i>
                    </div>
                </div>
            </div>
        </section>
        <Guarantee />
        <footer class="moving-footer">
            <a class="btn" @touchstart="toBaojia()">
                获取报价
            </a>
        </footer>
    </div>
</template>

<script>
    import SlidingNav from '../../components/SlidingNav'
    import Guarantee from '../../components/ServiceGuarantee'
    import { Toast } from 'mint-ui';
    export default {
        name: "MovingServices",
        components:{
            SlidingNav,
            Guarantee
        },
        props:["index"],
        data(){
            return {
                navList:[
                    {
                        type:'小型搬家',
                        img:require("../../assets/little-car1.png"),
                        carSize:"长(1.2m)*宽(1.2m)*高(1.1m)",
                        title:"适合行李较少的搬家",
                        detail:"可容纳10个24寸行李箱，有一个师傅帮忙搬家"
                    },
                    {
                        type:'中型搬家',
                        img:require("../../assets/middle-car2.png"),
                        carSize:"长(1.8m)*宽(1.3m)*高(1.2m)",
                        title:"适合行李较多的搬家",
                        detail:"可容纳20个24寸行李箱，有一个师傅帮忙搬家"
                    },
                    {
                        type:'大型搬家',
                        img:require("../../assets/large-car3.png"),
                        carSize:"长(4.2m)*宽(1.9m)*高(1.9m)",
                        title:"适合有家具家电的搬家",
                        detail:"可容纳大件家具家电，有两个师傅帮忙搬家"
                    }
                ],
                banjiaDate:'',
                banjiaStart:'',
                banjiaEnd:''
            }
        },
        methods:{
            toBaojia(){
                let flag = true
                let msg = ''
                if(this.banjiaDate === ''){
                    msg = '请输入搬家时间'
                    flag = false
                }
                if(flag && this.banjiaStart === ''){
                    msg = '请输入搬家地址'
                    flag = false
                }
                if(flag && this.banjiaEnd === ''){
                    msg = '请输入搬到地址'
                    flag = false
                }
                if(flag){
                    Toast(msg)
                }else{
                    this.$router.push("/YuYueMoving")
                }
            }
        }
    }
</script>

<style scoped>
    .info-wrapper{
        border-radius: .133333rem;
        box-shadow: 0 0.106667rem 0.32rem 0 rgba(0,0,0,.08);
        width: 100%;
        height: 206px;
        margin: .8rem auto .266667rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
    }
    .info-wrapper{
        display: flex;
    }
    .info-wrapper .info-left{
        display: flex;
        width: 18%;
        flex-direction: column;
        justify-content: center;
    }
    .info-wrapper .info-left .iconyuandian1{
        height: 9px;
        line-height: 9px;
        color: #E1E3EE;
    }
    .info-left .iconyuandian{
        color: #E1E3EE;
    }
    .info-left .iconzhengque{
        color:#229E56 ;
    }
    .info-right{
        flex: 1;
        margin-right: 23px;
    }
    .info-right .info-right__item>div{
        position: relative;
        width: 100%;
        height: 68px;
        line-height: 68px;
        text-align: left;
        color: #A4A4A6;
    }
    .info-right .info-right__item .banjia-end{
        border-bottom:none;
    }
    .info-right .info-right__item .iconxiangyou{
        float: right;
    }
    .moving-footer{
        width: 100%;
        margin-bottom: 23px;
    }
    .moving-footer .btn{
        display: block;
        width: 100%;
        height: 51px;
        line-height: 51px;
        background-color: #239F57;
        color: #fff;
        font-weight: bold;
        border: none;
        outline: none;
        border-radius: 14px;
        font-size: 15px;
        letter-spacing: 1px;
    }
</style>