# Especificación del Panel de Administración de AgentHub

## 1. Descripción del producto

AgentHub es una plataforma SaaS que permite a empresas contratar o alquilar agentes de inteligencia artificial preconfigurados para realizar tareas de negocio.

Cada agente puede tener diferentes skills o habilidades, como navegar por la web, leer documentos o gestionar calendarios. Un mismo agente puede tener varias skills habilitadas según las necesidades del cliente que lo contrata.

El proyecto consiste en un prototipo visual y funcional del panel de administración interno de AgentHub. El prototipo permitirá consultar usuarios, agentes, skills, contrataciones y errores de ejecución, pero no estará conectado a un backend, una API ni una base de datos.

Todos los datos mostrados en la interfaz serán hardcodeados y servirán únicamente para demostrar el diseño, la estructura y las interacciones del futuro sistema.

## 2. Usuario administrador

El usuario principal del prototipo es un administrador interno de AgentHub.

El administrador necesita utilizar el panel para:

- Consultar métricas generales de la plataforma.
- Revisar los usuarios registrados.
- Supervisar los agentes de IA existentes.
- Consultar las skills disponibles.
- Revisar las contrataciones de agentes realizadas por los clientes.
- Supervisar los errores producidos durante la ejecución de los agentes.

El panel debe permitir que el administrador consulte esta información rápidamente desde una interfaz profesional, clara y organizada.

## 3. Stack tecnológico

El prototipo debe construirse utilizando únicamente las siguientes tecnologías:

- HTML5 para la estructura del contenido.
- Tailwind CSS cargado mediante CDN para todos los estilos visuales.
- JavaScript vanilla para toda la interactividad.

El prototipo puede construirse como un único archivo `index.html` que contenga las seis secciones del panel.

## 4. Restricciones técnicas

1. No se utilizarán frameworks de JavaScript como React, Vue, Angular o similares.
2. No se utilizará jQuery.
3. No se utilizarán herramientas de build.
4. No se desarrollará ningún backend.
5. No se realizará ninguna conexión a APIs.
6. No se utilizará ninguna base de datos.
7. Todos los datos serán hardcodeados.
8. Tailwind CSS debe cargarse únicamente mediante CDN.
9. No se crearán archivos CSS personalizados.
10. No se utilizarán atributos `style` en línea.
11. Toda la interactividad será desarrollada con JavaScript vanilla.
12. El HTML utilizará etiquetas semánticas como `nav`, `header`, `main`, `section` y `table` cuando corresponda.
13. La interfaz debe ser usable en pantallas de escritorio y tablet. 

## 5. Estructura global del panel

### 5.1 Layout general

1. El panel utilizará una estructura de dos columnas: una barra lateral persistente a la izquierda y un área principal de contenido a la derecha.

2. La barra lateral permanecerá visible mientras el administrador navega entre las seis secciones del panel.

3. El área principal contendrá una barra superior y, debajo de ella, la sección activa del panel.

4. En pantallas de escritorio, la barra lateral tendrá un ancho fijo y el contenido principal ocupará el espacio restante.

5. En pantallas de tablet, el layout seguirá siendo usable y el contenido deberá adaptarse sin provocar desbordamiento horizontal innecesario.

### 5.2 Barra lateral de navegación

1. La barra lateral mostrará el nombre o logotipo textual de AgentHub en la parte superior.

2. Debajo del nombre de AgentHub aparecerán enlaces de navegación para las seis secciones:

	- Dashboard
	- Gestión de usuarios
	- Gestión de agentes
	- Skills
	- Contrataciones de agentes
	- Log de errores

3. Cada enlace incluirá un icono y una etiqueta de texto.

4. Solo una sección podrá estar activa al mismo tiempo.

5. El enlace correspondiente a la sección activa tendrá un estilo visual diferente al resto para indicar claramente la ubicación actual del administrador.

6. Al hacer clic en un enlace de navegación, se mostrará la sección correspondiente y se ocultarán las demás.

### 5.3 Barra superior

1. El área principal incluirá una barra superior persistente.

2. La barra superior mostrará el nombre de la sección actualmente activa.

3. La barra superior incluirá un toggle para cambiar entre modo claro y modo oscuro.

4. El toggle de tema deberá mostrar visualmente el estado actual de la interfaz.

### 5.4 Área de contenido

1. Cada una de las seis vistas estará representada por una sección independiente dentro del área principal.

2. Solo la sección seleccionada desde la barra lateral será visible.

3. El Dashboard será la sección visible por defecto cuando se cargue el prototipo.

4. Cada sección incluirá un encabezado con título y, cuando sea necesario, una breve descripción de su propósito.

5. El espacio, la tipografía, los bordes y los componentes visuales deberán mantenerse consistentes entre todas las secciones.

### 5.5 Modo claro y modo oscuro

1. El modo claro será el tema inicial de la interfaz.

2. Al activar el modo oscuro, toda la interfaz cambiará utilizando las utilidades `dark:` de Tailwind CSS.

3. El cambio de tema deberá afectar como mínimo:

	- Fondo general.
	- Barra lateral.
	- Barra superior.
	- Tarjetas.
	- Tablas.
	- Modales.
	- Textos.
	- Bordes.
	- Dropdowns.

4. El modo elegido deberá mantenerse al navegar entre las diferentes secciones del panel.

5. El cambio de tema será controlado únicamente con JavaScript vanilla.

## 6. Dashboard

### 6.1 Tarjetas de métricas

1. El Dashboard mostrará cuatro tarjetas de métricas organizadas en una cuadrícula responsive.

2. Las cuatro métricas serán:

	- Ingresos totales generados durante el mes.
	- Pérdidas totales provocadas por descuentos y cupones.
	- Número total de agentes activos.
	- Número total de agentes marcados como fallando.

3. Cada tarjeta incluirá:

	- Un icono representativo.
	- Una etiqueta descriptiva.
	- Un valor hardcodeado.
	- Un color de acento relacionado con el tipo de métrica.
	- Un borde y una sombra sutil.

4. En pantallas de escritorio, las cuatro tarjetas podrán mostrarse en una sola fila o en una cuadrícula de cuatro columnas.

5. En pantallas de tablet, las tarjetas se reorganizarán en una cuadrícula de dos columnas.

### 6.2 Área de actividad semanal

1. Debajo de las tarjetas aparecerá un contenedor de ancho completo destinado a representar la actividad semanal.

2. El contenedor mostrará el título `Actividad semanal`.

3. El área funcionará como marcador de posición visual de un futuro gráfico.

4. No será necesario implementar una librería real de gráficas.

5. El marcador deberá integrarse visualmente con el resto del Dashboard mediante bordes, fondo y espaciado consistentes.


## 7. Gestión de usuarios

### 7.1 Tabla de usuarios

1. La sección mostrará una tabla con al menos cinco usuarios hardcodeados.

2. Cada fila mostrará las siguientes columnas:

	- Nombre.
	- Email.
	- Plan.
	- Estado.
	- Acciones.

3. El estado de cada usuario se mostrará mediante un badge visual.

4. Los estados podrán diferenciarse mediante colores, por ejemplo:

	- Activo.
	- Suspendido.
	- Pendiente.

5. La tabla deberá ser legible en modo claro y modo oscuro.

### 7.2 Dropdown de acciones

1. Cada fila tendrá un botón de acciones representado mediante el símbolo `⋮`.

2. Al hacer clic en el botón se abrirá un dropdown asociado únicamente a esa fila.

3. El dropdown incluirá las opciones:

	- Ver detalle.
	- Eliminar.

4. Solo un dropdown podrá permanecer abierto al mismo tiempo.

5. El dropdown deberá cerrarse al:

	- Volver a hacer clic en el botón.
	- Seleccionar una opción.
	- Hacer clic fuera del menú.

### 7.3 Modal de detalle de usuario

1. Al seleccionar `Ver detalle`, se abrirá un modal overlay.

2. El modal mostrará el registro completo del usuario seleccionado.

3. El contenido incluirá como mínimo:

	- Nombre.
	- Email.
	- Plan.
	- Estado.

4. El modal incluirá un botón visible de cierre.

5. El modal también deberá cerrarse al hacer clic en el backdrop.

6. El contenido del modal deberá corresponder al usuario seleccionado.


## 8. Gestión de agentes

### 8.1 Listado de agentes

1. La sección mostrará al menos cuatro agentes hardcodeados.

2. Cada agente mostrará:

	- Nombre del agente.
	- Propietario.
	- Estado actual.
	- Control para mostrar sus skills.
	- Dropdown de acciones.

3. Los estados disponibles serán:

	- Activo.
	- Inactivo.
	- Fallando.

4. Cada estado se representará mediante un badge con un estilo visual diferente.

### 8.2 Lista de skills colapsable

1. Las skills de cada agente estarán ocultas por defecto.

2. Cada agente tendrá un control expandible que permita mostrar u ocultar sus skills.

3. Al hacer clic en el control, la lista se expandirá mediante una transición visible y suave.

4. Al volver a hacer clic, la lista regresará al estado colapsado.

5. La expansión de un agente no deberá modificar los datos de los demás agentes.

### 8.3 Dropdown de acciones del agente

1. Cada agente tendrá un botón `⋮`.

2. El dropdown incluirá las opciones:

	- Configurar.
	- Eliminar.

3. El dropdown seguirá el mismo comportamiento global utilizado en Gestión de usuarios.

### 8.4 Modal de configuración

1. Al seleccionar `Configurar`, se abrirá un modal.

2. El modal mostrará:

	- Nombre del agente.
	- Propietario.
	- Prompt de sistema.

3. El prompt de sistema aparecerá dentro de un elemento `textarea`.

4. El contenido del `textarea` será editable por el usuario.

5. No será necesario guardar los cambios en un backend.

6. El modal podrá cerrarse mediante su botón de cierre o haciendo clic en el backdrop.


## 9. Skills

### 9.1 Explicación de las skills

1. La sección incluirá un bloque informativo en la parte superior.

2. El bloque explicará que una skill es una capacidad que puede añadirse a un agente de IA.

3. La explicación deberá mencionar ejemplos como:

	- Navegación web.
	- Lectura de documentos.
	- Gestión de calendarios.

4. El bloque informativo deberá diferenciarse visualmente del catálogo de skills.

### 9.2 Catálogo de skills

1. La sección mostrará al menos cuatro skills hardcodeadas.

2. Cada skill mostrará:

	- Nombre.
	- Descripción breve.
	- Número de agentes que la tienen habilitada.
	- Dropdown de acciones.

3. Las skills podrán representarse mediante tarjetas o filas de listado.

4. Todos los componentes mantendrán una estructura visual consistente.

### 9.3 Dropdown de acciones de skill

1. Cada skill tendrá un botón `⋮`.

2. El dropdown incluirá:

	- Ver detalle.
	- Eliminar.

3. El dropdown se cerrará al hacer clic fuera de su área.

### 9.4 Modal de detalle de skill

1. Al elegir `Ver detalle`, se abrirá un modal.

2. El modal mostrará información ampliada sobre la skill seleccionada.

3. El contenido incluirá como mínimo:

	- Nombre.
	- Descripción.
	- Número de agentes que la utilizan.

4. El modal se cerrará con el botón de cierre y haciendo clic en el backdrop.


## 10. Contrataciones de agentes

### 10.1 Tabla de contrataciones

1. La sección mostrará una tabla con al menos cuatro contratos hardcodeados.

2. Cada contrato mostrará:

	- Cliente.
	- Agente alquilado.
	- Skills contratadas.
	- Fecha de inicio.
	- Fecha de fin.
	- Importe total pagado.
	- Acciones.

3. Los nombres de los agentes utilizados en esta tabla deberán coincidir con los agentes existentes en la sección Gestión de agentes.

4. Las skills utilizadas en los contratos deberán coincidir con las skills existentes en el catálogo.

### 10.2 Dropdown de acciones del contrato

1. Cada fila tendrá un botón de acciones `⋮`.

2. El dropdown incluirá la opción `Ver detalle`.

3. El dropdown seguirá el mismo comportamiento global utilizado en las otras secciones.

### 10.3 Modal de detalle del contrato

1. Al seleccionar `Ver detalle`, se abrirá un modal.

2. El modal mostrará el desglose completo del contrato.

3. El contenido incluirá como mínimo:

	- Cliente.
	- Agente alquilado.
	- Fecha de inicio.
	- Fecha de fin.
	- Lista de skills contratadas.
	- Precio individual de cada skill.
	- Importe total pagado.

4. Las skills deberán mostrarse de forma desglosada y no únicamente como una cadena de texto.

5. El modal se cerrará mediante el botón de cierre y haciendo clic en el backdrop.


## 11. Log de errores

### 11.1 Listado de errores

1. La sección mostrará al menos seis errores hardcodeados.

2. Cada entrada mostrará:

	- Timestamp.
	- Nombre del agente.
	- Tipo de error.
	- Descripción breve.
	- Acciones.

3. Los agentes mostrados en el Log de errores deberán coincidir con los agentes de la sección Gestión de agentes.

### 11.2 Badges de error

1. Cada tipo de error tendrá un badge con código de color.

2. Los badges permitirán distinguir visualmente tipos o niveles de gravedad.

3. Los tipos de error podrán incluir, por ejemplo:

	- Timeout.
	- API Error.
	- Authentication Error.
	- Critical Error.

4. El texto del badge deberá seguir siendo legible tanto en modo claro como oscuro.

### 11.3 Dropdown de acciones del error

1. Cada entrada tendrá un botón `⋮`.

2. El dropdown incluirá:

	- Ver detalle.
	- Marcar como resuelto.

3. El menú se cerrará al hacer clic fuera de su área.

### 11.4 Modal de detalle del error

1. Al seleccionar `Ver detalle`, se abrirá un modal.

2. El modal mostrará la información completa del error.

3. El contenido incluirá como mínimo:

	- Timestamp.
	- Agente.
	- Tipo de error.
	- Descripción completa.
	- Traza completa del error.

4. La traza podrá mostrarse dentro de un bloque de texto con tipografía monoespaciada.

5. El modal se cerrará mediante el botón de cierre y haciendo clic en el backdrop.

### 11.5 Marcar como resuelto

1. Al seleccionar `Marcar como resuelto`, la entrada deberá reflejar visualmente que el error fue resuelto.

2. El cambio será únicamente local en el prototipo.

3. No será necesario guardar el estado en una base de datos.

4. El comportamiento se implementará con JavaScript vanilla. 

## 12. Datos consistentes del prototipo

1. Los nombres de usuarios, agentes, skills, contratos y errores deberán mantenerse consistentes entre todas las secciones.

2. Cuando un agente aparezca en Gestión de agentes, Contrataciones de agentes o Log de errores, deberá utilizar exactamente el mismo nombre.

3. Las skills mostradas en los agentes y contratos deberán existir también en el catálogo de Skills.

4. Los datos serán hardcodeados y no se cargarán desde APIs, archivos externos ni bases de datos.

5. Los valores del Dashboard deberán ser coherentes con la información general representada en el prototipo.

6. Se utilizará un conjunto fijo de datos para evitar contradicciones entre las diferentes vistas.


## 13. Inventario de componentes reutilizables

### 13.1 Sidebar

Componente de navegación lateral persistente que contiene el nombre de AgentHub, los enlaces a las seis secciones y el indicador visual de la sección activa.

### 13.2 Barra superior

Componente situado en la parte superior del área principal que muestra el nombre de la sección activa y el toggle de modo claro u oscuro.

### 13.3 Tarjeta de métrica

Componente utilizado en el Dashboard que contiene un icono, una etiqueta, un valor hardcodeado y un color de acento.

### 13.4 Badge de estado

Componente visual utilizado para representar estados de usuarios, agentes y errores mediante texto y código de color.

### 13.5 Dropdown de acciones

Menú reutilizable activado mediante un botón `⋮`. Se utiliza en usuarios, agentes, skills, contratos y errores.

El componente deberá abrirse al hacer clic, cerrarse al volver a hacer clic y cerrarse cuando el usuario haga clic fuera de su área.

### 13.6 Modal

Componente overlay reutilizable utilizado para mostrar información detallada o configuraciones.

El modal estará compuesto por:

- Backdrop.
- Contenedor principal.
- Título.
- Contenido.
- Botón de cierre.

El modal podrá cerrarse mediante su botón de cierre o haciendo clic en el backdrop.

### 13.7 Lista de skills colapsable

Componente utilizado en Gestión de agentes para mostrar u ocultar las skills asociadas a cada agente.

Estará colapsado por defecto y utilizará una transición visible al expandirse o cerrarse.

### 13.8 Toggle de modo oscuro

Control situado en la barra superior que permite alternar toda la interfaz entre modo claro y modo oscuro.

El componente utilizará JavaScript vanilla y las utilidades `dark:` de Tailwind CSS.


## 14. Interacciones globales

### 14.1 Navegación entre secciones

1. Al cargar el prototipo, el Dashboard será la sección activa.

2. Al hacer clic en un enlace de la barra lateral, la sección seleccionada se mostrará y las demás se ocultarán.

3. El título de la barra superior deberá actualizarse según la sección seleccionada.

4. El enlace activo de la barra lateral cambiará visualmente.

### 14.2 Comportamiento de los dropdowns

1. Todos los botones `⋮` abrirán el dropdown correspondiente al elemento seleccionado.

2. Solo un dropdown podrá permanecer abierto al mismo tiempo.

3. Abrir un nuevo dropdown cerrará cualquier otro que esté abierto.

4. Hacer clic fuera de un dropdown cerrará el menú activo.

5. Seleccionar una acción cerrará el dropdown.

### 14.3 Comportamiento de los modales

1. Las acciones de detalle o configuración abrirán el modal correspondiente.

2. El contenido del modal deberá cambiar según el elemento seleccionado.

3. Todos los modales tendrán un botón visible de cierre.

4. Hacer clic en el backdrop cerrará el modal.

5. Hacer clic dentro del contenido del modal no deberá cerrarlo.

### 14.4 Comportamiento de los colapsables

1. Las listas de skills de los agentes estarán cerradas por defecto.

2. Hacer clic en el control expandible mostrará la lista de skills.

3. Volver a hacer clic ocultará la lista.

4. El cambio de estado tendrá una transición visible.

### 14.5 Comportamiento del modo oscuro

1. El modo claro será el estado inicial.

2. Al activar el toggle, se aplicará el modo oscuro a toda la interfaz.

3. El estado del tema se mantendrá al cambiar de sección.

4. El cambio se implementará únicamente con JavaScript vanilla y clases `dark:` de Tailwind.


## 15. Criterios de aceptación

1. El archivo `SPECS.md` existe en la raíz del repositorio.

2. `SPECS.md` fue commiteado antes de crear o commitear cualquier archivo HTML del prototipo.

3. La especificación incluye una descripción del producto y del usuario administrador.

4. La especificación documenta HTML5, Tailwind CSS vía CDN y JavaScript vanilla como stack tecnológico.

5. La especificación incluye al menos tres requisitos visuales o interactivos concretos para cada una de las seis secciones.

6. La interfaz contiene las seis secciones obligatorias y todas son accesibles desde la barra lateral.

7. El Dashboard muestra cuatro tarjetas de métricas y un área de actividad semanal.

8. Gestión de usuarios muestra al menos cinco usuarios hardcodeados.

9. Cada usuario dispone de un dropdown funcional con `Ver detalle` y `Eliminar`.

10. `Ver detalle` abre un modal con la información del usuario seleccionado.

11. Gestión de agentes muestra al menos cuatro agentes.

12. Las skills de los agentes están colapsadas por defecto.

13. Las listas de skills pueden expandirse y colapsarse con una transición visible.

14. Cada agente dispone de un dropdown con `Configurar` y `Eliminar`.

15. `Configurar` abre un modal que contiene el prompt de sistema en un `textarea` editable.

16. La sección Skills muestra al menos cuatro skills y una explicación sobre su función dentro de AgentHub.

17. Cada skill dispone de un dropdown con `Ver detalle` y `Eliminar`.

18. Contrataciones de agentes muestra al menos cuatro contratos.

19. `Ver detalle` de un contrato abre un modal con las skills desglosadas y sus precios individuales.

20. El Log de errores muestra al menos seis errores hardcodeados.

21. Los tipos de error se distinguen mediante badges con código de color.

22. Cada error dispone de un dropdown con `Ver detalle` y `Marcar como resuelto`.

23. Todos los dropdowns se cierran al hacer clic fuera de ellos.

24. Solo un dropdown puede permanecer abierto al mismo tiempo.

25. Todos los modales se cierran mediante su botón de cierre.

26. Todos los modales se cierran al hacer clic en el backdrop.

27. Hacer clic dentro del contenido del modal no lo cierra.

28. El toggle de modo oscuro cambia toda la interfaz entre modo claro y oscuro.

29. El tema seleccionado se mantiene al navegar entre las secciones.

30. Toda la interactividad está implementada con JavaScript vanilla.

31. Tailwind CSS se carga únicamente mediante CDN.

32. No existen frameworks de JavaScript, jQuery ni herramientas de build.

33. No existen archivos CSS personalizados ni atributos `style` en línea.

34. Los datos hardcodeados son consistentes entre Gestión de agentes, Skills, Contrataciones y Log de errores.

35. El HTML utiliza etiquetas semánticas como `nav`, `header`, `main`, `section` y `table`.

36. El layout es usable en viewports de escritorio y tablet. 