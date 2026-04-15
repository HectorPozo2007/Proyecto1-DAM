# 🛠️ TinkerNet - Red Social de Reparaciones y Bricolaje

> Proyecto final para 1º de DAM .

## 📖 Sobre el Proyecto

**TinkerNet** es una red social diseñada para empoderar a los usuarios a reparar sus propios objetos. En un mundo donde tendemos a tirar las cosas cuando se estropean, esta plataforma busca crear una comunidad donde cualquiera puede:

* **Publicar** guías paso a paso sobre cómo han reparado sus aparatos (informática, electrónica, automoción, hogar, etc.).
* **Preguntar** dudas sobre problemas técnicos específicos.
* **Compartir** soluciones, trucos y herramientas recomendadas en diversos ámbitos.

El objetivo es fomentar la economía circular, el ahorro y el aprendizaje colaborativo.

---

## 🚀 Características Principales

* **Sistema de Usuarios:** Roles diferenciados (Administrador, Moderador, Usuario Estándar, Técnico Certificado).
* **Gestión de Problemas (Posts):** Los usuarios pueden abrir "hilos" o "posts" detallando un problema.
* **Aportación de Soluciones:** La comunidad puede sugerir soluciones específicas a los problemas planteados, incluyendo texto e imágenes.
* **Categorización:** Todo el contenido está organizado por categorías (Electrónica, Hogar, Automoción, etc.) para facilitar la búsqueda.
* **Interacción Social:** Sistema de comentarios en los posts para debatir soluciones o pedir aclaraciones.

---

## 🛠️ Tecnologías Utilizadas

* **Base de Datos:** MySQL
* **Modelado:** MySQL Workbench
* **Lenguaje Principal:** Java
* **Entorno de Desarrollo:** IntelliJ IDEA / Eclipse

---

## 🗄️ Estructura de la Base de Datos

El núcleo del proyecto es una base de datos relacional robusta. Aquí tienes un resumen de las entidades principales:

* `Usuario`: Almacena la información de los miembros de la red.
* `Post_problema`: Registra los problemas que los usuarios publican.
* `Solucion`: Almacena las guías o respuestas a los problemas.
* `Categoría`: Clasifica los posts y soluciones.
* `Rol` y `Permisos`: Gestionan la seguridad y el acceso a las funciones de la aplicación.

---

## ⚙️ Instalación y Uso

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone [https://github.com/tu-usuario/TinkerNet.git](https://github.com/tu-usuario/TinkerNet.git)
