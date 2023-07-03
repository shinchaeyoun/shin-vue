<template>
  <header>
    <div class="logo">
      <a @click="moveToTop">
        logo
      </a>
    </div>

    <nav>
      <ul class="gnb left_nav" ref="menu" @click="onAClick">
        <li><div id="brand_story">left_memu1</div></li>
        <li><div id="production_process">left_memu2</div></li>
        <li><div id="event">left_memu3</div></li>
        <li><div id="store">left_memu4</div></li>
        <li><div id="footer" @click="moveToFooter">left_memu5<span class="memo">footer</span></div></li>
        <div @click="moveToSupport">
          <a>
            support
            <span class="link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 11L11 5" stroke="black" stroke-linecap="square" stroke-linejoin="round"></path>
                <path d="M4.66699 4.66667H11.3337V11.3333" stroke="black" stroke-linecap="square"></path>
              </svg>
            </span>
            <span class="memo">링크연결</span>
          </a>
        </div>

        <!-- https://www.instagram.com/ -->
        <div><a target="_blank">
            instagram
            <span class="link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 11L11 5" stroke="black" stroke-linecap="square" stroke-linejoin="round"></path>
                <path d="M4.66699 4.66667H11.3337V11.3333" stroke="black" stroke-linecap="square"></path>
              </svg>
            </span>
            <span class="memo">링크연결</span></a></div>
        <span class="memo">링크연결 제외 메뉴는 클릭시 해당 영역으로 이동</span>
      </ul>

      <ul id="right_nav" class="right_nav">
        <li class="menu">
          <ul v-for="item in menu" :key="item.id">
            <li :id="item.id" @click="setSubmenuHeight" @mouseenter="doMouseOver(item)" @mouseleave="doMouseLeave(item)">
              <a href="#">{{ item.mainTitle }}</a>

              <transition name="fade">
                <ul class="sub_menu" v-if="item.menuHover">
                  <li v-for="subMenu, subIdx in item.subTitle" :key="subIdx"><a href="#" class="hover-underline">{{ subMenu
                  }}</a></li>
                </ul>
              </transition>
            </li>
          </ul>
          <!-- <ul v-for="item in menu" :key="item.id">
            <li :id="item.id" @click="setSubmenuHeight" @mouseenter="isActive = item.id" @mouseleave="isActive = !item.id">
              <a href="#">{{ item.mainTitle }}</a>
              <ul class="sub_menu" :style="{height:item.subTitle.length}" :class="{ active: item.id === isActive }">
                <li v-for="subMenu, subIdx in item.subTitle" :key="subIdx"><a href="#" class="hover-underline">{{ subMenu }}</a></li>
              </ul>
            </li>
          </ul> -->
        </li>

        <hr>

        <li class="customer">
          <ul>
            <li><a href="#">Login</a></li>
            <li><a href="#">Cart (0)</a></li>
            <li><a href="#">Search</a></li>
          </ul>
        </li>
      </ul>
    </nav>

    <div class="mobile_nav">
      <ul>
        <li class="burger">
          <span></span>
          <span></span>
          <span></span>
        </li>
      </ul>
    </div>

    <div class="side_menu" style="display: none;">
      <div class="wrap">
        <ul>
          <li class="menu">
            <ul>
              <li><a href="./menu.html">Menu1</a></li>
              <li><a href="./menu2.html">Menu2</a></li>
              <li><a href="#">Menu3</a></li>
            </ul>
          </li>

          <hr>

          <li class="gnb">
            <ul>
              <li><a href="#brand_story">브랜드스토리</a></li>
              <li><a href="#production_process">제조과정</a></li>
              <li><a href="#event">이벤트</a></li>
              <li><a href="#store">매장위치</a></li>
              <li><a href="#footer">연락 <span class="memo">사실상 푸터</span></a></li>
              <li><a href="#">
                  고객지원
                  <span class="link">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 11L11 5" stroke="black" stroke-linecap="square" stroke-linejoin="round"></path>
                      <path d="M4.66699 4.66667H11.3337V11.3333" stroke="black" stroke-linecap="square"></path>
                    </svg>
                  </span>
                </a></li>
              <li><a href="#">
                  인스타그램
                  <span class="link">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 11L11 5" stroke="black" stroke-linecap="square" stroke-linejoin="round"></path>
                      <path d="M4.66699 4.66667H11.3337V11.3333" stroke="black" stroke-linecap="square"></path>
                    </svg>
                  </span>
                </a></li>
            </ul>
          </li>

          <hr>

          <li class="customer">
            <ul>
              <li><a href="#">Login</a></li>
              <li><a href="#">Cart (0)</a></li>
              <li><a href="#">Search</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import uniqueId from 'lodash.uniqueid'

export default {
  data () {
    return {
      isActive: undefined,
      menuHover: false,
      menu: [
        {
          id: uniqueId('menu'),
          mainTitle: 'right_memu',
          subTitle: ['sub menu', 'sub menu', 'sub menu']
        },
        {
          id: uniqueId('menu'),
          mainTitle: 'right_memu',
          subTitle: ['sub menu', 'sub menu']
        }
      ]
    }
  },
  methods: {
    doMouseOver: function (item) {
      item.menuHover = true
      // let subLength
      // let subMenu
      for (let i = 0; i < this.menu.length; i++) {
        // subLength = this.menu[i].subTitle.length
        // subMenu = e.target.offsetHeight
        // console.log(subMenu * subLength)
      }
      // console.log('this.menuHover', this)
    },
    doMouseLeave: function (item) {
      item.menuHover = false
    },
    setSubmenuHeight (e) {

    },
    onAClick (e) {
      if (e.target.nodeName === 'DIV' && e.target.id !== 'footer') {
        this.$router.push({ path: '/' })
        this.emitter.emit('moveToSection', e.target.id)
        console.log('if')
      }
    },
    moveToTop () {
      this.$router.push({ path: '/' })
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    },
    moveToFooter () {
      this.emitter.emit('moveToFooter')
    },
    moveToSupport () {
      this.$router.push({ path: '/support' })
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }
}
</script>
