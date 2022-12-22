<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Requisitos legales para sectores económicos

    .row.justify-content-center.align-items-center.align-items-lg-stretch
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema2/t2-1.svg", alt="" data-aos="flip-up").mb-3
      .col-lg-7
        p Por otra parte, el cumplimiento de los estándares de calidad aporta al desarrollo de las diferentes organizaciones y a su entorno. Las normas vigentes a partir de 2015, cuentan con una estructura común, cuyo objetivo es el de facilitar la integración de los sistemas para que, de esta forma, el SG actúe como la columna vertebral de todos los procesos organizacionales, evitando reprocesos, desgaste de las diferentes áreas y los posibles incumplimientos u omisiones a los elementos normativos y legales vigentes.        
        p La aplicación de las normas ISO en las empresas, propende por la generación de condiciones para el cumplimiento de los requisitos del cliente y la legislación vigente en los términos que el tipo de norma establezca, de acuerdo con su alcance.

    .row.justify-content-center.align-items-center.align-items-lg-stretch.mt-5
      .col-lg-10
        .row
          .col-lg-7
            LineaTiempoD.color-acento-botones.mb-3
              .row(numero="1" titulo="Proporcionar bienes y servicios de manera regular")
                p Garantizando continuidad y sostenibilidad a lo largo del tiempo, asegurando el cumplimiento de criterios de calidad en el caso de la 9001.
              .row(numero="2" titulo="Comprometerse")
                p Generando un compromiso en su impacto ambiental para la norma 14001.
              .row(numero="3" titulo="Desarrollar procesos")
                p Estos procesos deben ser de gestión de seguridad y salud en el trabajo, en lo que a la norma 45001 se refiere. Esta serie de objetivos nacen de la necesidad de la organización, para generar confianza entre sus grupos de interés, dando cumplimiento a los requisitos legales y reglamentarios que competan a los procesos que en ella se llevan a cabo.                            
          .col-lg-5
            figure
              img(src="@/assets/curso/temas/tema2/t2-2.svg", alt="" data-aos="flip-down")

    .row.justify-content-center.mt-5
      ul.vineta-titulos(data-aos="fade-down-left")
        li
          h2.mb-0.h2-vineta Legislación aplicable al sistema de gestión

    .row.justify-content-around.aling-items-center.mt-3
      .col-lg-10
        .bloque-texto-g.color-secundario.p-2.p-sm-4.p-md-5
          .b2.bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/t2-3.svg')})`}" data-aos="fade-right")
          .b2.bloque-texto-g__texto.p-4
            p Ahora, hablaremos de los requisitos legales de los sistemas de gestión, los cuales hacen referencia a los elementos de carácter normativo y que se consideran de estricto cumplimiento, para garantizar el normal desarrollo de los mismos, de acuerdo con la norma ISO que se aplique en la organización.      

    .row.justify-content-center.mt-4
      p Es importante reconocer que una parte fundamental de los procesos relacionados con los sistemas de gestión, tiene que ver con el cumplimiento de la normatividad y requisitos de carácter legal, teniendo en cuenta el enfoque de los sistemas que se han integrado a la organización, además de su actividad económica, cumplimiento de las características del producto o prestación de servicios, normativa laboral, ambiental o de seguridad y salud en las actividades del trabajo.
      .col-lg-10.col-xs-6
        .cajon.color-1.p-4.mt-2
          p.mb-0 Es así como, con el fin de establecer las características propias de la normativa relacionada con el cumplimiento de las diferentes Normas ISO, se hace imprescindible reconocer el alcance y las características relacionadas con las mismas, entendiendo que se incluyen algunos elementos normativos comunes, a través de los cuales es posible garantizar su articulación por medio de la implementación de sistemas integrados de gestión.

    .row.justify-content-center.mt-5
      ul.vineta-titulos(data-aos="fade-down-left")
        li
          h2.mb-0.h2-vineta Herramientas tecnológicas para la administración de normatividad y legislación

      .col-lg-5.mt-3
        figure
          img(src="@/assets/curso/temas/tema2/t2-4.svg", alt="" data-aos="flip-up")
      .col-lg-7.mt-3
        p Luego de conocer los requisitos legales para los diferentes sectores económicos, definamos la Gestión de Riesgo y Cumplimiento (GRC), que cuenta con un elemento esencial que es precisamente el componente tecnológico. La GRC se constituye en un modelo de capacidad que facilita a una organización determinada, el alcance de sus objetivos, reconociendo la incertidumbre y promoviendo la integridad en sus actuaciones. Los principales componentes de la GRC, tienen que ver con el diagnóstico, implementación y la tecnología.
        p El software a implementar en el proceso de GRC requiere del procesamiento de datos que son objeto de análisis constante, cuya adecuada disposición permitirá a la organización conocer, en tiempo real, el estado de su gestión y la manera en que se encamina hacia la consecución de sus objetivos, además de la identificación de situaciones, eventos o condiciones que reflejen un desempeño no deseado de la organización.


    .row.justify-content-center.mb-3.mt-3
      p Con el fin de garantizar viabilidad y pertinencia de las herramientas tecnológicas ligadas a la GRC, es necesario establecer múltiples vías para la obtención de la información, lo que comprende gran diversidad de situaciones, de las que podemos mencionar:
      .col-lg-10
        .row
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .t1.tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/t2-5.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-1.p-5
                p.text-center.mt-3 Las acciones implementadas y el control de debilidades.
          
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .t1.tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/t2-6.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-1.p-5
                p.text-center.mt-3 El desempeño y las variaciones presentadas.
          
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .t1.tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/t2-7.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-1.p-5
                p.text-center.mt-3 Incidentes, denuncias o sospechas de incumplimiento legal y normativo.

          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .t1.tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/t2-8.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-1.p-5
                p.text-center.mb-0.mt-3 Violaciones de la empresa, políticas y preocupaciones o percepciones sobre conductas observadas como poco éticas.    

    .row.justify-content-center.mt-4
      .col-lg-8.col-xs-6
        .cajon.color-2.p-4.mt-2
          p.mb-0 Es entonces que, el proceso de implementación y uso de tecnología como parte del GRC, implica mucho más que la simple utilización de un #[i software] particular; debe garantizar la disponibilidad de una estructura digital al interior de la organización, que facilite su diseño e implementación, de manera efectiva.

    .row.justify-content-center.align-items-center.align-items-lg-stretch.mt-5
      p Para la disponibilidad de una estructura digital, se requiere:
      .col-lg-10
        .row
          .col-lg-7
            LineaTiempoD.color-acento-botones.mb-3
              .row(numero="1" titulo="Identificación")
                p Se deben identificar los controles de procesos claves que son menos propensos a errores y más eficientes si están habilitados por la tecnología.
              .row(numero="2" titulo="Análisis")
                p Es necesario comprender el entorno tecnológico existente y, sobre todo, la cultura de la organización.
              .row(numero="3" titulo="Asignación")
                p Se deben asignar requisitos de funcionalidad a las capacidades existentes.
              .row(numero="4" titulo="Reconocimiento")
                p Identificar redundancias en soluciones tecnológicas existentes, además de los requisitos funcionales no satisfechos.
              .row(numero="5" titulo="Autorización")
                p Establecer permisos que permitan la confidencialidad de los datos.
              .row(numero="6" titulo="Relevancia")
                p Priorizar y determinar qué soluciones tecnológicas deben compartir la información.
              .row(numero="7" titulo="Manejo de información")
                p Desarrollar y almacenar información, fácilmente combinada o comparada.
              .row(numero="8" titulo="Mejora continua")
                p Decidir qué soluciones existentes pueden y deben mejorarse o ampliarse, para aplicar a necesidades similares.
              .row(numero="9" titulo="Soluciones")
                p Decidir qué nuevas soluciones deben complementar o reemplazar las soluciones existentes, sea para construir, o para comprar nuevas soluciones identificadas.
          .col-lg-5
            figure
              img(src="@/assets/curso/temas/tema2/t2-9.svg", alt="" data-aos="flip-down")

    .row.mt-5.justify-content-center.align-items-center.align-items-lg-stretch(data-aos="flip-right")
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema2/t2-10.svg", alt="").mb-3
      .col-lg-7
        .cajon.color-1.p-4
          p.mb-0 De esta manera, la alimentación del sistema, dependerá de los instrumentos definidos para la recolección de información relacionada con el desempeño organizacional; entre estos se destacan: encuestas, buzones de PQR o denuncias, auditorías de control interno, evaluaciones de resultados de la gestión, o cualquier instrumento que la organización disponga para recolectar información y que permita evidenciar el desempeño organizacional, de conformidad con sus principios y objetivos.
        p.mt-3 El cumplimiento del propósito para alcanzar un enfoque integrado que permita llevar a cabo, de manera exitosa, el levantamiento de información que permita establecer las condiciones de desempeño, en concordancia con el alcance definido para el modelo de GRC, facilita el análisis sobre el desarrollo de las actividades, reduciendo la carga sobre los colaboradores y aportando una visión integral de la organización y su desempeño, a partir de la información obtenida de las fuentes involucradas.

    .row.justify-content-center.mb-3.mt-3
      p El proceso continuo de autoevaluación, también se articula con un enfoque integrado, aportando información vital para reconocer el desempeño, los posibles riesgos, el grado de cumplimiento, las responsabilidades y el nivel en que la organización alcanza sus resultados, en relación con otros momentos de autoevaluación. El paso a seguir, consiste en llevar a cabo la recopilación de información a través de instrumentos cualitativos, tales como observación, reuniones grupales, grupos focales y entrevistas individuales. Una vez recolectada toda la información que alimentará al sistema, se procede a su registro de los hallazgos en la plataforma tecnológica.
      p Y una vez diseñadas y alimentadas las bases de datos, se procede a realizar un análisis que contiene:
      .col-lg-10
        .row
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .t2.tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/t2-11.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-2.p-5
                p.text-center.mt-3 La forma en que fluye la información.
          
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .t2.tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/t2-12.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-2.p-5
                p.text-center.mt-3 Las acciones necesarias y los responsables.
          
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .t2.tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/t2-13.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-2.p-5
                p.text-center.mt-3 Diseño del diagrama de flujo, para observar que la información pueda fluir a través de las áreas.

          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .t2.tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/t2-14.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-2.p-5
                p.text-center.mb-0.mt-3 Generación de registros o informes que faciliten la toma de información.

    .row.justify-content-center.mt-4
      .cajon.color-1.p-4
        p.mb-0 Teniendo en cuenta el desarrollo de la arquitectura tecnológica, es necesario establecer un marco común de entendimiento para garantizar que la totalidad de los involucrados, tengan claridad con respecto a los objetivos y los pasos a seguir, a lo largo del proceso. 

    .row.mt-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-fondo(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5.text-center
              h1 Control
              p El cual limita el acceso a sistemas, aplicaciones y repositorios de información.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/t2-15.svg')})`}")

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color-fondo(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/t2-16.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5.text-center
              h1 Inspección
              p Uso de controles que limiten el acceso a componentes de tecnología física como redes, servidores y estaciones de trabajo.

      .col-sm-6.col-xl-3.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.derecha.color-fondo(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/t2-17.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5.text-center
              h1 Controles de configuración
              p Los cuales impiden o restringen cambios en el #[i hardware], el sistema, y configuraciones de aplicación.

    .row.mt-3.justify-content-center.align-items-center.align-items-lg-stretch
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-fondo(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5.text-center
              h1 Controles de datos maestros
              p Son los controles que evitan o restringen cambios en la información, almacenada en la fuente de datos.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/t2-18.svg')})`}")

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color-fondo(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/t2-19.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5.text-center
              h1 Mecanismos especiales
              p Controles con el objetivo de distinguir entre mano de obra, visitantes y personas desconocidas, en las instalaciones de la organización.

      .col-sm-6.col-xl-3.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.derecha.color-fondo(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/t2-20.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5.text-center
              h1 Monitoreo
              p Control que se realiza en los indicadores de control de tecnología, con el fin de detectar e identificar faltas de conducta reales, potenciales o de incumplimiento.
              

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.mt-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          h2.mb-0 De conformidad con lo anterior, el componente tecnológico asimilado por la organización, debe garantizar la generación de capacidades para la identificación de fuentes y fuerzas tecnológicas, tales como:
        .col-lg-8
          .bloque-texto-a__texto.p-4
            ul.lista-ul.mb-3
              li 
                i.fas.fa-chevron-right.vineta1
                | La importancia de la velocidad de cambio.
              li 
                i.fas.fa-chevron-right.vineta1
                | Lo relacionado con la disponibilidad y costo de los recursos informáticos, la información y la comunicación.
              li  
                i.fas.fa-chevron-right.vineta1
                | Lo referente a los procesos y materiales industriales mejorados.
              li 
                i.fas.fa-chevron-right.vineta1
                | Los cambios que se ven reflejados en el transporte y la distribución.
              li 
                i.fas.fa-chevron-right.vineta1
                | La vinculación de guías de soluciones tecnológicas.


</template>

<script>
export default {
  name: 'Tema2',
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
