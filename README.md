# Analizador Léxico de Constantes Decimales

Este proyecto implementa un analizador léxico para constantes decimales positivas con notación científica utilizando expresiones regulares y una interfaz web interactiva.

## 📋 Descripción

El analizador léxico valida constantes decimales que siguen las siguientes reglas:
- Números decimales positivos (ej: 22.23, 3.2)
- Notación científica usando 'E' (ej: 3.2E-2, 0.1E3)
- Sin signos al inicio del número
- Un solo punto decimal permitido
- Un solo exponente 'E' permitido

### Ejemplos válidos:
- `3.2E-2` (equivalente a 0.032)
- `22.5` (número decimal simple)
- `0.1E3` (equivalente a 100)

### Ejemplos inválidos:
- `2.2EE5` (múltiples E's no permitidos)
- `-2.3` (no se permiten signos al inicio)
- `3.2.1` (múltiples puntos decimales)

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone [URL del repositorio]
cd sintactico
```

2. Abre el archivo `index.html` en un navegador web moderno.

## 💻 Uso

1. Accede a la interfaz web a través del archivo `index.html`
2. Ingresa una constante decimal en el campo de texto
3. Presiona el botón "Analizar"
4. Observa el análisis paso a paso y el resultado final

## 🛠️ Estructura del Proyecto

