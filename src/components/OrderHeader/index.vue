<template>
    <div class="order-header-container">
        <header class="order-details-header">
            <div class="price-header-img">
                <img :src="businessList[activeIndex].businessLogo" alt="">
            </div>
            <div class="header-content">
                <p>{{businessList[activeIndex].businessName}}</p>
                <div>
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
    import {messageBox} from "../MsgBox/msgJs";

    export default {
        name: "orderHeader",
        props:['index'],
        data(){
            return{
                activeIndex:0,
                businessList:[
                    {
                        businessName:'蓝犀牛搬家',
                        businessLogo:require("../../assets/lanxiniu.png"),
                        price:'89',
                        youhui:'10'
                    },
                    {
                        businessName:'自如搬家',
                        businessLogo:require("../../assets/ziru-Logo.png"),
                        price:'96',
                        youhui:''
                    },
                    {
                        businessName:'四通搬家',
                        businessLogo:require("../../assets/stone.png"),
                        price:'218',
                        youhui:""
                    },
                ]
            }
        },
        created(){
            this.activeIndex = this.index
        },
        methods:{
            switchBusiness(){
                let that = this
                messageBox({
                    list:that.businessList,
                    activeIndex : that.activeIndex,
                    handleOk(){
                        if( that.activeIndex !== this.activeIndex){
                            that.activeIndex = this.activeIndex
                            that.$emit('business',that.businessList[that.activeIndex])
                        }
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .order-header-container{
        width: 100%;
        overflow: hidden;
    }
    .order-details-header{
        display: flex;
        justify-content: center;
        align-items: center;
        height: .82rem;
        margin-bottom: .32rem;
    }
    .order-details-header .price-header-img{
        display: flex;
        justify-content: center;
        align-items: center;
        width: .7rem;
        height: .7rem;
        border:  1px solid #c9ccd2;
        border-radius: .08rem;
        overflow: hidden;
    }
    .order-details-header .price-header-img >img{
        width: .7rem;
        height: .7rem;
    }
    .order-details-header .header-content{
        flex: 1;
        font-size: .28rem;
        margin-left: .12rem;
        text-align: left;
    }
    .order-details-header .header-content p{
        font-weight: 700;
    }
    .order-details-header .header-content i{
        font-size: .32rem;
        color: #FDD606;
    }
    .order-details-header .btn-content{
        position: relative;
        width: 76px;
        height: 26px;
        line-height: 26px;
        font-size: 12px;
    }

    .order-details-header .btn-content i{
        vertical-align: middle;
    }
    .order-details-header .btn-content::before{
        position: absolute;
        content: "";
        display: block;
        width: 200%;
        height: 200%;
        box-sizing: border-box;
        transform-origin: 0 0;
        transform: scale(.5);
        z-index: -1;
        border: 1px solid #c9ccd2;
        border-radius: 28px;
    }
</style>