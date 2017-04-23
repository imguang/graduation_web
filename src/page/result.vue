<template>
<div>
  <div class="header">
    <a id="logo">
      <img src="../assets/logo.png" />
    </a>
    <el-input v-model="input" placeholder="请输入内容" @keyup.enter.native="searchJump"></el-input>
    <el-button type='primary' @click="searchJump">搜索</el-button>
  </div>
  <el-row class="container" v-if="entity" v-loading="isLoading" element-loading-text="拼命加载中">
    <el-col :sm="17" :xs="24">
      <section class="content">
        <interest v-if="entity.searchRelations.length" :searchRelations="entity.searchRelations"></interest>
        <p>为您找到实体：</p>
        <disease v-if="entity" :entity="entity"></disease>
        <!-- <p>
          对应的论文:
        </p> -->
      </section>
    </el-col>
    <el-col :sm="7" :xs="24">
      <div class="relative">
        <h3>
          相关疾病:
        </h3>
        <div class="relation-room">
          <el-tag type="primary">标签</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
        </div>
        <div class="relation-room">
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
        </div>
        <h3>
          相关症状：
        </h3>
        <div class="relation-room">
          <el-tag type="primary">标签</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
        </div>
        <div class="relation-room">
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
        </div>
        <h3>
          相关药品：
        </h3>
        <div class="relation-room">
          <el-tag type="primary">标签</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
        </div>
        <div class="relation-room">
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
        </div>
      </div>
    </el-col>
  </el-row>
</div>
</template>
<script>
import request from "../apis/libs/request.js"
import interest from "../components/interest.vue"
import disease from "../components/disease.vue"

export default {
  components: {
    interest,disease
  },
  data() {
    return {
      input: '',
      entity: '',
      isLoading: false
    }
  },
  methods: {
    searchJump(){
      this.$router.push(this.input);
    },
    searchItem() {
      var vm = this;
      vm.input = this.$route.params.query;
      vm.isLoading = true;
      request.get("search/item?words=" + vm.input, data => {
        vm.entity = data;
        vm.isLoading = false;
        console.log(data);
        if(!data){
          this.$notify({
          title: '警告',
          message: '没有找到任何东西',
          type: 'warning'});
        }
      });
    }
  },
  watch:{
    '$route': 'searchItem'
  },
  created() {
    this.input = this.$route.params.query;
    this.searchItem();
  }
}
</script>
<style>
ul,li,h2,dl,dt {
  margin: 0;
  padding: 0;
}

.header {
  top: 0px;
  left: 0px;
  right: 0px;
  position: fixed;
  width: 100%;
  min-width: 750px;
  padding: 10px 60px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  z-index: 100;
}

#logo img {
  padding-right: 10px;
  width: 40px;
  height: 40px;
  vertical-align: middle;
}

.content {
  padding: 0px 30px;
  border-left: 1px solid #e1e1e1;
}

.header .el-input {
  width: 480px;
}

.container {
  position: relative;
  top: 61px;
  padding: 0px 0px 30px 50px;
}

/*相关区域*/

.relative {
  border-left: 1px solid #e1e1e1;
  padding-left: 30px;
}

.relation-room {
  padding: 5px;
}
</style>
