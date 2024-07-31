<script setup lang="ts">

</script>

<template>
  <div class="page_taif">
    <section class="container max-lg:mt-14 flex flex-col items-center justify-center">
      <h1 class="mb-10">Choissiez la formule qui vous convient!</h1>
      <p class="text-center mb-16">Nous sommes ravis de vous présenter nos tarifs actuels de manière claire et
        détaillée, afin que vous puissiez choisir la formule qui correspond le mieux à vos besoins et à votre budget.
        Nous comprenons que chaque client est unique et que ses besoins peuvent varier. C'est pourquoi nous proposons
        une gamme diversifiée de forfaits adaptés à différentes exigences.</p>

      <div class="filter">

      </div>

      <h2 class="text-center mb-10">Formules : Permis de conduire</h2>

      <div class="formules">
        <formule class="col-span-4" tag="Code + Conduite" description="Formule 1" :price="1000" :fao="true" :falc="true" :cpf="true"
                 :cdl="true"></formule>
        <formule class="col-span-4" tag="Conduite Accompagnée" description="Formule 1" :price="1390" :fao="true" :falc="true"
                 :cdl="true" :rdv="true" :features="['1 er RDV pédagogique 1000km (non inclus)', '2ème RDV Pédagogique 3000km (non inclus)']"></formule>
        <formule class="col-span-4" tag="Conduite Supervisée" :cpf="true" description="Formule 1" :price="1390" :fao="true" :falc="true"
                 :cdl="true" :rdv="true" ></formule>
        <formule class="col-span-4" tag="Formation Accélérée en 30j (20h)" description="Formule 1" :price="1595" :fao="true" :falc="true" :sp="true" :priority="true"></formule>
        <formule class="col-span-4" tag="Formation Accélérée en 30j (30h)" description="Formule 1" :price="1595" :fao="true" :falc="true" :sp="true" :priority="true"></formule>


      </div>
    </section>

    <section class="container mb-110">
      <h2 class="text-center mb-10">Comment payer vos forfaits&nbsp;?</h2>


      <div class="pay_items">
        <div class="pay">
          <NuxtImg
              src="https://lh6.googleusercontent.com/proxy/tXfLhabwt67u4fRYFVQ-O3M1PsMDLdzuMHbw-jnFDD2OGz0gA2LbViZBtdeb4ThTSZkvC52myRelQ4OE5q2yEHu4fjm6iurFQy7MDx-WOVmKEZTdJBuF4EtQWwpZUGcUcQ"
              alt="Logo CPF" width="100"/>

          <h3>Espèces/Carte bleue</h3>
          <p>Pour l'espèce: Paiement en 1 ou 2 fois sans frais<br>Pour la carte bleue: Paiement en 3 ou 4 fois sans
            frais</p>

          <buttons type="arrows">Payer votre forfait</buttons>

        </div>

        <div class="pay">
          <NuxtImg
              src="https://www.perspective-formation.fr/wp-content/uploads/2019/11/Logo-Mon-Compte-Formation-Appli-CPF.jpg"
              alt="Logo CPF" width="100"/>

          <h3>Compte CPF</h3>

          <p>Découvrez les formations éligibles pour financer votre permis de conduire.</p>

          <buttons type="arrows">Découvrir le CPF</buttons>
        </div>
      </div>

    </section>
  </div>
</template>

<style scoped>

</style>