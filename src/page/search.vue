<template>
<div class='center-container'>
  <el-row class="logo">
    <img src="../assets/logo.png" :hidden="hidden2" width="200" height="200"/>
    <img src="../assets/logo2.jpg" :hidden="hidden1" width="200" height="200"/>
  </el-row>
  <el-row>
    <el-col :span="12" :offset="6" class="input-row">
      <el-input v-model.trim="input" placeholder="请输入内容" size='large' @keyup.enter.native='submit' @focus="changeLogo" @blur="changeLogo">
        <el-button slot="append" icon="search" @click="submit"></el-button>
      </el-input>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      hidden1: true,
      hidden2: false
    }
  },
  methods: {
    submit() {
      this.$router.push({
        name: 'result',
        params: {
          query: this.input
        }
      })
    },
    changeLogo(){
      this.hidden1 = !this.hidden1;
      this.hidden2 = !this.hidden2;
    }
  }
}
</script>
<style scoped>
.center-container {
  margin-top: 100px;
  text-align: center;
}
.center-container .logo {
  margin-bottom: 30px
}
</style>
