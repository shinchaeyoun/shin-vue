export default {

  install (Vue) {
    // [getSum 함수 설정]
    Vue.config.globalProperties.$getSum = function (one, two) {
      return one + two
    }
  }
}
