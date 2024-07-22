<script setup lang="ts">

import Logo from "~/components/icon/logo.vue";
import Chevron from "~/components/icon/chevron.vue";
import Buttons from "~/components/buttons.vue";

let navContent: { text: string; link?: string, button?: boolean, more?: boolean, subItem?: Object }[] = [
  {
    text: 'Services', more: true, subItem: [
      {text: "Code de la route", link: "/code"},
      {text: "Conduite", link: "/conduite"},
    ]
  },
  {text: "Tarifs", link: "/tarifs"},
  {text: 'Financement', link: '/financement'},
  {text: 'Réservation', link: '/reservation'},
];
</script>

<template>
  <header>
    <nav>
      <div>
        <logo></logo>
      </div>
      <div class="navbar-collapse">
        <router-link class="navbar-item" v-for="item in navContent" :key="item.text" :to="item.link">
          {{ item.text }}
          <Chevron v-if="item.more" :direction="true"/>
        </router-link>

        <buttons>Connexion</buttons>
        <buttons :type="'border'">Contact</buttons>

      </div>
    </nav>
  </header>

</template>

<style scoped>

</style>