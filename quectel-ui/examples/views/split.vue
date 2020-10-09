<template>
    <div class="demo-split">
        <q-split v-model="split1" v-bind:min="min1">
            <div slot="left" class="demo-split-pane">
                Left Pane
            </div>
            <div slot="right" class="demo-split-pane">
                Right Pane
            </div>
        </q-split>
    </div>
</template>
<script>
export default {
  data() {
    return {
      split1: 0.6,
      min1: '400px'
    }
  }
}
</script>
<style>
    .demo-split{
        height: 400px;
        border: 1px solid #dcdee2;
    }
    .demo-split-pane{
        padding: 10px;
    }
</style>
