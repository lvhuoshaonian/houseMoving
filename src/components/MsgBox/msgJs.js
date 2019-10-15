import Vue from 'vue'
import MsgBox from './index'

export const messageBox = (function() {
    let MyComponent = Vue.extend(MsgBox)
    return function(opts) {
        var vm = new MyComponent({
            el: document.createElement('div'),
            data: {
                animFlag: false,
                list: opts.list,
                activeIndex: opts.activeIndex,
            },
            methods: {
                handleCancel() {
                    this.animFlag = true;
                    this.yanChi()
                },
                handleOk(index) {
                    this.animFlag = true;
                    this.activeIndex = index;
                    this.yanChi()
                },
                yanChi() {
                    setTimeout(() => {
                        this.animFlag = false;
                        opts.handleOk && opts.handleOk.call(this);
                        document.body.removeChild(vm.$el);
                    }, 100);
                }
            }
        });

        document.body.appendChild(vm.$el);
    }
})()