<template>
<div id="medicine">
  <el-card :body-style="{ padding: '8px 10px' }">
    <h1 class="title">{{entity.name}}</h1>
    <div v-html="entity.imgUrl" class='imgContainer'>
    </div>
    <p class="abstract">{{entity.function}}</p>
    <div class="sub-title">
      <h2 class="title-text">药品说明</h2>
    </div>
    <el-collapse v-model="expands" >
        <el-collapse-item name="1">
          <template slot="title">
           成分
          </template>
          <div v-html="entity.conponent">
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
           用法用量
          </template>
          {{entity.usageDosage}}
        </el-collapse-item>
        <el-collapse-item name="3">
        <template slot="title">
          注意事项
        </template>
        {{entity.mattersNeedAttention}}
        </el-collapse-item>
        <el-collapse-item name="4">
        <template slot="title">
          禁忌
        </template>
        {{entity.contraindication}}
        </el-collapse-item>
        <el-collapse-item name="5">
          <template slot="title">
           不良反应
          </template>
          {{entity.untowardEffect}}
        </el-collapse-item>
        <el-collapse-item name="6">
          <template slot="title">
           药物相互作用
          </template>
          {{entity.interaction}}
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "disease",
  props: ['entity'],
  data() {
    return {
      expands:['1','2']
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

.imgContainer {
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
