<template>
    <div id="content" class="service-guarantee">
        <div class="title">
            <span class="icon-left">
                <i class="iconfont iconhengxian-"></i>
                <i class="iconfont iconhengxian"></i>
                <i class="iconfont iconhengxian-"></i>
            </span>
            <span class="title-info">
                品质服务保障
            </span>
            <span class="icon-right">
                <i class="iconfont iconhengxian-"></i>
                <i class="iconfont iconhengxian"></i>
                <i class="iconfont iconhengxian-"></i>
            </span>
        </div>
        <div class="title-icon">
            <div class="">
                <img src="../../assets/icon-time1.png" alt="" >
                <p>迟到赔偿</p>
            </div>
            <div class="">
                <img src="../../assets/icon-fee.png" alt="" >
                <p>明码标价</p>
            </div>
            <div class="">
                <img src="../../assets/icon-move.png" alt="" >
                <p>全程搬运</p>
            </div>
            <div class="">
                <img src="../../assets/icon-pro.png" alt="" >
                <p>专业服务</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "service-guarantee"
    }
</script>

<style scoped>
    .service-guarantee{
        margin-top: .5rem;
    }
    .service-guarantee .title{
        width: auto;
        text-align: center;
    }
    .service-guarantee .title{
        display: flex;
        justify-content: center;
    }
    .icon-left,.icon-right{
        padding-top: .02rem;
    }
    .service-guarantee .title i{
        display: block;
        font-size: .24rem;
        height: .06rem;
        color: #EEEEEE;
    }
    .service-guarantee .title-info{
        margin: 0 .1rem;
        font-size: .3rem;
        font-weight: 400;
        color: #BEBEBE;
    }
    .service-guarantee .title-icon{
        display: flex;
        margin:.4rem 0 .34rem;
    }
    .service-guarantee .title-icon >div{
        flex: 1;
    }
    .service-guarantee .title-icon img{
        width: .64rem;
        height: .64rem;
    }
    .service-guarantee .title-icon p{
        font-size: .24rem;
        color: #9399a5;
    }
</style>