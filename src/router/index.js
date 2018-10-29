import Vue from 'vue'
import Router from 'vue-router'
import chinese from '@/components/chinese/chinese'
import named from '@/components/named/named'
import keyrecognition from '@/components/abstractkey/keyrecognition'
import grarecognition from '@/components/grammar/grarecognition'
import classify from '@/components/recognition/classify'
import PinyinRecognition from '@/components/pinyin/PinyinRecognition'
import emotion from '@/components/emotion/emotion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/chinese',
      name: 'chinese',
      component: chinese
    },
    {
      path: '/named',
      name: 'named',
      component: named
    },
    {
      path: '/keyrecognition',
      name: 'keyrecognition',
      component: keyrecognition
    },
    {
      path: '/grarecognition',
      name: 'grarecognition',
      component: grarecognition
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/PinyinRecognition',
      name: 'PinyinRecognition',
      component: PinyinRecognition
    },
    {
      path: '/emotion',
      name: 'emotion',
      component: emotion
    }
  ]
})
