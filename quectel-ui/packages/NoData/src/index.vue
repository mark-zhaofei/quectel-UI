<template>
  <div>
    <div class="center">
      <img v-if="showImg" :src="nodata">
      <div class="mt5 h18 color-subTitle">{{$t('message.noData')}}~~</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'QNoData',
  components: {},
  props: {
    showImg: {
      type: Boolean,
      default: () => {
        return true
      }
    }
  },
  data() {
    return {
      nodata: 'https://hbimg.huabanimg.com/e40b41be2824d1eceb252132910fdd9f268da1d865be3-fqlOeH_fw658/format/webp'
    }
  },
  computed: {
  },
  methods: {},
  mounted() {
  },
  watch: {
  }
}
</script>

<style lang="scss">
</style>
