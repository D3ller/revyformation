<script setup lang="ts">
let submitForm = () => {
  alert('Votre message a bien été envoyé !');
}
</script>

<template>
  <div class="page_contact">
    <section class="container max-lg:mt-14 flex flex-col items-center mb-110">
<h1>Contactez-nous !</h1>
      <form class="contact_form" @submit.prevent="submitForm">
        <div class="col-span-6 md:col-span-3">
<inputs label="Nom" placeholder="Entrez votre nom"></inputs>
        </div>
        <div class="col-span-6 md:col-span-3">
<inputs label="Prénom" placeholder="Entrez votre prénom"></inputs>
        </div>
        <div class="col-span-6">
<inputs label="Adresse mail" type="mail" placeholder="Entrez votre adresse mail"></inputs>
        </div>
        <div class="col-span-6">
          <inputs class="h-60" label="Message" placeholder="Entrez votre message" :inputortextarea="false"></inputs>
        </div>

        <div class="col-span-6">
          <buttons type="submit" class="w-fit">Envoyer</buttons>
        </div>
      </form>
    </section>
  </div>

</template>

<style scoped>

</style>