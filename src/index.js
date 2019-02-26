import Vue from 'vue'
import MsmButton from './MsmButton.vue'

export default {
    install(Vue, options) {
        Vue.component('msm-button', MsmButton)
    }
}