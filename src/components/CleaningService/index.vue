<template>
    <div class="cleaning-container">
        <SlidingNav :navList="navList"/>
        <section class="info-wrapper">
            <div class="info-left">
                <i v-if="address ===''" class="iconfont iconxuhao1"></i>
                <i v-else class="iconfont iconxuhao1 zhengque"></i>
                <i v-for="item in 3" class="iconfont iconyuandian1" :key="item"></i>
                <i v-if="serveProject ===''" class="iconfont iconxuhao2"></i>
                <i v-else class="iconfont iconxuhao2 zhengque"></i>
                <i v-for="items in 3" class="iconfont iconyuandian1" :key="items+3"></i>
                <i v-if="serveDate ===''" class="iconfont iconxuhao"></i>
                <i v-else class="iconfont iconxuhao zhengque"></i>
            </div>
            <div class="info-right">
                <div class="info-right__item">
                    <div class="banjia-date border1">
                        <span v-if="address!==''">{{address}}</span>
                        <span v-else>请选择服务地址</span>
                        <i class="iconfont iconxiangyou"></i>
                    </div>
                    <div class="banjia-start border1">
                        <span v-if="serveProject!==''">{{address}}</span>
                        <span v-else>请选择服务项目</span>
                        <i class="iconfont iconxiangyou"></i>
                    </div>
                    <div class="banjia-end">
                        <span v-if="serveDate!==''">{{address}}</span>
                        <span v-else>请选择上门时间</span>
                        <i class="iconfont iconxiangyou"></i>
                    </div>
                </div>
            </div>
        </section>
        <Guarantee />
        <footer class="cleaning-footer">
            <a class="btn" @touchstart="toZhifu()">
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
        name: "CleaningService",
        components:{
            SlidingNav,
            Guarantee
        },
        data(){
            return{
                navList:[
                    {
                        type:'日常保洁',
                        img:require("../../assets/icon_clean.png"),
                        title:"2小时起",
                        detail:"表面清洁，基础除尘除垢"
                    },
                    {
                        type:'深度保洁',
                        img:require("../../assets/icon_deep.png"),
                        title:"按房间数收费",
                        detail:"辅助专业工具，全面除尘除垢"
                    },
                    {
                        type:'开荒保洁',
                        img:require("../../assets/icon_minibus.png"),
                        title:"按房间数收费",
                        detail:"全屋除胶除漆，清理装修痕迹"
                    }
                ],
                address:'',
                serveProject:'',
                serveDate:''
            }
        },
        methods:{
            toZhifu(){
                let flag = true
                let msg = ''
                if(this.address === ''){
                    msg = '请输入服务地址'
                    flag = false
                }
                if(flag && this.serveProject === ''){
                    msg = '请输入服务项目'
                    flag = false
                }
                if(flag && this.serveDate === ''){
                    msg = '请输入上门时间'
                    flag = false
                }
                if(flag){
                    Toast(msg)
                }else{
                    this.$router.push("/YuYueBaoJie")
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
        color: #E1E3EE;
    }
    .info-left i{
        color: #E1E3EE;
    }
    .info-left .zhengque{
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
    .cleaning-footer{
        width: 100%;
        margin-bottom: 23px;
    }
    .cleaning-footer .btn{
        display: block;
        width: 100%;
        height: 51px;
        line-height: 51px;
        background-color: #239F57;
        color: #fff;
        font-weight: bold;
        border-radius: 14px;
        font-size: 15px;
        letter-spacing: 1px;
        outline: none;
        border: none;
    }
</style>