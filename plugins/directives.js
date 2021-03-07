import Vue from 'vue'
import {
    renderRichText
} from '~/helpers/renderRichText'

Vue.directive('rich-text', {
    bind: (el, binding, vnode) => {
        try {
            el.innerHTML = renderRichText(binding.value, vnode.context.$storyapi)
        } catch (err) {
            throw err
        }
    }
})