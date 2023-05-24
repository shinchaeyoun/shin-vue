<template>
  <div id="wrap">
    <HeaderView/>
    <MainSectionView/>
    <FooterView/>
  </div>
</template>

<script>
import HeaderView from './views/HeaderView.vue'
import MainSectionView from './views/MainSectionView.vue'
import FooterView from './views/FooterView.vue'

export default {
  components: {
    HeaderView,
    MainSectionView,
    FooterView
  }
}
</script>
