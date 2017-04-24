<template>
<div id="symptom">
  <el-card :body-style="{ padding: '8px 10px' }">
    <h1 class="title">{{entity.name}}</h1>
    <img :src="entity.imgUrl" class="diseaseImage" width="158" height="118">
    <p class="abstract" v-html="entity.abstractContent"></p>
    <div class="sub-title">
      <h2 class="title-text">相关内容</h2>
    </div>
    <el-collapse accordion v-model="expands">
        <el-collapse-item name="1">
          <template slot="title">
           病因
          </template>
          <div v-html="entity.cause">
          </div>
        </el-collapse-item>
        <el-collapse-item name="1">
          <template slot="title">
           预防
          </template>
          <div v-html="entity.prevent">
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "symptom",
  props: ['entity'],
  data() {
    return {
      expands:['1']
    }
  }
}
</script>
<style scoped>

.title {
  margin: 0 10px 0 0;
  font-size: 38px;
  line-height: 1.15;
  font-weight: 400;
  vertical-align: sub;
  color: #333;
}

.diseaseImage {
  float: left;
  padding: 12px 10px;
}

/*子标题*/

.sub-title {
  display: block;
  clear: both;
  zoom: 1;
  overflow: hidden;
  font-size: 20px;
  border-left: 12px solid #4F9CEE;
  line-height: 24px;
  font-size: 22px;
  font-weight: 400;
  font-family: Microsoft YaHei, SimHei, Verdana;
  margin: 35px 0 15px -10px;
  background: url(../assets/paraTitle-line_c5e6d61.png);
  position: relative;
}

.title-text {
  float: left;
  display: block;
  padding: 0 8px 0 18px;
  line-height: 24px;
  font-size: 22px;
  font-weight: 400;
  color: #000;
  background: #fff;
}
</style>
