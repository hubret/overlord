<template>
  <main>
    {{project}}
    <h1>
      {{project[0].attributes.name}}
    </h1>
  </main>
</template>

<script setup>

const {find} = useStrapi()

const route = useRoute();

const {data: project} = await useAsyncData(()=>{
  return find('projects', {filters: {slug: route.params.project}}).then((res=>{
    return res.data
  }))
})

</script>
