import Vue from 'vue'
import MsgBox from './index'

export const messageBox = (function () {
    let MyComponent = Vue.extend(MsgBox)
    return function (opts) {
        var vm = new MyComponent({
            el : document.createElement('div'),
            data : {
                list:opts.list,
                activeIndex:opts.activeIndex,
            },
            methods : {
                handleCancel(){
                    opts.handleCancel && opts.handleCancel.call(this);
                    document.body.removeChild( vm.$el );
                },
                handleOk(index){
                    this.activeIndex = index;
                    opts.handleOk && opts.handleOk.call(this);
                    document.body.removeChild( vm.$el );
                }
            }
        });

        document.body.appendChild( vm.$el );
    }
})()