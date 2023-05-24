<template>
  <header>
    <div class="header_wrap">
      <div class="date">
        <div id="current_date"></div>
        <div class="clock_wrap">
          <span id="clock">clock</span>
          <span id="apm">ampm</span>
        </div>
      </div>

      <div class="title">
        title
      </div>

      <div class="onoff" data-hover>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>

    <div class="header_cate">
      <ul>
        <li class="itme" v-for="itme in nav" :key="itme.id">
          <router-link :to="itme.link">
            <nav-item :id="itme.id" :title="itme.title"></nav-item>
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import NavItem from '../components/NavItem.vue'

export default {
  components: {
    NavItem
  },
  data () {
    return {
      nav: [
        {
          link: '/',
          title: '1'
        },
        {
          link: 'introduce',
          title: '2'
        },
        {
          link: 'like',
          title: '3'
        },
        {
          link: 'career',
          title: '4'
        },
        {
          link: 'portfolio',
          title: '5'
        },
        {
          link: 'contact',
          title: '6'
        }
      ]
    }
  },
  methods: {
    dateFn () {
      // eslint-disable-next-line no-array-constructor
      const week = new Array('Sunday,', 'Monday,', 'Tuesday,', 'Wednesday,', 'Thursday,', 'Friday,', 'Saturday,')
      // eslint-disable-next-line no-array-constructor
      const month = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December')
      const date = new Date()
      const year = date.getFullYear()
      const day = date.getDate()
      document.getElementById('current_date').innerHTML =
      "<span style='padding-right:5px;'>" +
      week[date.getDay()] +
      '</span>' +
      month[date.getMonth()] +
      "<span style='padding-left:5px;'>" +
      day +
      '</span>' +
      ',' +
      "<span style='padding-left:5px;'>" +
      year +
      '</span>'
      const Target = document.getElementById('clock')
      const TargetApm = document.getElementById('apm')

      function clock () {
        const time = new Date()
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        let AmPm = 'AM'
        if (hours > 12) {
          AmPm = 'PM'
          hours %= 24
        }

        Target.innerText =
          `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`

        TargetApm.innerText = `${AmPm}`
      };
      clock()
      setInterval(clock, 1000)
    }
  },
  mounted () {
    this.loading = setInterval(this.dateFn, 1000)
  }
}
</script>
