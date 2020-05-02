<template>
  <div class="footer-link">
    <ul class="footer-link__ul">
      <first-link />
      <second-link />
      <third-link />
      <fourth-link />
    </ul>
  </div>
</template>

<script>

import FirstLink from './links/first.vue'
import SecondLink from './links/second.vue'
import ThirdLink from './links/third.vue'
import FourthLink from './links/fourth.vue'

export default {
  name: 'Footer-link',
  components: {
      FirstLink,
      SecondLink,
      ThirdLink,
      FourthLink
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>
.footer-link {
  margin: 0 10px;
}
.footer-link__ul {
  list-style: none;
}
</style>
