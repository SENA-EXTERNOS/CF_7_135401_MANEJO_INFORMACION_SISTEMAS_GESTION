<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch(data-aos="flip-right")
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/introduccion.svg", alt="Texto que describa la imagen")
      .col-lg-7
        p.mt-2 Apreciado aprendiz, bienvenido a este componente formativo, donde se le brindarán conocimientos en relación con los requisitos legales vinculados a la aplicación de las normas de los sistemas de gestión, haciendo especial énfasis en la gestión de la calidad, la gestión ambiental y la gestión de seguridad y salud en el trabajo, normas que han sido armonizadas, con el fin de ser integradas en un solo sistema que aporte una respuesta a sus solicitudes.
        p El contenido abordará los elementos técnicos y normativos, además de presentar condiciones para el desarrollo de herramientas que permitan sustentar los sistemas de gestión, en pro de garantizar la eficiencia y la eficacia de la organización en la que se implementan los SG, bien sea a nivel individual, o integrados.
      
      p.mt-3.mb-0 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

    .row
      .video
        iframe(data-aos="fade-left" width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
