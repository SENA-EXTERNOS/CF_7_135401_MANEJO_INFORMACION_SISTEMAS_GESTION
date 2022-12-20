export default {
  global: {
    componenteFormativo: 'Requisitos normativos y legales',
    descripcionCurso:
      'Durante el estudio de este componente formativo, se abordarán las temáticas y los conceptos que se deben enfocar en la descripción de los elementos normativos que forman parte de los diferentes sistemas de gestión, con el objetivo de garantizar su cumplimiento durante el proceso para llevar a cabo el diseño y la implementación del sistema, en la organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Requisitos legales para los diferentes sistemas de gestión',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Requisitos legales para sectores económicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Norma ISO 9001:2015, Norma ISO 14001:2015 y Norma ISO 45001:2018',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Elaboración del listado de los DEBES de la organización',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Norma ISO 9001:2015, Norma ISO 14001:2015 y Norma ISO 45001:2018',
      referencia:
        'Virtual Training Lteam. (2015). <em>ISO 9001:2015</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TEKS9R0nLEY',
    },
    {
      tema: 'Norma ISO 9001:2015, Norma ISO 14001:2015 y Norma ISO 45001:2018',
      referencia:
        'Virtual Training Lteam. (2018). <em>ISO 14001:2015</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9BaZfBJnPg8',
    },
    {
      tema: 'Norma ISO 9001:2015, Norma ISO 14001:2015 y Norma ISO 45001:2018',
      referencia:
        'Virtual Training Lteam. (2018). <em>ISO 45001:2015</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JWjnou76O6I',
    },
    {
      tema: 'Norma ISO 9001:2015, Norma ISO 14001:2015 y Norma ISO 45001:2018',
      referencia:
        'Procem Consultores. (2022). <em>Pasos para implementar un SIG (Sistema Integrado de Gestión)</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1KT7lALoIdI',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría',
      significado:
        'proceso de verificación del cumplimiento de los requisitos establecidos por la norma ISO, para la implementación del SG.',
    },
    {
      termino: 'DEBES',
      significado:
        'requisitos necesarios para que la organización pueda implementar un Sistema de Gestión y optar por una certificación en una norma específica.',
    },
    {
      termino: 'Empresa',
      significado:
        'entidad en la que intervienen el capital y el trabajo, como factores de producción de actividades industriales o mercantiles o para la prestación de servicios.',
    },
    {
      termino: 'ISO',
      significado:
        'organización Internacional de Normalización, cuya principal actividad es la elaboración de normas técnicas internacionales.',
    },
    {
      termino: 'Legal',
      significado: 'que obedece a un requerimiento establecido por la ley.',
    },
    {
      termino: 'Normativo',
      significado:
        'obedece a una serie de requerimientos establecidos como marco común.',
    },
    {
      termino: 'Persona natural',
      significado:
        'individuo que desarrolla actividades empresariales a título personal.',
    },
    {
      termino: 'Persona jurídica',
      significado:
        'organización o grupo de personas naturales a la que la ley reconoce personalidad independiente y diferenciada de la de cada uno de sus miembros o componentes, capaz de ejercer derechos y contraer obligaciones, y de ser representada judicial y extrajudicialmente.',
    },
    {
      termino: 'Recursos',
      significado:
        'elementos materiales o intelectuales que son necesarios para el desarrollo de un proceso.',
    },
    {
      termino: 'Requisito',
      significado:
        'elemento necesario para tener en cuenta como parte del sistema, el cual es necesario para su adecuada operación.',
    },
  ],
  referencias: [
    {
      referencia:
        'ATCAL S.A.S. (s.f.). <em>Normas que exigen el cumplimiento de requisitos legales.</em>',
      link:
        'https://www.implementandosgi.com/sistemas-de-gestion/normas-que-exigen-el-cumplimiento-de-requisitos-legales/',
    },
    {
      referencia:
        'ISOTools. (s.f.). <em>Herramientas tecnológicas para la gestión de GRC.</em>',
      link:
        'https://www.isotools.org/2020/10/30/herramientas-tecnologicas-para-la-gestion-de-grc/',
    },
    {
      referencia:
        'Nueva ISO. (2015). <em>Documentos obligatorios en la norma ISO14001:2015.</em>',
      link:
        'https://www.nueva-iso-14001.com/2015/10/documentos-obligatorios-norma-iso140012015/',
    },
    {
      referencia:
        'Nueva ISO. (2016). Documentos obligatorios en la norma ISO45001:2015.',
      link:
        'https://www.nueva-iso-45001.com/2016/02/los-documentos-obligatorios-en-la-nueva-iso-45001/',
    },
    {
      referencia:
        'Palacios, D. (2021). <em>Los 7 tipos de empresas y su clasificación.</em>',
      link: 'https://blog.hubspot.es/sales/tipos-de-empresas',
    },
    {
      referencia:
        'Ramírez, C. 2009. <em>Fundamentos de administración</em> (3ra ed.). Ecoe Ediciones.',
      link:
        'https://www.academia.edu/34524753/Fundamentos_de_Administraci%C3%B3n_Carlos_Ram%C3%ADrez_Cardona_3ra_Ed_',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
