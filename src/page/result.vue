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
    <el-col :sm="16" :xs="24">
      <section class="content">
        <interest v-if="entity.searchRelations.length" :searchRelations="entity.searchRelations"></interest>
        <p>为您找到实体：</p>
        <disease v-if="isDisease" :entity="entity"></disease>
        <symptom v-if="isSymptom" :entity="entity"></symptom>
        <medicine v-if="isMedicine" :entity="entity"></medicine>
        <p>相关文献：</p>
        <el-collapse accordion>
            <el-collapse-item name="1">
              <template slot="title">
                中文文献：
              </template>
              <p v-if="!entity.papers.length">
                没有相关论文
              </p>
              <paper v-if="entity.papers.length" :papers="entity.papers"></paper>
            </el-collapse-item>
            <el-collapse-item name="2">
              <template slot="title">
                英文文献：
              </template>
              <p v-if="!entity.papersEN.length">
                没有相关论文
              </p>
              <paperEN v-if="entity.papersEN.length" :papers="entity.papersEN"></paperEN>
            </el-collapse-item>
          </el-collapse>

      </section>
    </el-col>
    <el-col :sm="8" :xs="24">
      <div class="relative">
        <div class="echarts">
          <IEcharts :option="bar" :loading="loading" @ready="onReady" @click="onClick"></IEcharts>
        </div>
        <div class="relation-room">
          <h3>
            相关疾病:
          </h3>
          <p v-if="!entity.diseaseRelations.length">
            没有相关疾病
          </p>
          <el-card :body-style="{ padding: '0px' }" v-for="elem in entity.diseaseRelations" :key='elem.graphId'>
            <router-link :to="elem.name">
              <img :src="elem.imgUrl" class="image" width="118" height="118">
              <div style="padding: 7px;text-align: center">
                <span>{{elem.name}}</span>
              </div>
            </router-link>
          </el-card>
        </div>

        <div class="relation-room" v-if="isDisease">
          <h3>
            相关症状：
          </h3>
          <p v-if="!entity.symptomRelations.length">
            没有相关症状
          </p>
          <el-card :body-style="{ padding: '0px'}" v-for="elem in entity.symptomRelations" :key='elem.graphId'>
            <router-link :to="elem.name">
              <img :src="elem.imgUrl" class="image" width="118" height="118">
              <div style="padding: 7px;text-align: center">
                <span>{{elem.name}}</span>
              </div>
            </router-link>
          </el-card>
        </div>
        <div class="relation-room" v-if="isDisease">
          <h3>
            相关药品：
          </h3>
          <p v-if="!entity.medicineRelations.length">
            没有相关药品
          </p>
          <el-card :body-style="{ padding: '0px' }" v-for="elem in entity.medicineRelations" :key='elem.graphId'>
            <router-link :to="elem.name">
              <div v-html="elem.imgUrl" class="relation-medicine-img">
              </div>
              <div style="padding: 7px;text-align: center">
                <span>{{elem.name}}</span>
              </div>
            </router-link>
          </el-card>
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
import symptom from "../components/symptom.vue"
import medicine from "../components/medicine.vue"
import paper from "../components/paper.vue"
import paperEN from "../components/paperEN.vue"
import IEcharts from 'vue-echarts-v3';

export default {
  components: {
    interest,
    disease,
    symptom,
    medicine,
    IEcharts,
    paper,
    paperEN
  },
  data() {
    return {
      input: '',
      entity: '',
      isLoading: false,
      loading: false,
      bar: {
        title: {
          text: '相关实体',
        },
        tooltip: {},
        series: [{
          type: 'graph',
          layout: 'force',
          draggable: 'true',
          force: {
            repulsion: 180,
            edgeLength: [60,120]
          },
          categories: [{
            name: '疾病',
            symbol: 'circle',
            symbolSize: 70
          }, {
            name: '症状',
            symbol: 'circle',
            symbolSize: 60
          }, {
            name: '药品',
            symbol: 'circle',
            symbolSize: 60
          }],
          data: [],
          links: [],
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          }
        }],
        legend: [{
          bottom: 10,
          right:10,
          data: ['疾病','症状','药品']
        }],
      }
    }
  },
  computed: {
    isDisease() {
      if (!this.entity) {
        return false;
      }
      if (this.entity.flag == 'disease')
        return true;
      return false;
    },
    isSymptom() {
      if (!this.entity) {
        return false;
      }
      if (this.entity.flag == 'symptom')
        return true;
      return false;
    },
    isMedicine() {
      if (!this.entity) {
        return false;
      }
      if (this.entity.flag == 'medicine')
        return true;
      return false;
    }
  },
  methods: {
    searchJump() {
      this.$router.push(this.input);
    },
    searchItem() {
      var vm = this;
      vm.input = this.$route.params.query;
      vm.isLoading = true;
      request.get("search/item?words=" + vm.input, data => {
        vm.entity = data;

        let val = data;
        let name = val.diseaseName ? val.diseaseName : val.name;
        let series = vm.bar.series[0];
        let sedata = [];
        let links = [];
        sedata.push({
          'name': name,
          symbolSize: 50,
          itemStyle:{
            normal:{
              color:'#ca8622'
            }
          }
        })
        for(var i=0;i < val.diseaseRelations.length;i++){
          if(i > 10){
            break;
          }
          var item = val.diseaseRelations[i];
          sedata.push({
            name: item.name,
            symbolSize: 40,
            category: 0
          });
          links.push({
            'source': name,
            target: item.name,
            value:80
          });
        }

        if (val.flag == 'disease') {
          val.symptomRelations.forEach(function(val, index) {
            sedata.push({
              name: val.name,
              symbolSize: 30,
              category: 1
            });
            links.push({
              'source': name,
              target: val.name,
              value:100
            });
          });
          val.medicineRelations.forEach(function(val, index) {
            sedata.push({
              name: val.name,
              symbolSize: 30,
              category: 2
            });
            links.push({
              'source': name,
              target: val.name,
              value:120
            });
          });
        }
        series.data = sedata;
        series.links = links;


        let papers = vm.entity.papers;
        let words = vm.entity.words;
        for(var i=0;i < papers.length;i++){
          for(var j=0;j < words.length;j++){
            papers[i].title = papers[i].title.replace(words[j],"<em class='insert'>"+ words[j] +"</em>");
            papers[i].abstracts = papers[i].abstracts.replace(words[j],"<em class='insert'>"+ words[j] +"</em>");
          }
        }
        vm.isLoading = false;
        console.log(data);
        if (!data) {
          this.$notify({
            title: '警告',
            message: '没有找到任何东西',
            type: 'warning'
          });
        }
      });
    },
    onReady(instance) {
      console.log(instance);
    },
    onClick(event, instance, echarts) {
      console.log(arguments);
    }
  },
  watch: {
    '$route': 'searchItem'
  },
  created() {
    this.input = this.$route.params.query;
    this.searchItem();
  }
}
</script>
<style>
ul,
li,
h2,
dl,
dt {
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

.imgContainer .fl {
  width: 158px;
  height: 118px;
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

/*相关区域块*/

.echarts {
  height: 397px;
}

.relative .el-card {
  width: 118px;
  display: inline-block;
  vertical-align: top;
  margin: 5px;
}

.relation-medicine-img .fl {
  width: 118px;
  height: 118px;
}

/*相关区域*/

.relative {
  border-left: 1px solid #e1e1e1;
  padding-left: 30px;
}

.relation-room a {
  text-decoration: none;
  color: #34495e;
}
</style>
