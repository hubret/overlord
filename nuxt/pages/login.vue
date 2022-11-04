<template>
  <div>
    login
    <form @submit.prevent="onSubmit">
      <input name="identifier" type="text" v-model="form.identifier">
      <input name="password" type="password" v-model="form.password">
      <input type="submit">
    </form>
  </div>
</template>

<script setup>

definePageMeta({
  layout: "marketing",
})

const { login } = useStrapiAuth()
const router = useRouter()


const form = ref({});


// login logic
const onSubmit = async () => {
  try {
    await login(form.value)
    router.push('/dashboard')
  } catch (e) {
    console.log('login fail')
    console.log(e)
  }
}

</script>