<script setup lang="ts">
useHead({
  title: "Financement – RevyFormation",
})
</script>

<template>
  <div class="page_financement">
    <section class="container max-lg:mt-14 mb-110 flex flex-col items-center justify-center">
      <h1 class="mb-10">Financement</h1>

      <div class="flex flex-col md:grid grid-cols-12 gap-4">
        <div class="financement">
          <h2 class="financement-title">Financement classique</h2>
          <p class="financement-description">(Permis à 1€, Aide au permis de Pôle Emploi, Aide au permis pour personnes handicapées...)</p>
          <buttons href="https://www.securite-routiere.gouv.fr/passer-son-permis-de-conduire/financement-du-permis-de-conduire" type="arrows">Plus d'information</buttons>

        </div>

        <div class="financement">
          <h2 class="financement-title">Financement CPF</h2>
          <p class="financement-description">Cette formation est éligible à MonCompteFormation. Vous pouvez utiliser votre CPF pour financer votre permis de conduire.</p>
          <buttons to="/tarifs" type="arrows">Plus d'information</buttons>

        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>