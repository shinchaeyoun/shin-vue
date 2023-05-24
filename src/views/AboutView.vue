<template>
  <div class="about">
    <HelloAbout>This is an about page</HelloAbout>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloAbout from '@/components/HelloAbout.vue'

export default {
  name: 'HomeView',
  components: {
    HelloAbout
  }
}
</script>
