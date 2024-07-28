<script setup lang="ts">
import Logo from "~/components/icon/logo.vue";
import Chevron from "~/components/icon/chevron.vue";
import Buttons from "~/components/buttons.vue";

let open: Object = ref(false);

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
      <router-link to="/">
        <logo class="w-44 lg:w-60"></logo>
      </router-link>
      <div class="navbar-collapse">
        <router-link class="navbar-item" v-for="item in navContent" :key="item.text" :to="item.link">
          {{ item.text }}
          <Chevron v-if="item.more" :direction="true"/>
        </router-link>

        <buttons to="/login">Connexion</buttons>
        <buttons to="/contact" :type="'border'">Contact</buttons>

      </div>
      <div class="navbar-collapse-mobile">
        <button class="burger" @click="open = !open">
          <span :class="{active: open}"></span>
          <span :class="{active: open}"></span>
          <span :class="{active: open}"></span>
        </button>
      </div>
    </nav>
  </header>

</template>

<style scoped>

</style>