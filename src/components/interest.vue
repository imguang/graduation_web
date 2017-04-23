<template>
  <div id="interest">
    <p>您可能还感兴趣：<router-link v-for="elem in searchRelations" :to="elem">{{elem}}</router-link></p>
  </div>
</template>
<script>
export default {
  name: "interest",
  props: ['searchRelations'],
  data() {
    return {

    }
  }
}
</script>
<style scoped>
a{
  padding: 3px;
}
</style>
