<script>
export default {
  name: "JobDetails",
  props: ['id'],
  // data(){
  //   return {
  //     id: this.$route.params.id,
  //   }
  // }
}
</script>

<template>
  <h1>Job Details Page</h1>
  <p>The job id is {{ id }}</p>
</template>

<style scoped>

</style>