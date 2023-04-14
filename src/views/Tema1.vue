<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Requisitos legales para los diferentes sistemas de gestión

    .row.justify-content-around.aling-items-center.mt-3
      .col-lg-10
        .bloque-texto-g.color-secundario.p-2.p-sm-4.p-md-5
          .b1.bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/t1-1.svg')})`}" data-aos="fade-right")
          .b1.bloque-texto-g__texto.p-4
            p Para comenzar, es importante decir que las normas ISO son componentes normativos aceptados a nivel internacional, propuestas por la Organización Internacional para la Estandarización, y aplicadas al diseño e implementación de sistemas de gestión organizacional a nivel público y privado; su objetivo principal se enfoca en el aseguramiento de la calidad, la seguridad y eficiencia en la producción o prestación de servicios que hacen parte de un portafolio empresarial. La aplicación de las normas ISO, contribuye a la efectividad en los procesos de generación de valor en las organizaciones que las apropian.

    .row.justify-content-center.mt-5
      p Estas normas son aplicables a cualquier sector, sin importar su actividad, aportando a la minimización de costos, la reducción de errores e incremento en la productividad. También velan por aumentar los niveles de satisfacción del cliente, a partir del cumplimiento de las expectativas de los usuarios. Además, aportan a la eliminación de barreras, asociadas al comercio internacional, a partir del concepto de ventaja competitiva.
      p De acuerdo con su enfoque, las normas ISO pueden clasificarse de la siguiente forma:
      .col-lg-10
        ImagenInfografica.color-acento-botones.mt-5
          template(v-slot:imagen)
            figure
              img(data-aos="flip-left" src='@/assets/curso/temas/tema1/t1-2.svg', alt='')

          .tarjeta.estilo-cajon.p-3(x="15.5%" y="31%" numero="1")
            p Su enfoque se fundamenta en la gestión de la calidad, haciendo especial énfasis en la satisfacción del cliente, la capacidad productiva y la eficiencia en la prestación de servicios, asegurando el cumplimiento de los requerimientos de la organización tanto a nivel interno, como externo.
          
          .tarjeta.estilo-cajon.p-3(x="76.3%" y="7%" numero="2")
            p Su enfoque se fundamenta en la gestión ambiental, permite gestionar los recursos de la organización, minimizando su impacto ambiental y asegurando el control de los residuos producto de su operación; propende por el mejoramiento en la imagen de la organización y el cumplimiento de las normativas y leyes vigentes, que se relacionan con aspectos medioambientales.

          .tarjeta.estilo-cajon.p-3(x="77.2%" y="86.2%" numero="3")
            p Desde el 2018, sustituyó a la OHSAS 18001; su enfoque se fundamenta en la seguridad y la salud en el trabajo y determina los requisitos mínimos a implementar, por parte de las organizaciones en su cotidianidad, con el fin de minimizar los riesgos laborales.

          .tarjeta.estilo-cajon.p-3(x="42.6%" y="94.3%" numero="4")
            p Su enfoque se fundamenta en centrarse en la reducción del consumo, minimización de la huella de carbono, así como también en la reducción de costos, promoviendo el uso de energías sostenibles y la eficiencia energética.

      .row.justify-content-center.mt-3
        p Los sistemas de gestión, contribuyen al alcance de los objetivos organizacionales y permiten identificar riesgos, así como también formular acciones preventivas, correctivas y de mejora, fomentando la sostenibilidad y el mejoramiento continuo.
        .col-lg-10.col-xs-6
          .cajon.color-1.p-4.mt-3
            p Las normas están cimentadas en unos principios básicos en los que se fundamenta todo el sistema de gestión de la calidad, desde un enfoque hacia los sistemas integrados y, a partir de esta lógica, se pretende facilitar la gestión e inclusión de las que se consideren pertinentes para la organización; estas normas poseen una estructura común denominada, de #[b alto nivel] de normas ISO, la cual facilita dicho proceso.

    .row.justify-content-center.mt-5
      p La estructura de alto nivel es una plantilla que permite el desarrollo de normas, conformada con unos títulos de capítulos idénticos y con el mismo número de artículos; y, por lo tanto, presenta la siguiente composición común:

      SlyderF(columnas="col-lg-6 col-xl-3").text-center
        .tarjeta.carrusel1.p-4
          .row.justify-content-center.mb-3
            .col-8
              img.mb-3(src='@/assets/curso/temas/tema1/t1-3.svg', alt='')
            p Alcance.
        
        .tarjeta.carrusel1.p-4
          .row.justify-content-center
            .col-8
              img.mb-3(src='@/assets/curso/temas/tema1/t1-4.svg', alt='')
            p Referencias normativas.

        .tarjeta.carrusel1.p-4
          .row.justify-content-center
            .col-8
              img.mb-3(src='@/assets/curso/temas/tema1/t1-5.svg', alt='')
            p Términos y definiciones.

        .tarjeta.carrusel1.p-4
          .row.justify-content-center
            .col-8
              img.mb-3(src='@/assets/curso/temas/tema1/t1-6.svg', alt='')
            p Contexto de la empresa.

        .tarjeta.carrusel1.p-4
          .row.justify-content-center
            .col-8
              img.mb-3(src='@/assets/curso/temas/tema1/t1-7.svg', alt='')
            p Liderazgo.

        .tarjeta.carrusel1.p-4
          .row.justify-content-center
            .col-8
              img.mb-3(src='@/assets/curso/temas/tema1/t1-8.svg', alt='')
            p Planificación.

        .tarjeta.carrusel1.p-4
          .row.justify-content-center
            .col-8
              img.mb-3(src='@/assets/curso/temas/tema1/t1-9.svg', alt='') 
            p Soporte.

        .tarjeta.carrusel1.p-4
          .row.justify-content-center
            .col-8
              img.mb-3(src='@/assets/curso/temas/tema1/t1-10.svg', alt='') 
            p Operación.

        .tarjeta.carrusel1.p-4
          .row.justify-content-center
            .col-8
              img.mb-3(src='@/assets/curso/temas/tema1/t1-11.svg', alt='')
            p Evaluación del desempeño.

        .tarjeta.carrusel1.p-4
          .row.justify-content-center
            .col-8
              img.mb-3(src='@/assets/curso/temas/tema1/t1-12.svg', alt='') 
            p Mejora.   

    .row.mt-5.justify-content-center.align-items-center.align-items-lg-stretch(data-aos="flip-right")
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema1/t1-13.svg", alt="")
      .col-lg-7
        p.mt-2 Es importante entender que la integración de los sistemas de gestión no solo obedece a la estructura, sino que también se incluyen conceptos comunes que facilitan su interacción, a partir de criterios que son compatibles entre sí.
        .cajon.color-2.p-4
          p Los requisitos legales y otros, son algunos de los elementos comunes considerados por la estructura de alto nivel de las normas ISO; dichos elementos se encuentran incluidos en los numerales “6.1.3 Determinación de los requisitos legales y otros requisitos” y “9.1.2 Evaluación del cumplimiento”; estos numerales son considerados de “gran complejidad” dado que implican la identificación de los requisitos y normas que sean aplicables, además de otros requisitos que se suscriban y la gestión de su cumplimiento.

    .row.justify-content-center.mt-2
      p.mb-5 Es así como parte fundamental del proceso de gestión de los requisitos legales, tiene que ver con su identificación, hecho que está definido y tipificado en la etapa de planificación, incluida como parte de la estructura de alto nivel. Con el fin de lograrlo, es necesario establecer, implementar y mantener procesos que contribuyan al cumplimiento de los requisitos legales, facilitando su acceso de forma sencilla y garantizando su actualización.
      .col-lg-4
          img(src='@/assets/curso/temas/tema1/t1-14.svg', alt='' data-aos="flip-left").mb-3
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Llevar")
            .col-12.ps-5
              p.mb-0 Llevar o mantener un registro único de requisitos legales que sean aplicables, de conformidad con los tipos de normas ISO implementadas en la organización.
          .row(titulo="Usar")
            .col-12.ps-5
              p La utilización de una matriz legal integrada, que sea actualizada de forma permanente.
          .row(titulo="Definir")
            .col-12.ps-5
              p.mb-0 Determinar la información documentada que deberá ser evidenciada, para garantizar el cumplimiento de los requisitos legales relacionados con el sistema de gestión, y dar cumplimiento a los requisitos legales bajo esta lógica.
          .row(titulo="Evitar")
            .col-12.ps-5
              p Prevenir la duplicidad de información a través del uso unificado de la información documentada, facilitando la alineación y los procesos comunicativos a nivel interno y externo, garantizando coherencia del sistema y la contribución de todos los miembros de la organización y sus sistemas de gestión, a una mejora continua.       

    .row.justify-content-center.mt-3
      .col-lg-10.col-xs-6
        .cajon.color-1.p-4
          p.mb-0 Teniendo en cuenta la estructura de alto nivel de las normas ISO y sus alcances, se expone ahora su verificación, la cual debe tener en cuenta el proceso de evaluación del desempeño, a partir del cual se lleva a cabo el seguimiento, medición, análisis y evaluación del cumplimiento de requisitos legales y de diversa naturaleza, con el fin de evitar incumplimientos y tomar acciones que propendan por el logro de los objetivos planteados por la organización, en la etapa de planificación.
      p.mt-3 El proceso de mejora continua de los sistemas de gestión, precisa de una revisión constante de la normativa vigente, además de la actualización de los otros requerimientos del sistema.
      p En relación con los procesos de mejora continua, la identificación, evaluación y seguimiento de las obligaciones legales y demás obligaciones, permite a las organizaciones:


    .row.justify-content-center.mt-3
      .col-lg-6
        TabsA.color-secundario
          .tarjeta.color-acento-botones--borde.p-4(titulo="Formular<br> acciones")
            p Formular acciones de mejora, basadas en el cumplimiento de la normativa vigente y aplicable, haciendo uso de las herramientas tendientes a la identificación y evaluación de la ejecución, además de los diferentes tipos de reportes relacionados con la medición de estas acciones.
                
          .tarjeta.color-acento-botones--borde.p-4(titulo="Brindar<br> garantías")
            p Ofrecer una garantía con respecto al cumplimiento de la normativa asociada a los sistemas de gestión y al desarrollo de procesos de mejora continua; de esta manera, las organizaciones estarán encaminadas hacia la obtención de resultados positivos en caso de auditorías o evaluaciones, a nivel interno y externo.

      .col-lg-4
        img.img-a.img-t(src='@/assets/curso/temas/tema1/t1-15.svg', alt='' data-aos="flip-left").mb-3  

    .row.justify-content-center.mt-5
      ul.vineta-titulos(data-aos="fade-down-left")
        li
          h2.mb-0.h2-vineta Empresa

    .row.mt-2.justify-content-center.align-items-center.align-items-lg-stretch
      p Es entonces que se hace necesario definir la palabra empresa, la cual, según Ramírez (2009), se trata de una acción valerosa y difícil que se efectúa para alcanzar un determinado objetivo, bien sea social, económico, político, o simplemente por una curiosidad personal (p.15).
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema1/t1-16.svg", alt="" data-aos="flip-left")
      .col-lg-7
        p.mt-2 Es a partir de la época industrial, que el concepto se transformó, adaptándose como una actividad humana enfocada a la producción de bienes o a la prestación de servicios, abarcando los diferentes procesos que esto implica.
        p Con la aparición y auge de la ciencia administrativa, se homologaron el vocablo empresa y el de organización por tener lugar en ambas, el proceso administrativo. Entonces se comenzó a hablar de administración de empresas (Ramírez, 2009, p.16).

      p.mt-5 Para conocer la clasificación de las empresas, lo invitamos a ver el siguiente video:

      .video
        iframe(data-aos="fade-left" width="560" height="315" src="https://www.youtube.com/embed/J__rpYeLGlU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
