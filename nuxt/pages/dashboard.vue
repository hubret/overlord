<template>
  <div>
    <Feed :tasks="tasks.data"></Feed>
    <!-- {{tasks}} -->
  </div>
</template>

<script setup>

const view = ref("");

definePageMeta({
  middleware: "auth",
  layout: "authed",
})

const {find} = useStrapi()

const {data: tasks} = await useAsyncData(()=>{
  return find('tasks', {populate: ['project']})
})

</script>