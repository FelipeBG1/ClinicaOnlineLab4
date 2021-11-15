![Alt text](./src/assets/screenshots/loginBoton.png?raw=true)

# Clínica Online

Se puede probar el funcionamiento en: https://clinicaonlinebustosgilfelipe.herokuapp.com/
#
## Al ingresar a la clinica se encontrará con la bienvenida:
Esta le indicará sobre la barra superior, que a partir de los botones en ella se accederá a las diferentes secciones de la clínica, en la que podrá acceder al login y al registro, en el caso de tratar de logearse podrá hacerlo con algun perfil de ingreso rapido.

![Alt text](./src/assets/screenshots/GifBienvenido.gif?raw=true)

#
## Secciones:
### Solicitar turno
A esta seccion solo puede ingresar un administrador o un paciente, para acceder a esta sección debe dirigirse a la barra superior.

![Alt text](./src/assets/screenshots/SolicitarTurnoBotonBarra.png?raw=true)

Y para solicitar un turno es tan sencillo como seguir los siguientes pasos:

![Alt text](./src/assets/screenshots/GifSolicitarTurno.gif?raw=true)

Si accede como administrador deberá primero seleccionar el paciente al cual le sacará el turno, para luego continuar solicitando el turno.
### Perfil
Para acceder a esta sección debe hacer click en su nombre y apellido en al esquina superior derecha.

![Alt text](./src/assets/screenshots/perfilBoton.png?raw=true)

A partir de aqui podrá a acceder a Mi Perfil, si es apciente podrá ver las historias clinicas y descargarlas en PDF, o Mis turnos, con todos sus turnos, y si se ha logeado como administrador a Turnos, donde se encontrará una lista con todos los turnos de la Clínica. 
Donde podrá aceptar turnos, cancelarlos, finalizarlos, rechazarlos y demas acciones, como ver reseña, ver los comentarios del especialista, completar una encuesta, calificar la atención del especialista, completar un diagnostico, etc. Todo esto dependiendo el tipo de perfil que usted tenga.
Además, si es que lo necesita, podrá buscar turnos, segun algunos datos de estos, como el especialista, el paciente, datos específicos del diganostico, la fecha, la hora y demás.

![Alt text](./src/assets/screenshots/GifPerfil.gif?raw=true)

### Usuarios
A esta sección solo tendrá acceso un administrador, y para hacerlo deberaá ir a la barra superior.

![Alt text](./src/assets/screenshots/UsuariosBotonBarra.png?raw=true)

En esta sección se mostrarán a los pacientes, especialistas y administradores registrados dependiendo que boton que seleccione. Si desea ver los administradores, a parte de ver la lista, tendrá la opción de registrar uno que lo dirigirá al Login. Podrá generar un excel con todos los usuarios que hay registrados en al clínica.
Además podrá ver las historias clínicas de los pacientes, generar un excel con las consultas de ese paciente, habiolitar o inhabilitar la cuenta de los especialistas.

![Alt text](./src/assets/screenshots/GifUsuarios.gif?raw=true)

### Pacientes
A esta sección solo tendrá acceso un especialista, para acceder a ella debe ir a la barra superior.

![Alt text](./src/assets/screenshots/PacientesBotonBarra.png?raw=true)

En esta sección podrá ver a todos los apcientes que se han atendido por lo menos una vez con él. Podrá ver las historias clinicas y también la fecha de las ultimas tres atenciones que han tenido con él.

![Alt text](./src/assets/screenshots/GifPacientes.gif?raw=true)

### Estadisticas
A esta sección solo podrá acceder un administrador para ello debe ir a la barra superior.

![Alt text](./src/assets/screenshots/EstadisticasBotonBarra.png?raw=true)

Aqui podrá ver diferentes gráficos con datos de todos los turnos de la clínica, ya sea por dia, por especialidad, los quehan finalizado según especialistas en un determinado rango de dias, o todos los turnos directamente, tambien según especialistas, en un rango de fechas y descargar cada uno como pdf.
También podrá ver los logeos que ha tenido la Clínica especificando el usuario, el dia y la hora del logeo.

![Alt text](./src/assets/screenshots/GifEstadisticas.gif?raw=true)
