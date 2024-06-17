<script>
export default {
  name: "Jobs",
  data() {
    return {
      jobs: [
        {title: "UIUX", id: 1, details: "lorem"},
        {title: "Web Developer", id: 2, details: "lorem"},
        {title: "Vue Developer", id: 3, details: "lorem"},
      ]
    }
  },
}
</script>

<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <router-link :to="{ name: 'jobs.detail', params: { id: job.id } }">
      {{ job.title }}
    </router-link>
  </div>
</template>

<style scoped>

</style>