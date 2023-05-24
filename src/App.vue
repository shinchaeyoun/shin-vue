<template>
  <div id="wrap">
    <HeaderView/>
    <MainView/>
    <FooterView/>
  </div>
</template>

<script>
import HeaderView from './views/HeaderView.vue'
import MainView from './views/MainView.vue'
import FooterView from './views/FooterView.vue'

export default {
  components: {
    HeaderView,
    MainView,
    FooterView
  }
}
</script>
