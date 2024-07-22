<script setup lang="ts">
import Papa from 'papaparse';

let csv: any = ref([]);
let splideRef = ref(null);


fetch('https://maxsteel.karibsen.fr/image/9881c3272092daf43108f6ff485a4e60.csv')
    .then((response) => response.text())
    .then((data) => {
      let s = Papa.parse(data, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
      });
      csv.value = s.data;
    });

</script>

<template>
  <div class="page_home">
    <section class="container">
      <div class="grid grid-cols-12">
        <div class="col-span-6 px-5 flex flex-col gap-4">
          <h1>Obtenez votre permis dans votre auto-école à Troyes</h1>

          <p class="mt-10 mb-5">L’auto-école RevyFormation vous accompagne vers l’obtention de votre permis en vous
            proposant une formation adaptée à vos besoins. Nos moniteurs vous accompagnent dans votre apprentissage de
            la
            conduite pour vous permettre de passer votre permis en toute sérénité.


          </p>

          <div class="flex gap-4">
            <buttons>Prendre rendez-vous</buttons>
            <buttons type="border">Nos tarifs</buttons>
          </div>
        </div>
        <div class="col-span-6">
          <img src="https://via.placeholder.com/500x250" alt="Image de voiture"
               class="w-full h-full object-cover rounded-lg">
        </div>
      </div>
    </section>

    <section class="container py-5 rounded-t-3xl">
      <h2 class="text-center">Nos offres <span class="lighter_text">populaires<span class="lighter"></span></span></h2>

      <div class="grid grid-cols-12 gap-4 mt-10">
        <card :title="'Conduite Accompagnée'" :subtitle="'à un prix de 1390€'"
              :image="{img: 'https://www.mma.fr/files/live/sites/mmafr/files/Zeroblabla/articles/mon-vehicule/MMA_Conduite_accompagnee_AAC_897x505.jpg', alt: 'Conduite accompagnée'}"></card>
        <card :title="'Conduite Supervisée'" :subtitle="'à un prix de 1390€'"
              :image="{img: 'https://www.permisecole.com/wp-content/uploads/2018/06/conduite-supervisee.jpg', alt: 'Conduite supervisée'}"></card>
        <card :title="'Permis B 20h'" :subtitle="'à un prix de 1190€'"
              :image="{img: 'https://i0.wp.com/seo.lepermislibre.fr/wp-content/uploads/2018/10/re%CC%81cupe%CC%81rer-permis-conduire.jpg?fit=1000%2C530&ssl=1', alt: 'Permis B 20h'}"></card>
        <card :title="'Permis B 30h'" :subtitle="'à un prix de 1590€'"
              :image="{img: 'https://i0.wp.com/seo.lepermislibre.fr/wp-content/uploads/2018/10/re%CC%81cupe%CC%81rer-permis-conduire.jpg?fit=1000%2C530&ssl=1', alt: 'Permis B 30h'}"></card>

      </div>
    </section>

    <section class="p-8 rounded-xl">
      <h2 class="text-center mb-10">Comment payer vos forfaits ?</h2>

      <div class="flex justify-center space-x-4">

        <div class="pay">
          <NuxtImg
              src="https://lh6.googleusercontent.com/proxy/tXfLhabwt67u4fRYFVQ-O3M1PsMDLdzuMHbw-jnFDD2OGz0gA2LbViZBtdeb4ThTSZkvC52myRelQ4OE5q2yEHu4fjm6iurFQy7MDx-WOVmKEZTdJBuF4EtQWwpZUGcUcQ"
              alt="Logo CPF" width="100"/>

          <h3>Espèces/Carte bleue</h3>
          <p>Pour l'espèce: Paiement en 1 ou 2 fois sans frais<br>Pour la carte bleue: Paiement en 3 ou 4 fois sans
            frais</p>

          <buttons type="arrow">Payer votre forfait</buttons>

        </div>

        <div class="pay">
          <NuxtImg
              src="https://www.perspective-formation.fr/wp-content/uploads/2019/11/Logo-Mon-Compte-Formation-Appli-CPF.jpg"
              alt="Logo CPF" width="100"/>

          <h3>Compte CPF</h3>

          <p>Découvrez les formations éligibles pour financer votre permis de conduire.</p>

          <buttons type="arrow">Découvrir le CPF</buttons>
        </div>
      </div>

    </section>


    <section id="avis" class="mb-110">
      <div class="container"><h2 class="text-center">Plus de 50 élèves satisfaits</h2></div>
      <div class="flex mt-10">

        <Splide class="px-5" ref="splideRef" @splide:ready="onReady($event)"
                :options="{ perPage: 3, perMove: 3, arrows: false, pagination: false, fixedWidth: 'auto', gap: 20, type: 'loop', autoplay: true, interval: 10000 }"
                aria-labelledby="My Favorite Images"
        >
          <SplideSlide v-for="item in csv" :key="item.id">
            <avis :key="item.id" :nom="item.name" :note="item.note" :description="item.description"></avis>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>