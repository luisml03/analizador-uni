# Analizadores Sintácticos

Este proyecto contiene dos analizadores sintácticos:
1. Analizador de Constantes Decimales
2. Analizador de Expresiones y Generador de Código Ensamblador

## 📋 Descripción

### Analizador de Constantes Decimales
Valida constantes decimales que siguen las siguientes reglas:
- Números decimales positivos (ej: 22.23, 3.2)
- Notación científica usando 'E' (ej: 3.2E-2, 0.1E3)
- Sin signos al inicio del número
- Un solo punto decimal permitido
- Un solo exponente 'E' permitido

### Analizador de Expresiones
Procesa expresiones algebraicas y genera:
- Código ensamblador equivalente
- Árbol sintáctico visual
- Soporta múltiples operaciones (+, -, *, /)

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone [URL del repositorio]
cd sintactico
```

2. Abre cualquiera de los archivos HTML en un navegador moderno:
- `index.html` para el analizador de constantes
- `ensambler.html` para el analizador de expresiones

## 💻 Uso

### Analizador de Constantes
1. Ingresa una constante decimal en el campo de texto
2. Presiona "Analizar"
3. Observa el análisis paso a paso y el resultado

Ejemplos válidos:
- `3.2E-2` (equivalente a 0.032)
- `22.5` (decimal simple)
- `0.1E3` (equivalente a 100)

### Analizador de Expresiones
1. Ingresa una expresión algebraica (ej: `y = m * x - b`)
2. Presiona "Procesar"
3. Observa el código ensamblador y el árbol sintáctico

Ejemplos válidos:
- `x = a + b`
- `y = m * x - b`
- `z = a + b + c + d`

## 🛠️ Estructura del Proyecto

```
sintactico/
│
├── index.html          # Analizador de constantes decimales
├── ensambler.html      # Analizador de expresiones
├── script.js          # Lógica del analizador de constantes
├── README.md          # Documentación
└── logo.ico           # Favicon del sitio
```

## ⚙️ Características

### Analizador de Constantes:
- Validación en tiempo real
- Análisis paso a paso
- Ejemplos interactivos
- Interfaz moderna y responsiva

### Analizador de Expresiones:
- Generación de código ensamblador
- Visualización de árbol sintáctico
- Soporte para múltiples operaciones
- Interfaz intuitiva

## 🔍 Tecnologías Utilizadas

- HTML5
- CSS3 (con efectos modernos)
- JavaScript (ES6+)
- Bootstrap 5
- Font Awesome

## 👥 Contribución

1. Haz un Fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/mejora`)
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega mejora'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles

## ✉️ Contacto

[Luis hernando martinez londoño] - [luis.martinez.8355@miremington.edu.co]

