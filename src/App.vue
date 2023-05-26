<template>
  <div id="wrap">
    <HeaderView/>

    <router-view></router-view>

    <FooterView/>
  </div>
</template>

<script>
import HeaderView from './views/HeaderView.vue'
import FooterView from './views/FooterView.vue'

export default {
  components: {
    HeaderView,
    FooterView
  },
  setup () {
    const test = document.getElementsByClassName('onoff')
    console.log('hi setup', test)
  }
}
</script>
