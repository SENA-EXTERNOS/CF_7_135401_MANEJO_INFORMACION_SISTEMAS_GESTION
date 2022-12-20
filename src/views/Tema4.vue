<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Elaboración del listado de los DEBES de la organización

    .row.justify-content-around.aling-items-center.mt-3
      .col-lg-10
        .bloque-texto-g.color-secundario.p-2.p-sm-4.p-md-5
          .b2.bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/t4-1.svg')})`}" data-aos="fade-right")
          .b2.bloque-texto-g__texto.p-4
            p Teniendo en cuenta las normas ISO expuestas anteriormente, es necesario conocer ahora el proceso relacionado con la implementación y el desarrollo de un Sistema de Gestión de la Calidad a nivel organizacional, cimentado en la norma ISO 9001, debido a que está atado a la idea preconcebida de la necesidad de una gran cantidad de elementos documentales que garantice su operatividad; sin embargo, este componente ha sido simplificado de manera significativa, en la versión 2015 de la norma.

    .row.justify-content-center.mb-3.mt-5.mb-4
      p Algunas de estas actualizaciones son:
        .col-lg-9
          .row
            .col-sm-6.col-lg-6.mb-4.mb-lg-0
              .t4.tarjeta-avatar
                img(src='@/assets/curso/temas/tema4/t4-2.svg' alt='AvatarTop')
                .tarjeta.tarjeta--amarilla-1.p-5
                  p.mt-3 La ISO 9001:2015, ha suprimido los seis procedimientos obligatorios de las versiones anteriores.
            
            .col-sm-6.col-lg-6.mb-4.mb-lg-0
              .t4.tarjeta-avatar
                img(src='@/assets/curso/temas/tema4/t4-3.svg' alt='AvatarTop')
                .tarjeta.tarjeta--amarilla-1.p-5
                  p.mt-3 Se ha suprimido la obligatoriedad del Manual de Calidad, no significando esto que dicha herramienta no pueda ser utilizada o que no sea de utilidad para la organización.

    .row.justify-content-center.mt-4
      .col-lg-10.col-xs-6
        .cajon.color-2.p-4.mt-2
          p A pesar de los cambios mencionados anteriormente, la norma ISO 9001 en su versión 2015, establece la necesidad de mantener y conservar información documentada, de forma tal, que se pueda dar cumplimiento a las necesidades del sistema.

    .row.justify-content-center.mt-3
      p A continuación, se mencionan los documentos obligatorios del SGC, establecidos a través de la norma ISO 9001:2015:
      .col-lg-10
        .row.justify-content-center.mt-3
          .col-lg-8
            TabsA.color-secundario
              .tarjeta.colorTab.p-3(titulo="Documento 1")
                .row.p-4
                  .col-auto
                    p Alcance del sistema de gestión de la calidad (cláusula 4.3).
                    
              .tarjeta.colorTab.p-3(titulo="Documento 2")
                .row.p-4
                  .col-auto
                    p Información documentada necesaria para apoyar el funcionamiento de los procesos (cláusula 4.4). 

              .tarjeta.colorTab.p-3(titulo="Documento 3")
                .row.p-4
                  .col-auto
                    p Política de calidad (cláusula 5.).

              .tarjeta.colorTab.p-3(titulo="Documento 4")
                .row.p-4
                  .col-auto
                    p Objetivos de calidad (cláusula 6.2).

              .tarjeta.colorTab.p-3(titulo="Documento 5")
                .row.p-4
                  .col-auto
                    p Información documentada requerida y determinada como necesaria (cláusula 7.5).

              .tarjeta.colorTab.p-3(titulo="Documento 6")
                .row.p-4
                  .col-auto
                    p Adicionalmente, la norma establece en algunas cláusulas que: “la organización debe conservar información documentada”, haciendo referencia con esto, a registros de carácter obligatorio.                               


          .col-lg-4
            img(src='@/assets/curso/temas/tema4/t4-4.svg', alt='' data-aos="flip-left").mb-3 

    .row.justify-content-center.mt-4
      p Ahora bien, la norma ISO9001:2015 ha disminuido el nivel de obligaciones documentales del sistema; sin embargo, hay una serie de documentos y registros que son necesarios, para la certificación de la misma:

      ul.lista-ul.mb-3.ps-5
        li 
          i.fas.fa-chevron-right.vineta1
          span Información documentada en la medida necesaria para tener confianza en que los procesos se están llevando a cabo, según lo planeado (cláusula 4.4).
        li 
          i.fas.fa-chevron-right.vineta1
          span Pruebas de aptitud para el propósito de monitorear y medir los recursos (cláusula 7.1.5.1).
        li 
          i.fas.fa-chevron-right.vineta1
          span Evidencia de la base utilizada para la calibración de los recursos de monitoreo y medición (cuando no existen normas internacionales o nacionales) (cláusula 7.1.5.2).
        li 
          i.fas.fa-chevron-right.vineta1
          span Evidencia de competencia de la (s) persona (s) que realiza(n) un trabajo bajo el control de la organización que afecta el desempeño y la eficacia del SGC (cláusula 7.2).
        li 
          i.fas.fa-chevron-right.vineta1
          span Resultados de la revisión y nuevos requisitos para los productos y servicios (cláusula 8.2.3).
        li 
          i.fas.fa-chevron-right.vineta1
          span Registros necesarios para demostrar que se han cumplido los requisitos de diseño y desarrollo (cláusula 8.3.2).
        li 
          i.fas.fa-chevron-right.vineta1
          span Registros de insumos de diseño y desarrollo (cláusula 8.3.3).
        li 
          i.fas.fa-chevron-right.vineta1
          span Registros de las actividades de los controles de diseño y desarrollo (cláusula 8.3.4).
        li 
          i.fas.fa-chevron-right.vineta1
          span Registros de productos de diseño y desarrollo (cláusula 8.3.5).
        li 
          i.fas.fa-chevron-right.vineta1
          span Cambios de diseño y desarrollo, incluyendo los resultados de la revisión y la autorización de los cambios y acciones necesarias (cláusula 8.3.6).
        li 
          i.fas.fa-chevron-right.vineta1
          span Registros de evaluación, selección, seguimiento de desempeño y reevaluación de proveedores externos y cualesquiera, y acciones derivadas de estas actividades (cláusula 8.4.1).
        li 
          i.fas.fa-chevron-right.vineta1
          span Evidencia de la identificación única de los productos, cuando la trazabilidad es un requisito (cláusula 8.5.2).
        li 
          i.fas.fa-chevron-right.vineta1
          span Registros de propiedad del cliente o proveedor externo, que se pierde, dañe o se entienda que no es adecuado para el uso y comunicación con el propietario (cláusula 8.5.3).
        li 
          i.fas.fa-chevron-right.vineta1
          span Resultados de la revisión de cambios en la producción o prestación de servicios, las personas que autorizan el cambio y las acciones necesarias (cláusula 8.5.6).
        li 
          i.fas.fa-chevron-right.vineta1
          span Registros de la liberación autorizada de productos y servicios para entrega al cliente, incluidos los criterios de aceptación y trazabilidad a la persona autorizada (cláusula 8.6).
        li 
          i.fas.fa-chevron-right.vineta1
          span Registros de las no conformidades, las acciones realizadas, las concesiones obtenidas y la identificación de la autoridad que decide la acción respecto de la no conformidad (cláusula 8.7).
        li 
          i.fas.fa-chevron-right.vineta1
          span Resultados de la evaluación del desempeño y la efectividad del SGC (cláusula 911).
        li 
          i.fas.fa-chevron-right.vineta1
          span Evidencia de la ejecución del programa de auditoría y de los resultados de la auditoría (cláusula 9.2.2).
        li 
          i.fas.fa-chevron-right.vineta1
          span Evidencia de los resultados de los exámenes de la dirección (cláusula 9.3.3).
        li 
          i.fas.fa-chevron-right.vineta1
          span Evidencia de la naturaleza de las no conformidades y de las acciones subsiguientes (cláusula 10.2.2).
        li 
          i.fas.fa-chevron-right.vineta1
          span Resultados de cualquier acción correctiva (cláusula 10.2.2).                                                         

    .row.justify-content-around.aling-items-center.mt-4
      p Para el caso de la norma ISO 14001:2015, se establecen los siguientes requisitos documentales y registros obligatorios, con el fin de garantizar su cumplimiento (nueva ISO, 2015):
      .col-lg-5(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/t4-5.svg', alt='').m-auto

      .col-lg-7
        AcordionA(tipo="b" clase-tarjeta="tarjeta acordeonA").p-4
          .row(titulo="Los requisitos documentales").p-4
            p Hacen referencia a:
            ul.lista-ul.mb-3
              li 
                i.fas.fa-chevron-right.vineta1
                span Ámbito de aplicación del Sistema de Gestión Ambiental: apartado 4.3
              li 
                i.fas.fa-chevron-right.vineta1
                span Política ambiental: está en el apartado 5.2
              li 
                i.fas.fa-chevron-right.vineta1
                span Riesgos y oportunidades que se tienen que abordar y utilizar en los procesos necesarios: apartado 6.1.1
              li 
                i.fas.fa-chevron-right.vineta1
                span Criterios para evaluar los aspectos ambientales significativos: apartado 6.1.2
              li 
                i.fas.fa-chevron-right.vineta1
                span Aspectos ambientales con impactos ambientales asociados: apartado 6.1.2
              li 
                i.fas.fa-chevron-right.vineta1
                span Aspectos ambientales significativos: cláusula 6.1.2
              li 
                i.fas.fa-chevron-right.vineta1
                span Objetivos y planes para conseguir el bienestar ambiental: cláusula 6.2
              li 
                i.fas.fa-chevron-right.vineta1
                span Control operacional: cláusula 8.1
              li 
                i.fas.fa-chevron-right.vineta1
                span Preparación y respuesta ante emergencias: cláusula 8.2     
      
          .row(titulo="Los registros obligatorios").p-4
            p Hacen referencia a:
            ul.lista-ul.mb-3
              li 
                i.fas.fa-chevron-right.vineta1
                span Registro de las obligaciones de cumplimiento: cláusula 6.1.3
              li 
                i.fas.fa-chevron-right.vineta1
                span Los registros de capacitación, habilidades, experiencia y cualificaciones: cláusula 7.2
              li 
                i.fas.fa-chevron-right.vineta1
                span La evidencia de la comunicación: cláusula 7.4
              li 
                i.fas.fa-chevron-right.vineta1
                span Los resultados del monitoreo y medición: cláusula 9.1.1
              li 
                i.fas.fa-chevron-right.vineta1
                span Programa de auditoría interna: apartado 9.2
              li 
                i.fas.fa-chevron-right.vineta1
                span Los resultados de las auditorías internas: cláusula 9.2
              li 
                i.fas.fa-chevron-right.vineta1
                span Los resultados de la revisión por la dirección: apartado 9.3
              li 
                i.fas.fa-chevron-right.vineta1
                span Los resultados de las acciones correctivas: cláusula 10.1               

    .row.justify-content-center.mt-3
      p Y para finalizar, se mencionan los documentos necesarios para dar cumplimiento a los requisitos establecidos por la norma ISO 45001:2018 (nueva ISO, 2015):
      .col-lg-10
        .row.justify-content-center.mt-3
          .col-lg-8
            TabsA.color-secundario
              .tarjeta.colorTab.p-3(titulo="Los requisitos documentales")
                .row.p-4
                  .col-auto
                    p Hacen referencia a:
                    ul.lista-ul.mb-3
                      li 
                        i.fas.fa-chevron-right.vineta1
                        span Alcance del Sistema de Gestión de Seguridad y Salud en el Trabajo.
                      li 
                        i.fas.fa-chevron-right.vineta1
                        span Política de seguridad y salud en el trabajo.
                      li 
                        i.fas.fa-chevron-right.vineta1
                        span Definir los roles y responsabilidades dentro de la organización.
                      li 
                        i.fas.fa-chevron-right.vineta1
                        span Los riesgos y las oportunidades en el Sistema de Gestión de Seguridad y Salud en el Trabajo.
                      li 
                        i.fas.fa-chevron-right.vineta1
                        span Los procesos necesarios para abordar los riesgos y las oportunidades.
                      li 
                        i.fas.fa-chevron-right.vineta1
                        span Metodología y criterios para la evaluación de los riesgos en la zona de trabajo.
                      li 
                        i.fas.fa-chevron-right.vineta1
                        span Los objetivos y los planes del Sistema de Gestión de Seguridad y Salud en el Trabajo.
                      li 
                        i.fas.fa-chevron-right.vineta1
                        span Comunicación.
                      li 
                        i.fas.fa-chevron-right.vineta1
                        span Controles operacionales.
                      li 
                        i.fas.fa-chevron-right.vineta1
                        span La preparación para emergencias y los procesos de respuesta.
                    
              .tarjeta.colorTab.p-3(titulo="Los registros obligatorios")
                .row.p-4
                  .col-auto
                    p Hacen referencia a:
                    ul.lista-ul.mb-3
                      li 
                        i.fas.fa-chevron-right.vineta1
                        span Requisitos legales y otras aplicaciones.
                      li 
                        i.fas.fa-chevron-right.vineta1
                        span Deben quedar registros de las capacitaciones, la experiencia y las cualificaciones.
                      li 
                        i.fas.fa-chevron-right.vineta1
                        span Los resultados del monitoreo y la medición.
                      li 
                        i.fas.fa-chevron-right.vineta1
                        span Calibración y verificación de los equipos de seguimiento y medición.
                      li 
                        i.fas.fa-chevron-right.vineta1
                        span Evaluación de las obligaciones de cumplimiento.
                      li 
                        i.fas.fa-chevron-right.vineta1
                        span Auditoría interna al Sistema de Gestión de Seguridad y Salud en el Trabajo.
                      li 
                        i.fas.fa-chevron-right.vineta1
                        span Registro de los resultados de las auditorías internas.
                      li 
                        i.fas.fa-chevron-right.vineta1
                        span Los resultados de las revisiones por parte de la dirección de la organización.
                      li 
                        i.fas.fa-chevron-right.vineta1
                        span Incidentes y no conformidades.
                      li 
                        i.fas.fa-chevron-right.vineta1
                        span Los resultados de las acciones correctivas. 
          .col-lg-4
            img(src='@/assets/curso/temas/tema4/t4-6.svg', alt='' data-aos="flip-left").mb-3                     

    .row.justify-content-center.mt-4
      .col-lg-10.col-xs-6
        .cajon.color-1.p-4.mt-2
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema4',
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
