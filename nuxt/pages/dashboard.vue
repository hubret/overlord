<template>
  <div>
    Dashboard. App time.
  </div>
</template>

<script setup>

definePageMeta({
  middleware: "auth",
  layout: "authed",
})

</script>