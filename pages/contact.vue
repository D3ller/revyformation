<script setup lang="ts">
let submitForm = () => {
  alert('Votre message a bien été envoyé !');
}

useHead({
  title: "Contact – RevyFormation",
})

let contactInfo : Object = ({
  name: null,
  firstname: null,
  email: null,
  message: null,
})
</script>

<template>
  <div class="page_contact">
    <section class="container max-lg:mt-14 flex flex-col items-center mb-110">
<h1>Contactez-nous !</h1>
      <form class="contact_form" @submit.prevent="submitForm">
        <div class="col-span-6 md:col-span-3">
<inputs label="Nom" placeholder="Entrez votre nom" @update:value="contactInfo.name = $event"></inputs>
        </div>
        <div class="col-span-6 md:col-span-3">
<inputs label="Prénom" placeholder="Entrez votre prénom" @update:value="contactInfo.firstname = $event"></inputs>
        </div>
        <div class="col-span-6">
<inputs label="Adresse mail" type="mail" placeholder="Entrez votre adresse mail" @update:value="contactInfo.email = $event"></inputs>
        </div>
        <div class="col-span-6">
          <inputs class="h-60" label="Message" placeholder="Entrez votre message" :inputortextarea="false" @update:value="console.log(contactInfo)"></inputs>
        </div>

        <div class="col-span-6">
          <buttons type="submit" class="w-fit">Envoyer</buttons>
        </div>

        <ul class="col-span-6 mt-10">
          <li><b>Adresse :</b> 14 Rue du Colonel Driant, 10000 Troyes</li>
          <li><b>Téléphone :</b> 03.25.40.49.94</li>
          <li><b>Mail :</b> contact@revyformation.fr</li>
        </ul>

        <div class="col-span-6 mt-10">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d394.58196886734146!2d4.068431365932266!3d48.29476347545822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ee999eff5a019d%3A0x411d9cb283d4d051!2sAuto-%C3%A9cole%20RevyFormation!5e0!3m2!1sfr!2sfr!4v1722443819480!5m2!1sfr!2sfr" class="w-full" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </form>


    </section>
  </div>

</template>

<style scoped>

</style>