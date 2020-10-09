<template>
	<div class="anchor-wrapper">
		<div class="link-wrapper">
            <Button @click="changeCon">修改为Window</Button>
            <Button @click="andLink">添加一个连接</Button>
			<Anchor @on-change="handleChange" @on-select="handleSelect" :style="{right: '100px'}" :affix="true" :offset-top="100" :scroll-offset="10" :container="scrollCon" show-ink>
				<AnchorLink v-for="link in 100" :key="`link${link}`" :href="`#title-${link}`" :title="`title-${link}`">
                    <AnchorLink :scroll-offset="20" v-if="link === 61" href="#title-child-69" title="title-child-69"/>
                </AnchorLink>
                <AnchorLink :scroll-offset="200" href="#lishi" title="李氏专跳"/>
                <AnchorLink v-if="showNewLink" href="#new-link" title="这是动态添加的连接"/>
			</Anchor>
		</div>
		<div v-if="con === 'div'" ref="listWrapper" id="listWrapper" class="list-wrapper">
            <div style="height: 100px;"></div>
            <template v-for="i in 300">
                <h1 :key="`h1${i}`" :id="`title-${i}`">{{ `title-${i}` }}</h1>

            </template>
            <h1 id="lishi">李氏专跳</h1>
            <p v-for="i in 100" :key="`chinese-${i}`">这是信息司大是大非胜多负少的{{i}}</p>
            <!-- <h1 id="new-link">这是新添加的哦哦哦哦哦 哦 </h1>
            <p v-for="i in 50" :key="`new-${i}`">这是信息司大是大非胜多负少的{{i}}</p> -->
        </div>
        <div v-else>
            <template v-for="i in 100">
                <h1 :key="`h1${i}`" :id="`title-${i}`">{{ `title-${i}` }}</h1>
            </template>
            <h1 id="new-link">这是新添加的哦哦哦哦哦 哦 </h1>
            <p v-for="i in 50" :key="`new-${i}`">这是信息司大是大非胜多负少的{{i}}</p>
            <h1 id="lishi">李氏专跳</h1>
            <p v-for="i in 50" :key="`chinese-${i}`">这是信息司大是大非胜多负少的{{i}}</p>
        </div>

	</div>
</template>
<script>
export default {
  data() {
    return {
      container: null,
      value1: '1',
      scrollCon: '',
      con: 'div',
      showNewLink: false
    }
  },
  methods: {
    changeCon() {
      this.con = 'window'
      this.scrollCon = undefined
    },
    handleChange(newHref, oldHref) {
      console.log(`${oldHref} => ${newHref}`)
    },
    handleSelect(href) {
      console.log(`select ${href}`)
    },
    andLink() {
      this.showNewLink = true
    }
  },
  mounted() {
    this.scrollCon = this.$refs.listWrapper
  }
}
</script>
<style lang="scss">
.anchor-wrapper{
	.link-wrapper{
		position: absolute;
		right: 100px;
		width: 200px;
	}
    .list-wrapper{
        height: 600px;
        overflow: auto;
    }
}
</style>
