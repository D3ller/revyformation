<script setup lang="ts">
import CheckMark from "~/components/icon/check-mark.vue";
import Danger from "~/components/icon/danger.vue";

let props = defineProps({
  tag: {
    type: String,
    required: true
  },
description: {
    type: String,
    required: true
  },
price: {
    type: Number,
    required: true
  },
features: {
    type: Array,
    required: false
  },
  fao: {
    type: Boolean,
    default: false
  },
  cdl: {
    type: Boolean,
    default: false
  },
  falc: {
    type: Boolean,
    default: false
  },
  cpf: {
    type: Boolean,
    default: false
  },
  rdv: {
    type: Boolean,
    default: false
  },
  sp: {
    type: Boolean,
    default: false
  },
  priority: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
<div class="formule">
<div class="tag">{{tag}}</div>

  <div v-if="priority" class="bg-[#ffebe9] p-4 rounded mb-5 flex items-center justify-center gap-2">
    <danger fill="#ff5a5f"></danger>
    <p class="text-center text-primary">
      Prioritaire sur planning & examens
    </p>
  </div>

  <h2 class="formule-price">{{price}}€</h2>

  <div class="formule-separator"></div>

  <div v-if="fao || cpf">
    <ul class="formule-features-list">
      <li class="formule-features-item" v-if="fao"><check-mark></check-mark> Frais administratifs offerts</li>
      <li class="formule-features-item" v-if="cpf"><check-mark></check-mark>Eligible Compte CPF</li>
    </ul>

    <div class="formule-separator"></div>
  </div>

<div v-if="cdl">
  <h3 class="formule-subtitle">Code de la route</h3>
    <ul class="formule-features-list">
      <li class="formule-features-item"><check-mark></check-mark> Code en salle illimité</li>
      <li class="formule-features-item"><check-mark></check-mark> Code en ligne (pack web)</li>
      <li class="formule-features-item"><check-mark></check-mark> 2 cours de code avec enseignant (durée : 1 heure)</li>
      <li class="formule-features-item"><check-mark></check-mark> 1 livre de code</li>
    </ul>

    <div class="formule-separator"></div>
</div>

<div v-if="falc">
  <h3 class="formule-subtitle">Formation à la conduite</h3>
    <ul class="formule-features-list">
      <li class="formule-features-item"><check-mark></check-mark> 20 heures de conduite</li>
      <li class="formule-features-item"><check-mark></check-mark> Formation théorique (en ligne)</li>
      <li class="formule-features-item"><check-mark></check-mark> Outils pédagogiques (en ligne)</li>
      <li class="formule-features-item"><check-mark></check-mark> 1 Accompagnement à l'examen</li>
      <li v-if="rdv" class="formule-features-item"><check-mark></check-mark> RDV au préalable</li>
      <li v-if="sp" class="formule-features-item"><check-mark></check-mark> Suivi personalisé</li>
    </ul>

    <div class="formule-separator"></div>
</div>



  <div class="formule-features" v-if="features">
    <ul class="formule-features-list">
      <li v-for="feature in features" :key="feature" class="formule-features-item"><check-mark></check-mark>{{feature}}</li>
    </ul>

    <div class="formule-separator"></div>
  </div>

  <div v-if="priority">
    <ul class="formule-features-list">
      <li class="formule-features-item"><check-mark></check-mark>Place limitées à 3 candidats / mois</li>
    </ul>
  </div>

  <div class="mt-5">
    <buttons>En savoir plus</buttons>
  </div>

</div>
</template>

<style scoped>

</style>