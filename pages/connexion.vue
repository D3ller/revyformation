<script setup lang="ts">
definePageMeta({
  layout: 'admin',
})
</script>

<template>
  <div class="page_connexion">
    <section class="grid grid-cols-12 mt-0 w-full min-h-screen">
      <div class="col-span-5 bg-primary h-full w-full">

      </div>
      <div class="col-span-7">
        <div class="connexion_container"><div><h1>Se connecter</h1>
          <p class="mb-6">Connectez-vous pour accéder à votre espace personnel.</p>
          <div class="flex flex-col gap-4 max-w-sm">
            <inputs type="email" label="Adresse mail" placeholder="Entrez votre adresse mail"></inputs>
            <inputs type="password" label="Mot de passe" placeholder="Entrez votre mot de passe"></inputs>
            <router-link to="/forgot-password" class="links self-end">Mot de passe oublié ?</router-link>
            <buttons type="submit" class="w-fit">Se connecter</buttons>
          </div>
        </div>

        </div>
      </div>

    </section>
  </div>
</template>

<style scoped>

</style>