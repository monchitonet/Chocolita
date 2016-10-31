# Chocolita, un tema base de WordPress con Gulp y Sass

![](https://raw.githubusercontent.com/monchitonet/Chocolita/master/screenshot.png?raw=true | width=350)

Chocolita es un tema base de WordPress basado en [Underscores](http://underscores.me/), con una implementación de [Sass](http://sass-lang.com/) y una configuración básica de [Gulp](http://gulpjs.com/), que ayuda a acelerar y optimizar el proceso de desarrollo de temas personalizados para WordPress desde cero.

### Requerimientos

Para utilizar este tema necesitas instalar:

- [Node.js](https://nodejs.org/en/)
- [Bower](http://bower.io/) - un manejador de paquetes

### Instalar Node.js y Bower

Existen diversos manuales y tutoriales en la web sobre como instalar Node.js, dependiendo del sistema operativo que utilizas. Si tienes alguna duda, [baja el paquete](https://nodejs.org/en/download/) correspondiente a tu plataforma y corre el instalador.

Puedes verificar tu instalación de Node.js con:


```
$ node -v
```

Una vez que tengas instalado Node.js, puedes proceder a instalar Bower con:


```
$ npm install -g bower
```

Básicamente, la función de Bower es automatizar la descarga manual de scripts que utilizas en tu tema, bajándolos y poniéndolos automáticamente en su directorio /js/ con un comando simple como este:


```
$ bower install <paquete>

# Instalar jQuery
$ bower install jquery
```

### Instalando el tema

[Instala WordPress](https://codex.wordpress.org/es:Instalando_Wordpress) como lo haces normalmente. Cuando hayas finalizado, necesitas clonar este repositorio utilizando los siguientes comandos:

```
$ cd /tu-directorio-de-wordpress/wp-content/themes/
$ git clone git@github.com:monchitonet/Chocolita.git
```

Si al clonar el tema te sale el siguiente mensaje de error:

```
Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```
...es que hay problemas de permisos. Consulta la [documentación oficial](https://help.github.com/articles/error-permission-denied-publickey/) correspondiente a tu sistema operativo. Alternativamente, puedes clonar Chocolita por https:

```
$ git clone https://github.com/monchitonet/Chocolita.git
```

Por último, cambia la línea 24 del archivo `gulpfile.js` con los datos de tu servidor. Ingresa a WordPress y activa el tema.

### Corriendo Gulp

Para asegurarte de que Gulp tenga todas las dependencias instaladas en el sistema, utiliza el comando:

```
$ npm install
$ bower install
```

Una vez que esté listo, solo necesitas correr:

```
$ gulp
```

El comando anterior ejecuta las tareas predefinidas en el archivo `gulpfile.js`. Puedes agregar tus propias tareas en este archivo. También puedes ejecutar tareas individuales, llamándolas por su nombre. Por ejemplo:

```
$ gulp sass
```

### Soporte y preguntas

Si tienes alguna duda acerca del uso de este tema, puedes [mandarnos un mensaje](http://www.monchito.net/contacto/).

### Enlaces de interés

- [Manual de Sass](http://librosweb.es/libro/sass/capitulo_4.html)
- [Tutorial de Gulp](https://platzi.com/blog/automatizacion-gulp-js/)

### Contribuyentes

- [Leandro Gómez](https://twitter.com/leogg)

### Licencia

Liberado bajo una licencia GPLv2 o mayor.
