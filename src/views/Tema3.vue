<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Norma ISO 9001:2015, Norma ISO 14001:2015 y Norma ISO 45001:2018

    .row.justify-content-center.align-items-center.align-items-lg-stretch
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema3/t3-1.svg", alt="" data-aos="flip-up").mb-3
      .col-lg-7
        p Comencemos con la norma ISO 9001, la cual se fundamenta en un estándar internacional de aplicabilidad para todo tipo de empresas, sin importar su tamaño o actividad económica; dicho estándar ha sido apropiado alrededor del mundo, otorgando resultados confiables en términos de mejoramiento continuo, para las organizaciones que lo implementan. Su función consiste en especificar los requerimientos básicos para realizar el diseño e implantación de un Sistema de Gestión de la Calidad, permitiendo identificar buenas prácticas de la organización, para su gestión y aplicación en diversas áreas. La práctica de la norma puede tener como objetivo, el mejoramiento a nivel interno y la obtención de una certificación, todo depende del interés de la organización que la implementa.

    .row.justify-content-center.mt-3
      p Esta norma establece los requisitos que deben cumplir una empresa o una organización, para poner en marcha un Sistema de Gestión de la Calidad, hecho que le aporta a las instituciones:
      .col-lg-10
        .row.justify-content-center.mt-3
          .col-lg-8
            TabsA.color-secundario
              .tarjeta.colorTab.p-3(titulo="Beneficios")
                .row.p-4
                  .col-auto
                    p Elementos de valor para demostrar su capacidad para proveer de manera regular, productos y/o servicios que cumplan a cabalidad con los requisitos y expectativas de sus clientes, con la normativa o disposiciones legales, además de los reglamentarios, aplicables a la empresa en cuestión.
                    
              .tarjeta.colorTab.p-3(titulo="Rentabilidad")
                .row.p-4
                  .col-auto
                    p Incremento en los niveles de satisfacción de los clientes, apalancada en la eficacia del Sistema de Gestión de la Calidad, que define, ejecuta y hace seguimiento a los procesos relacionados con la mejora continua del sistema, así como el aseguramiento de la conformidad, con base en los requisitos legales y reglamentarios, aplicables.

          .col-lg-4
            img(src='@/assets/curso/temas/tema3/t3-2.svg', alt='' data-aos="flip-left").mb-3  

    .row.justify-content-around.aling-items-center.mt-3
      .col-lg-10
        .bloque-texto-g.color-secundario.p-2.p-sm-4.p-md-5
          .b3.bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/t3-3.svg')})`}" data-aos="fade-right")
          .b3.bloque-texto-g__texto.p-4
            p Una adecuada implementación de los sistemas de gestión de la calidad, permite a las organizaciones ampliar su nivel de impacto en términos de satisfacción de los clientes, dado que el diseño de sus objetivos se enfoca en tener en cuenta sus necesidades y expectativas, volcando todos su esfuerzos en el diseño y oferta de productos o servicios con características orientadas al cumplimiento de normativa y reglamentos aplicables, garantizando una oportuna atención a requerimientos y solicitudes de los clientes, con especial énfasis en los procesos de mejoramiento continuo. El cumplimiento de dichos criterios, garantiza el fortalecimiento de la relación con el público, la generación de confianza y mayores niveles de preferencia hacia la marca, asegurando un gran potencial para obtener un espacio especial en el imaginario colectivo y, por ende, el crecimiento sostenido de sus productos y servicios en el mercado.

    .row.justify-content-center.mb-3.mt-5.mb-4
      p La gestión de la calidad, permite a las organizaciones disminuir ostensiblemente los niveles de improvisación, dada la exigencia de mantener la trazabilidad en todos los procesos que se desarrollan; de esta manera, es posible identificar situaciones de riesgo relacionadas con los procesos y establecer planes de acción que sean aplicables, tanto en situaciones de normalidad, como en momentos de adversidad, pero siempre con una orientación hacia la optimización, la eficiencia y la eficacia. Desde la concepción de gestión de la calidad, el enfoque no se limita a la planificación, sino que, a través de la implementación del ciclo PHVA, se determinan y establecen mecanismos que garanticen un constante seguimiento y control que se repita siempre, en la mejora continua de los procesos y del sistema.
      p La aplicación de la norma ISO 9001 en una organización, se convierte en un procedimiento importante, gracias a tres hechos que se deben tener en cuenta:
        .col-lg-10
          .row
            .col-sm-6.col-lg-4.mb-4.mb-lg-0
              .t3.tarjeta-avatar
                img(src='@/assets/curso/temas/tema3/t3-4.svg' alt='AvatarTop')
                .tarjeta.tarjeta--amarilla-1.p-5
                  p.mt-3 Generar mayor confiabilidad en la organización y diferenciación de marca, por parte de sus grupos de interés.
            
            .col-sm-6.col-lg-4.mb-4.mb-lg-0
              .t3.tarjeta-avatar
                img(src='@/assets/curso/temas/tema3/t3-5.svg' alt='AvatarTop')
                .tarjeta.tarjeta--amarilla-1.p-5
                  p.mt-3 Brindar mayores niveles de estabilidad, crecimiento y sostenibilidad, a la organización y a sus procesos.
            
            .col-sm-6.col-lg-4.mb-4.mb-lg-0
              .t3.tarjeta-avatar
                img(src='@/assets/curso/temas/tema3/t3-6.svg' alt='AvatarTop')
                .tarjeta.tarjeta--amarilla-1.p-5
                  p.mt-3 Fomentar el involucramiento, participación y liderazgo, por parte de los funcionarios de la organización.

    .row.justify-content-center.mt-4
      .col-lg-8.col-xs-6
        .cajon.color-2.p-4.mt-2
          p.mb-0 Es entonces, que la estructura de la norma ISO 9001, establece diferentes numerales que se constituyen en guía para el diseño e implementación de un Sistema de Gestión de la Calidad, que aporte al desarrollo de la organización.

    .row.justify-content-center.mt-5
      ul.vineta-titulos(data-aos="fade-down-left")
        li
          h2.mb-0.h2-vineta Norma ISO 14001:2015

      .col-lg-5.mt-3
        figure
          img(src="@/assets/curso/temas/tema3/t3-7.svg", alt="" data-aos="flip-up")
      .col-lg-7.mt-3
        p Es importante conocer los estándares internacionales que se han definido en relación con los procesos encaminados hacia la gestión ambiental, que tienen como objetivo, de acuerdo con el texto consignado en la norma ISO 14001, facilitar a las organizaciones el diseño e implementación exitosa de un sistema de gestión ambiental, bajo criterios de eficacia.
        p La norma en mención, se encuentra armonizada con las demás normas de gestión ISO, con el fin de garantizar la facilidad de articulación del Sistema de Gestión Ambiental, con los demás sistemas de gestión que la organización disponga, con el fin de eliminar reprocesos y desgastes innecesarios de los equipos organizacionales; de esta forma, propender por el alcance de los objetivos de carácter ambiental, a la par de los demás objetivos, determinados por la estrategia organizacional.

    .row.justify-content-center.mt-5
      p Por eso es importante que se solicite a los responsables de la implementación del sistema de gestión ambiental, que reconozcan:

      .col-lg-8
        .tarjeta--container.row.mt-3
          .col-md.tarjeta.color1.p-4
            .row.justify-content-center
              .col-5
                figure
                  img(src='@/assets/curso/temas/tema3/t3-8.svg', alt='Texto que describa la imagen').mb-2
            h3 Diferentes aspectos que son mencionados por la norma
            p Es importante que la organización se familiarice con sus características, requerimientos y alcances.
            
          
          .col-md.tarjeta.color2.p-4
            .row.justify-content-center
              .col-7
                figure
                  img(src='@/assets/curso/temas/tema3/t3-9.svg', alt='Texto que describa la imagen')
            h3 Elementos concretos que hacen referencia a los aspectos medio ambientales
            p Para establecer, entonces, el impacto deseado, basándose en escenarios realistas y posibles.

    .row.justify-content-center.mt-4
      .col-lg-10.col-xs-6
        .cajon.color-1.p-4.mt-2
          p.mb-0 Por otro lado, la primera parte de la norma corresponde a una introducción, en la que se hace un esbozo de los antecedentes, principios y elementos conceptuales que componen el Sistema de Gestión y las características principales relacionadas con su lógica de implementación y funcionamiento. Posteriormente, se encuentran los cuatro capítulos que componen la estructura del estándar, así como también los anexos que permiten interpretar, de manera sencilla, la norma y su aplicación en relación con las demás normas relacionadas con la gestión, y que dichas normas se encuentran armonizadas precisamente para que puedan ser fácilmente integradas.

    .row.justify-content-center.mb-3.mt-5
      p Los cuatro capítulos contemplados en la parte inicial de la norma ISO 14001, resultan de relevancia mayor para su implementación, motivo por el cual, a continuación, se detallan algunas de sus características principales:
      .col-lg-10
        .row
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .t2.tarjeta-avatar
              img(src='@/assets/curso/temas/tema3/t3-10.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-2.p-5
                p.text-center.mt-3 Definen los objetivos y el campo de aplicación de la norma.
          
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .t2.tarjeta-avatar
              img(src='@/assets/curso/temas/tema3/t3-11.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-2.p-5
                p.text-center.mt-3 Establecen las normas que son referentes de consulta para la implementación.
          
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .t2.tarjeta-avatar
              img(src='@/assets/curso/temas/tema3/t3-12.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-2.p-5
                p.text-center.mt-3 Consagran los términos y las definiciones que serán abordadas a lo largo del documento.

          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .t2.tarjeta-avatar
              img(src='@/assets/curso/temas/tema3/t3-13.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-2.p-5
                p.text-center.mb-0.mt-3 Definen los principales requerimientos del Sistema de Gestión Ambiental (SGA).

    .row.justify-content-center.mt-4
      p Se puede evidenciar que los capítulos 1 a 4, permiten a la organización y a sus miembros, el reconocimiento de los requisitos básicos que llevarán a la implementación exitosa del SGA; los capítulos siguientes, del 5 al 10, definen los requerimientos específicos para la implementación del Sistema de Gestión Ambiental, de acuerdo con sus características particulares. De igual forma, la norma contiene un par de anexos que se presentan a continuación:
      .col-lg-9.col-xs-6
        .cajon.color-2.p-4.mt-2
          ul.lista-ul.mb-3
            li 
              i.fas.fa-chevron-right.vineta1
              span #[b Anexo A:] establece el grupo de definiciones que se relacionan con la norma.
            li 
              i.fas.fa-chevron-right.vineta1
              span #[b Anexo B:] establece la relación existente entre la norma 14001:2015 y las demás normas existentes, con anterioridad.

    .row.justify-content-center.mt-5
      p A su vez, la norma ISO 14001, está construida con una naturaleza cíclica, hecho que se refleja no solo en la lógica del ciclo PHVA, sino también en la interdependencia que se da entre los requisitos consignados en el texto, los cuales están entrelazados en pro de garantizar el mejoramiento continuo del sistema de gestión y su relación con las demás normas, de forma tal, que se garantice su funcionamiento integrado y armónico. 
      p La implementación efectiva de la norma ISO 14001, requiere del cumplimiento de los componentes establecidos en el ciclo PHVA, el cual se esboza a continuación:
      .col-lg-7
        ImagenInfografica.color-acento-botones.mt-5
          template(v-slot:imagen)
            figure
              img(data-aos="flip-left" src='@/assets/curso/temas/tema3/t3-14.svg', alt='')

          .tarjeta.estilo-cajon.p-3(x="50%" y="7%" numero="1")
            ul.lista-ul.mb-3
              li 
                i.fas.fa-chevron-right.vineta1
                span Se lleva a cabo un diagnóstico integral que permita establecer la situación actual de la organización.
              li 
                i.fas.fa-chevron-right.vineta1
                span Se identifican los principales aspectos de intervención, previo a la implementación del Sistema de Gestión Ambiental.    
              li 
                i.fas.fa-chevron-right.vineta1
                span Se formulan planes de acción en los que se tenga en cuenta dar respuesta a los siguientes interrogantes: ¿Qué hacer?, ¿Cómo hacerlo?, ¿Cuándo hacerlo?, ¿Quién/es lo hacen? y ¿Qué recursos son necesarios?             
          
          .tarjeta.estilo-cajon.p-3(x="90.5%" y="50%" numero="2")
            p Se implementan en la organización los planes de acción diseñados en la fase anterior.

          .tarjeta.estilo-cajon.p-3(x="50%" y="93%" numero="3")
            ul.lista-ul.mb-3
              li 
                i.fas.fa-chevron-right.vineta1
                span Se verifica la relación entre la planeación y las acciones efectivamente ejecutadas.
              li 
                i.fas.fa-chevron-right.vineta1
                span Se analizan e incorporan las mejoras alcanzadas.    
              li 
                i.fas.fa-chevron-right.vineta1
                span Se establecen las brechas entre lo planeado y lo efectivamente logrado, a partir del proceso de implementación.  

          .tarjeta.estilo-cajon.p-3(x="8%" y="50%" numero="4")
            ul.lista-ul.mb-3
              li 
                i.fas.fa-chevron-right.vineta1
                span Se identifican las principales dificultades afrontadas durante la implementación.
              li 
                i.fas.fa-chevron-right.vineta1
                span Se formulan las oportunidades de mejora de la organización.
              li 
                i.fas.fa-chevron-right.vineta1
                span Se identifican y registran las carencias evidenciadas en el proceso, con el fin de definir acciones para mitigarlas.  

    .row.justify-content-center.mt-4
      .col-lg-10.col-xs-6
        .cajon.color-2.p-4.mt-2
          p #[b Tenga en cuenta:] una vez abordadas las cuatro etapas del ciclo PHVA, este se reinicia gracias a su naturaleza, comenzando siempre en la etapa de planificación, en la que se tendrán en cuenta no solo las características propias del estado actual de la organización, sino los aprendizajes obtenidos durante ciclos anteriores. Los objetivos que determine la organización en relación con el proceso de implementación de un Sistema de Gestión Ambiental, desde lo planteado por la norma ISO 14001, deben garantizar que sean realistas y que correspondan con las capacidades de la organización en la que es implementado el SGA; de esta forma, se garantiza no solo su efectividad, sino también la cohesión y motivación de los equipos de trabajo. (ISO Tools, 2020)

    .row.justify-content-center.mt-5
      ul.vineta-titulos(data-aos="fade-down-left")
        li
          h2.mb-0.h2-vineta Norma ISO 45001:2018

      .col-lg-5.mt-3
        figure
          img(src="@/assets/curso/temas/tema3/t3-15.svg", alt="" data-aos="flip-up")
      .col-lg-7.mt-3
        p La norma ISO 45001:2018 es el estándar internacional que establece los lineamientos encaminados hacia el proceso de gestión y mejora continua, de los aspectos relacionados con la seguridad y la salud en el trabajo dentro del contexto de una organización específica, sin importar su tamaño, actividad económica, ubicación e impacto geográfico.
        p La adopción de un enfoque sistemático pretende generar condiciones de inclusión que impliquen la participación por parte de los diferentes miembros de la organización; de igual forma, los procesos de SST pueden abarcar las diferentes actividades que se desarrollan al interior de la organización, contribuyendo a la prevención de riesgos relacionados con accidentalidad, así como sus efectos a largo y corto plazo, en aspectos relacionados con la salud. La norma establece una estructura para fortalecer la consolidación de una cultura de seguridad, que propenda por el bienestar de los colaboradores.

    .row.justify-content-center.mt-4
      .col-lg-8.col-xs-6
        .cajon.color-1.p-4.mt-2
          p Posterior al establecimiento de la política, además del cumplimiento de los procesos que evidencien y faciliten el compromiso organizacional, la norma requiere, por parte de la organización, que se garantice la auditoría, revisión y mejoramiento continuo del sistema, abarcando los procesos de evaluación del cumplimiento de obligaciones relacionadas con el SGSST. De esta forma, es posible velar por la seguridad y continuidad del negocio. La implementación de la norma y la sostenibilidad del SG contribuyen significativamente a la mejora interna de la organización, a través de la incorporación y fortalecimiento de una cultura de reto, hacia el mejoramiento continuo.

</template>

<script>
export default {
  name: 'Tema3',
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
