<script setup lang="ts">
import Logo from "~/components/icon/logo.vue";
import Chevron from "~/components/icon/chevron.vue";
import Buttons from "~/components/buttons.vue";

let open: Object = ref(false);
let mobile : Object = ref(null);
let subMenu: Object = ref(false);

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

let mb : { text: string; link?: string, button?: boolean, more?: boolean, subItem?: Object }[] = [{
  text: 'Connexion',
  link: '/connexion',
},
  {
    text: 'Contact',
    link: '/contact'
  }]

let navMobile = navContent.concat(mb);

let openMenu = () => {
  open.value = !open.value;
  if(mobile) {
    mobile.value.classList.toggle('open')
    mobile.value.style.right = open.value ? '0%' : '-100%';
    document.body.classList.toggle('o');
  }
}
</script>

<template>
  <header>
    <nav>
      <router-link to="/" aria-label="Logo">
        <logo class="w-44 lg:w-60"></logo>
      </router-link>
      <div class="navbar-collapse">
        <span v-for="item in navContent" :key="item.text">
          <template v-if="item.link">
            <router-link class="navbar-item" :to="item.link">
              {{ item.text }}
            </router-link>
          </template>
          <template v-else>
            <div class="relative"><button class="navbar-item dropdown" @click="subMenu = !subMenu">
              {{ item.text }}
              <Chevron v-if="item.more" :direction="subMenu"/>
            </button>
            <div v-if="subMenu" class="sub-menu">
              <router-link class="navbar-item" v-for="sub in item.subItem" :key="sub.text" :to="sub.link">
                {{ sub.text }}
              </router-link>
            </div></div>
          </template>
        </span>

        <buttons to="/connexion">Connexion</buttons>
        <buttons to="/contact" :type="'border'">Contact</buttons>

      </div>
      <div class="navbar-collapse-mobile">
        <button class="burger" @click="openMenu()" aria-label="Menu" :aria-expanded="open">
          <span :class="{active: open}"></span>
          <span :class="{active: open}"></span>
          <span :class="{active: open}"></span>
        </button>

        <div ref="mobile" class="mobile-navbar">
                  <span v-for="item in navMobile" :key="item.text">
                    <template v-if="item.link">
                      <router-link class="navbar-item" :to="item.link" @click="openMenu()">
                        {{ item.text }}
                      </router-link>
                    </template>
                    <template v-else>
                      <button class="navbar-item dropdown w-full" @click="subMenu = !subMenu">
                        {{ item.text }}
                        <Chevron v-if="item.more" :direction="subMenu"/>
                      </button>
                    </template>
                      <router-link class="navbar-item" v-if="subMenu" v-for="sub in item.subItem" :key="sub.text" :to="sub.link" @click="openMenu()">
                        {{ sub.text }}
                      </router-link>
                  </span>
        </div>
      </div>
    </nav>
  </header>
</template>


<style scoped>

</style>