<template>
  <div id="home">
    <div class="main flex">
      <div class="left">left</div>
      <div class="right">right</div>
    </div>

    <section v-for="item in this.$store.state.mainMenu" :key="item" :id="item.name">{{ item.describe }}</section>
  </div>
  </template>

<script>
export default {
  data () {
    return {
      isMounted: false
    }
  },
  mounted () {
    this.isMounted = true
    console.log('mounted', this.$store.state.mainMenu.length)

    // if (this.isMounted === true) {
    //   this.moveToMenu()
    // }
    this.emitter.on('moveToSection', (item) => {
      console.log('moveToSection')
      // console.log('home-movetosection')
      // console.log('item', item)
      // const thisItem = item[0]
      const sections = document.querySelectorAll('section')

      console.log('sections', sections)
    // for (let i = 0; i < sections.length; i++) {
    //   if (sections[i].id === thisItem) {
    //     const sectionTop = sections[i].offsetTop
    //     console.log('sectionTop', sectionTop)
    //     window.scrollTo({ top: sectionTop, left: 0, behavior: 'smooth' })
    //   }
    // }
    })
  },
  methods: {
    // setToMove (item) {
    //   console.log('set to move', item)
    //   // const thisItem = item[0]
    //   // const sections = document.querySelectorAll('section')

    //   // for (let i = 0; i < sections.length; i++) {
    //   //   if (sections[i].id === thisItem) {
    //   //     const sectionTop = sections[i].offsetTop
    //   //     console.log('sectionTop', sectionTop)
    //   //     window.scrollTo({ top: sectionTop, left: 0, behavior: 'smooth' })
    //   //   }
    //   // }
    // },
    // moveToMenu (item) {
    //   // console.log('Move to menu methods')
    //   // this.setToMove(item)
    //   this.emitter.on('moveToSection', (item) => {
    //     // console.log('move to section function move to menu')
    //     this.setToMove(item)
    //     // const thisItem = item[0]
    //     // const sections = document.querySelectorAll('section')

    //   // for (let i = 0; i < sections.length; i++) {
    //   //   if (sections[i].id === thisItem) {
    //   //     const sectionTop = sections[i].offsetTop
    //   //     console.log('sectionTop', sectionTop)
    //   //     window.scrollTo({ top: sectionTop, left: 0, behavior: 'smooth' })
    //   //   }
    //   // }
    //   })
    //   // console.log('move to menu', document.querySelectorAll('section'))
    //   // console.log('move fn item', item)

    //   // const thisItem = item[0]
    //   // const sections = document.querySelectorAll('section')

    //   // for (let i = 0; i < sections.length; i++) {
    //   //   if (sections[i].id === thisItem) {
    //   //     const sectionTop = sections[i].offsetTop
    //   //     console.log('sectionTop', sectionTop)
    //   //     window.scrollTo({ top: sectionTop, left: 0, behavior: 'smooth' })
    //   //   }
    //   // }
    // }
  }
}
</script>
