<template>
  <div>
    <div class="center">
      <div class="imgDiv">
        <img v-if="showImg" :src="img || nodata">
      </div>
      <div class="noData">{{$t('message.noData')}}~~</div>
    </div>
  </div>
</template>
<script>
import nodata from './nodata.png'
export default {
  name: 'QNoData',
  components: {},
  props: {
    showImg: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    img: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data() {
    return {
      nodata
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

<style lang="scss" scoped>
.center{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .imgDiv{
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    img{
      margin: 0 auto;
      width: auto;
      height: auto;
      max-width: 200px;
      max-height: 200px;
    }
  }

}
.noData{
  padding: 10px;
  text-align: center;
}
</style>
