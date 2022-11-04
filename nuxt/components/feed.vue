<template>
  <div>
    <table>
      <tr>
        <th>
          Task
        </th>
        <th>
          Project
        </th>
        <th>
          Due date
        </th>
      </tr>
      <tr v-for="task in tasks">
        <td>
          {{task.attributes.name}}
        </td>
        <td>
          <nuxt-link :to="`/projects/${task.attributes.project.data.attributes.slug}`">
            {{task.attributes.project.data.attributes.name}}
          </nuxt-link>
        </td>
        <td>
          {{task.attributes.due}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>

const props = defineProps({
  tasks: Array
})

</script>

<style>

table, th, td {
  border: 1px solid;
  text-align: left;
}

table{
  width: 100%;
}

</style>