<template>
<div id="paper">
  <div v-for="(elem,index) in papers" :key='elem.graphId' class="paper-item">
    <div class="paper-title"><span class="index">{{index + 1}}.</span><span v-html="elem.title"></span><span class="cited">(被引用{{elem.citedNum}}次)</span></div>
    <div class="paper-subtitle">{{elem.publisher}}-{{elem.publishYear}}年 {{elem.author}}</div>
    <div class="paper-abstract"><span v-html="elem.abstracts"></span></div>
    <div class="paper-tags">
      <el-tag v-for="tag in elem.keyWords.split(';')" type="primary" class="tag-item">{{tag}}</el-tag>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "paper",
  props: ['papers','words'],
  data: function data() {
    return {
      isActive: false
    }
  }
}
</script>
<style>
.paper-item{
  border-bottom: 1px dotted #ccc;
  padding: 16px 0 16px 18px;
}
.paper-title {
  font-weight: 700;
  font-size: 14px;
  color: #2876d7;
  margin-bottom: 10px;
}
span.index{
  color: #444851;
  margin-right: 6px;
}

span.cited{
  margin-left: 6px;
  color: #65686f;
  font-weight: 300;
}

.paper-subtitle {
  line-height: 240%;
  color: #2a6eb7;
  font-size: 12px;
}

.paper-abstract {
  line-height: 240%;
  color: #444851;
  font-size: 12px;
}


.paper-tags {
  color: #999;
}

.tag-item{
  margin-right:3px;
}

.insert{
  color: #ff8a61 !important;
  font-style: normal !important;
  font-weight: 400 !important;
}
</style>
