<script setup lang="ts">
const client = useSupabaseClient()
const user = useSupabaseUser()

const logout = async () => {
  await client.auth.signOut()
  navigateTo('/login')
}
</script>

<template>
  <div :toggle="false">
    <div>
      <UButton
        label="Source"
        target="_blank"
        variant="link"
        color="neutral"
        to="https://github.com/nuxt-modules/supabase/tree/main/demo"
        icon="i-lucide-external-link"
      />
      <UButton
        label="Hosted on Vercel"
        target="_blank"
        variant="link"
        color="neutral"
        to="https://vercel.com"
        icon="i-lucide-external-link"
        class="hidden sm:flex"
      />
    </div>

    <div>
      <div variant="link" />

      <UButton
        v-if="user"
        variant="link"
        color="gray"
        @click="logout"
      >
        Logout
      </UButton>
    </div>
  </div>
</template>
