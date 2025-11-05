# VOXOY - Servicio de PO Box

Página web informativa para servicio de paquetería (PO Box) de importaciones de McAllen, Texas a San Pedro Garza García, Monterrey.

## 🚀 Características

- **Tema automático**: Cambia entre tema claro (blanco) y oscuro (negro) según la hora del día
- **Pantalla de carga animada**: Transición de imágenes con logo y texto "Cargando"
- Diseño moderno y responsivo
- Navegación suave entre secciones
- Sección de servicios y proceso detallado
- FAQ interactivo con acordeones
- Formulario de contacto funcional
- Información de ubicaciones (McAllen y San Pedro)
- Animaciones al hacer scroll
- Menú móvil adaptativo

## 📋 Estructura del Proyecto

```
Propuesta-voxoy/
│
├── index.html          # Estructura principal de la página
├── styles.css          # Estilos y diseño responsive
├── script.js           # Funcionalidad interactiva
└── README.md           # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS, flexbox y grid
- **JavaScript (Vanilla)**: Interactividad sin dependencias
- **Google Fonts**: Fuente Inter

## 🎬 Pantalla de Carga

La página incluye una pantalla de carga animada que se muestra al iniciar:

- **Duración**: 5 segundos
- **Logo**: Imagen del logo (logo.jpg) con animación de entrada
- **Transición de imágenes**: Slider automático con las imágenes `voxy.jpeg` y `vista.jpeg`
  - Cada imagen se muestra por 2.5 segundos
- **Texto animado**: "Cargando..." con letras saltando en cascada
- **Fondo oscuro**: Para destacar los elementos

Esta pantalla desaparece automáticamente después de 5 segundos, revelando el contenido principal.

### Archivos de Imagen Necesarios
- `img/logo.jpg` - Logo principal de VOXOY
- `img/voxy.jpeg` - Imagen de fondo para el loader
- `img/vista.jpeg` - Imagen de fondo para el loader

## 📱 Secciones Incluidas

1. **Pantalla de Carga**: Animación inicial con logo y transición de imágenes
2. **Hero Section**: Presentación principal con call-to-action
3. **Características**: Ventajas del servicio
4. **Servicios**: Recepción, consolidación y envío
5. **Proceso**: Timeline del flujo de trabajo
6. **Ubicaciones**: Información de oficinas en McAllen y San Pedro
7. **FAQ**: Preguntas frecuentes con acordeón
8. **Contacto**: Formulario e información de contacto
9. **Footer**: Información adicional y enlaces

## 🎨 Características de Diseño

### Sistema de Temas Automático

La página cambia automáticamente entre dos temas según la hora del día:

**Tema Claro (6:00 AM - 7:00 PM)**
- Fondo predominante: Blanco
- Texto y detalles: Negro
- Ideal para horas diurnas

**Tema Oscuro (7:00 PM - 6:00 AM)**
- Fondo predominante: Negro
- Texto y detalles: Blanco
- Ideal para horas nocturnas

El cambio se realiza automáticamente cada minuto y al cargar la página.

### Colores

**Tema Claro:**
- Primario: Negro (#000000)
- Secundario: Gris Oscuro (#2d2d2d)
- Fondo: Blanco (#ffffff)

**Tema Oscuro:**
- Primario: Blanco (#ffffff)
- Secundario: Gris Claro (#cccccc)
- Fondo: Negro (#000000)

- **Responsive**: Adaptado para móviles, tablets y desktop
- **Animaciones**: Efectos suaves al desplazarse
- **Accesibilidad**: Navegación clara y estructura semántica

## 📝 Personalización

### Información a Actualizar

1. **Pantalla de Carga** (líneas ~15-28 en index.html):
   - Las imágenes `voxy.jpeg` y `vista.jpeg` se rotan como fondo
   - El logo `logo.jpg` se muestra en lugar del texto
   - Duración total: 5 segundos (cada imagen 2.5 segundos)
   - Ajusta el tiempo en `script.js` (líneas 13 y 17) si lo deseas
   - Para cambiar las imágenes, reemplaza los archivos en la carpeta `img/`

2. **Contacto** (líneas ~413-433 en index.html):
   - Email: info@voxoy.com
   - WhatsApp: +52 81 0000 0000
   - Dirección física del PO Box en McAllen

3. **Ubicaciones** (líneas ~260-310 en index.html):
   - Dirección exacta del PO Box en McAllen
   - Código postal
   - Área de cobertura en San Pedro

4. **Estilos** (styles.css):
   - Colores en `:root` variables (líneas ~9-40)
   - Tipografía
   - Espaciado

5. **Tema Automático** (script.js):
   - Horarios de cambio de tema en la función `setThemeByTime()`
   - Actualmente: tema oscuro entre 7 PM - 6 AM, tema claro entre 6 AM - 7 PM
   - Puedes ajustar los horarios modificando los valores `hour >= 19 || hour < 6`

## 🚀 Cómo Usar

1. Abre `index.html` en tu navegador
2. Personaliza el contenido según tus necesidades
3. Actualiza información de contacto y ubicaciones
4. Para producción, puedes usar servicios como:
   - Netlify
   - Vercel
   - GitHub Pages

## 📦 Próximos Pasos Sugeridos

- [ ] Agregar sistema de cotización en línea
- [ ] Implementar tracking de paquetes
- [ ] Añadir galería de testimonios
- [ ] Crear área de clientes con login
- [ ] Integrar pago en línea
- [ ] Conectar formulario con backend/email

## 🌐 Navegación

- Suave: Click en cualquier enlace del menú
- Header fijo que se oculta al hacer scroll hacia abajo
- Menú móvil con hamburguesa
- Links activos que cambian según la sección visible

## 📞 Contacto

Para más información sobre personalización o desarrollo:
- Email: [actualizar]
- Teléfono: [actualizar]

---

© 2024 VOXOY. Todos los derechos reservados.

