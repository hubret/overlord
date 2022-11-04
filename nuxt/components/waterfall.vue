<template>
  <div>
    <div class="waterfall">

    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  tasks: Array
})

</script>

<style>

.waterfall{
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
}

</style>