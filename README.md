
### `index.html`

Este archivo contiene la estructura HTML del formulario de registro.

### `script.js`

Este archivo contiene la lógica de validación del formulario y el manejo del almacenamiento local. Algunas de las funciones clave incluyen:

- `validatePasswordMatch()`: Verifica que las contraseñas ingresadas coincidan.
- `showError(errorElement, message)`: Muestra un mensaje de error en el formulario.
- `clearError(errorElement)`: Limpia los mensajes de error del formulario.
- `saveToLocalStorage()`: Guarda el correo electrónico en el almacenamiento local.
- `bodyBuilderJSON()`: Construye un objeto JSON con los datos del formulario.

### `styles.css`

Este archivo contiene los estilos CSS para el formulario y otros elementos de la página.

## Tecnologías Usadas

- **HTML5**: Para la estructura del formulario y la página web.
- **CSS3**: Para los estilos y el diseño de la página.
- **JavaScript**: Para la lógica de validación del formulario y el manejo del almacenamiento local.

## Cómo Ejecutar el Proyecto

1. Clona el repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web preferido.

## Funcionalidades

- Validación de que las contraseñas ingresadas coincidan.
- Muestra mensajes de error si las contraseñas no coinciden.
- Guarda el correo electrónico en el almacenamiento local del navegador.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
