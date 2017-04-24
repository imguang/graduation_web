<template>
<div id="disease">
  <el-card :body-style="{ padding: '8px 10px' }">
    <h1 class="title">{{entity.diseaseName}}</h1>
    <img :src="entity.imgUrl" class="diseaseImage" width="158" height="118">
    <p class="abstract">{{entity.abstractContent}}</p>
    <div class="sub-title">
      <h2 class="title-text">疾病常识</h2>
    </div>
    <div class="basic-info cmn-clearfix">
      <dl class="basicInfo-block basicInfo-left">
        <dt class="basicInfo-item name">易感人群</dt>
        <dd class="basicInfo-item value">
          {{entity.susceptiblePopulation}}
        </dd>
        <dt class="basicInfo-item name">患病比例</dt>
        <dd class="basicInfo-item value">
          {{entity.sicknessRate}}
        </dd>
        <dt class="basicInfo-item name">传染方式</dt>
        <dd class="basicInfo-item value">
          {{entity.infectionMode}}
        </dd>
        <dt class="basicInfo-item name">医保疾病</dt>
        <dd class="basicInfo-item value">
          {{entity.isInsurance}}
        </dd>
      </dl>
      <dl class="basicInfo-block basicInfo-right">
        <dt class="basicInfo-item name">就诊科室</dt>
        <dd class="basicInfo-item value">
          {{entity.departments}}
        </dd>
        <dt class="basicInfo-item name">治疗周期</dt>
        <dd class="basicInfo-item value">
          {{entity.treatmentCycle}}
        </dd>
        <dt class="basicInfo-item name">治疗费用</dt>
        <dd class="basicInfo-item value">
          {{entity.treatmentCost}}
        </dd>
        <dt class="basicInfo-item name">治愈率</dt>
        <dd class="basicInfo-item value">
          {{entity.recoveryRate}}
        </dd>
      </dl>
    </div>
    <div class="sub-title">
      <h2 class="title-text">相关内容</h2>
    </div>
    <el-collapse accordion v-model="expands">
        <el-collapse-item name="1">
        <template slot="title">
          治疗方案
        </template>
        <div v-html="entity.treatmentDetail">
        </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
           病因
          </template>
          <div v-html="entity.etiology">
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
           预防
          </template>
          <div v-html="entity.prevent">
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
           护理
          </template>
          <div v-html="entity.nursing">
          </div>
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

/*baseinfo*/
div.basic-info {
  font: 12px/1.5 arial, '\5b8b\4f53', sans-serif;
}

.basic-info {
  margin: 20px 0 35px;
  clear: both;
  background: url(../assets/basicInfo-bg_7819f20.png);
}

.basic-info .basicInfo-block {
  width: 357px;
  float: left;
}

.basic-info .basicInfo-block .basicInfo-item.name {
  width: 90px;
  padding: 0 5px 0 12px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  color: #999;
}

.basic-info .basicInfo-block .basicInfo-item {
  line-height: 26px;
  display: block;
  padding: 0;
  margin: 0;
  float: left;
}

.basic-info .basicInfo-block .basicInfo-item.value {
  zoom: 1;
  color: #333;
  width: 250px;
  float: left;
  position: relative;
}

.basic-info .basicInfo-block .basicInfo-item {
  line-height: 26px;
  display: block;
  padding: 0;
  margin: 0;
  float: left;
}

.cmn-clearfix:after {
  content: '\0020';
  display: block;
  height: 0;
  font-size: 0;
  clear: both;
  overflow: hidden;
  visibility: hidden;
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
