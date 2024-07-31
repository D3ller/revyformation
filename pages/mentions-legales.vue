<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
let hostname : string = window.location.hostname;

useHead({
  title: "Mentions légales – RevyFormation",
})
</script>

<template>
  <div class="page_mentions-legales">
    <section class="container max-lg:mt-14 mb-110 flex flex-col items-center justify-center">
      <h1>Mentions légales</h1>

        <div class="parts">
          <div class="parts-item"><h2>Propriétaire</h2>

            <ul>
              <li><b>Nom commercial :</b> RevyFormation</li>
              <li><b>Forme juridique :</b> EURL, entreprise unipersonnelle à responsabilité limitée</li>
              <li><b>Inscrite au RCS de :</b> TROYES avec un capital de <b>5000€</b></li>
              <li><b>Adresse:</b> 14 RUE COLONEL DRIANT, 10000 TROYES</li>
              <li><b>Téléphone :</b> 06 52 52 52 52</li>
              <li><b>SIREN:</b> 889273744</li>
              <li><b>Agrément N°:</b> E 21 010 00010</li>
              <li><b>Numéro de TVA:</b> FR77889273744</li>
              <li><b>Gérant/Responsable de la publication:</b> Bouni Wiliam</li>
            </ul>
          </div>

          <div class="parts-item">
            <h2>Hébergeur</h2>
            <ul>
              <li><b>Nom :</b> OVH</li>
              <li><b>Adresse :</b> 2 rue Kellermann - 59100 Roubaix - France</li>
              <li><b>Téléphone :</b> 1007</li>
              <li>La politique de <b>{{ hostname }}</b> est en conformité avec la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.</li>
            </ul>
          </div>

          <div class="parts-item">
            <h2>Conception</h2>
            <ul>
              <li>Le site à été conçu et est maintenue par <b>Corentin NELHOMME</b></li>
              <li><b>Téléphone :</b> 07********</li>
              <li><b>Site :</b> <a href="https://karibsen.fr">karibsen.fr</a></li>
              <li><b>Webmaster : </b>Corentin NELHOMME - <a href="mailto:contact@karibsen.fr">contact@karibsen.fr</a></li>
            </ul>
          </div>

          <div class="parts-item">
            <h2>Limitation de responsabilité</h2>
            <ul>
              <li>
                L'auto-école {{runtimeConfig.public.name}} ne pourra être tenue responsable des dommages directs ou indirects causés à l’utilisateur ou à son matériel lors de l’accès au site, ni des conséquences résultant de l’utilisation des informations fournies.
              </li>
            </ul>
          </div>

          <div class="parts-item">
            <h2>Informations</h2>

            <ul>
              <li>Le site {{hostname}}  est la propriété de l'auto-école {{runtimeConfig.public.name}}</li>
            </ul>
          </div>




        </div>
    </section>
  </div>
</template>

<style scoped>

</style>