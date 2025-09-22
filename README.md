```markdown
```
# 🎁 Callenge Amigo Secreto

Aplicación web interactiva para organizar sorteos de amigo secreto. Permite ingresar nombres, realizar el sorteo aleatorio y reiniciar el juego, todo con una interfaz accesible y moderna.

## 📌 Propósito del proyecto

Este proyecto fue desarrollado como ejercicio práctico de manipulación del DOM, lógica condicional y diseño responsivo. Está pensado para demostrar habilidades en HTML, CSS y JavaScript puro, sin frameworks, y puede ser usado como base para proyectos más complejos.

## 🧠 Funcionalidades principales

- ✅ Registro dinámico de participantes
- 🎲 Sorteo aleatorio con visualización inmediata
- 🔄 Reinicio del juego con limpieza de datos y reactivación de controles
- 🧩 Accesibilidad mejorada (`aria-label`, `aria-live`)
- 🎨 Estilos personalizados con variables CSS y tipografía moderna

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/JhaenCarloHe/Challenge-Amigo-Secreto.git
   ```
2. Abre el archivo `index.html` en tu navegador.

> No se requieren dependencias externas ni instalación de paquetes.

## 🛠️ Estructura del proyecto

```
├── index.html          # Estructura principal del juego
├── style.css           # Estilos personalizados y responsivos
├── app.js              # Lógica del juego y manipulación del DOM
├── assets/             # Imágenes utilizadas en la interfaz
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
```

## 🚀 Cómo ejecutar el proyecto

1. Abre `index.html` en cualquier navegador moderno.
2. Escribe los nombres de los participantes en el campo de texto.
3. Haz clic en “Añadir” para agregarlos a la lista.
4. Cuando haya al menos dos nombres, haz clic en “Sortear Amigo”.
5. Para reiniciar el juego, haz clic en “Reiniciar Juego”.

## ⚠️ Posibles problemas y soluciones

- **No se activa el botón de sorteo**: Verifica que haya al menos dos nombres registrados.
- **El botón de reinicio no cambia de color**: Asegúrate de que las variables CSS estén bien definidas y contrasten visualmente.
- **Accesibilidad limitada en navegadores antiguos**: El uso de `aria-label` y `aria-live` puede no estar soportado en versiones obsoletas.

## 📚 Tecnologías utilizadas

- HTML5
- CSS3 (Flexbox, variables, tipografía)
- JavaScript (DOM, lógica condicional)
- Google Fonts: Inter & Merriweather

## 🧩 Posibles mejoras

- Validación de nombres duplicados
- Almacenamiento en `localStorage` para persistencia entre sesiones
- Exportación de resultados como PDF o imagen
- Historial de sorteos
- Animaciones suaves para transiciones

## 👨‍💻 Autor

Desarrollado por [JhaenCarloHe](https://github.com/JhaenCarloHe) como parte de su proceso de aprendizaje y consolidación de fundamentos web.  
Este proyecto refleja buenas prácticas, modularidad y enfoque en accesibilidad.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo, modificarlo y compartirlo libremente.
```
