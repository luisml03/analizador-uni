function esConstanteValida(cadena) {
    const pasos = [];
    let valido = true;
    let mensaje = "";

    // Validaciones paso a paso
    if (cadena === "") {
        valido = false;
        mensaje = "La entrada está vacía";
        pasos.push({texto: "Verificando entrada...", estado: "error"});
        return { valido, mensaje, pasos };
    }

    pasos.push({texto: "Entrada recibida: " + cadena, estado: "success"});

    // Verificar múltiples E's
    const countE = (cadena.match(/E/g) || []).length;
    if (countE > 1) {
        valido = false;
        mensaje = "No se permite más de un exponente (E)";
        pasos.push({texto: "Se detectaron múltiples exponentes", estado: "error"});
        return { valido, mensaje, pasos };
    }

    // Verificar múltiples puntos decimales
    const countDots = (cadena.match(/\./g) || []).length;
    if (countDots > 1) {
        valido = false;
        mensaje = "No se permiten múltiples puntos decimales";
        pasos.push({texto: "Se detectaron múltiples puntos decimales", estado: "error"});
        return { valido, mensaje, pasos };
    }

    // Verificar caracteres válidos
    if (!/^[0-9.E-]+$/.test(cadena)) {
        valido = false;
        mensaje = "Caracteres inválidos detectados";
        pasos.push({texto: "Caracteres inválidos detectados", estado: "error"});
        return { valido, mensaje, pasos };
    }

    // Verificar que no empiece con signo negativo
    if (cadena.startsWith('-')) {
        valido = false;
        mensaje = "No se permiten números negativos";
        pasos.push({texto: "Se detectó un signo negativo al inicio", estado: "error"});
        return { valido, mensaje, pasos };
    }

    // Verificar formato decimal básico
    const partes = cadena.split('E');
    const parteDecimal = partes[0];
    const parteExponente = partes[1];

    // Validar parte decimal
    if (!/^[0-9]+(\.[0-9]+)?$/.test(parteDecimal)) {
        valido = false;
        mensaje = "Formato decimal incorrecto";
        pasos.push({texto: "Formato de la parte decimal incorrecto", estado: "error"});
        return { valido, mensaje, pasos };
    }
    pasos.push({texto: "Parte decimal válida", estado: "success"});

    // Validar exponente si existe
    if (parteExponente !== undefined) {
        if (!/^-?[0-9]+$/.test(parteExponente)) {
            valido = false;
            mensaje = "Formato de exponente incorrecto";
            pasos.push({texto: "Formato del exponente incorrecto", estado: "error"});
            return { valido, mensaje, pasos };
        }
        pasos.push({texto: "Exponente válido", estado: "success"});
    }

    // Si todo está correcto
    pasos.push({texto: "Constante decimal válida en base 10", estado: "success"});
    return { valido, mensaje, pasos };
}

function analizar() {
    const entrada = document.getElementById("entrada").value.trim();
    const resultadoDiv = document.getElementById("resultado");
    const pasosDiv = document.getElementById("pasos-analisis");
    const mensajeFinal = document.getElementById("mensaje-final");

    const resultado = esConstanteValida(entrada);
    
    // Mostrar pasos del análisis
    resultadoDiv.classList.remove('d-none');
    pasosDiv.innerHTML = '';
    
    resultado.pasos.forEach((paso, index) => {
        setTimeout(() => {
            const pasoElement = document.createElement('div');
            pasoElement.className = `analysis-step ${paso.estado === 'success' ? 'step-active' : ''}`;
            pasoElement.innerHTML = `
                <i class="bi bi-${paso.estado === 'success' ? 'check-circle' : 'x-circle'}-fill"></i>
                ${paso.texto}
            `;
            pasosDiv.appendChild(pasoElement);
        }, index * 300);
    });

    // Mostrar mensaje final
    mensajeFinal.className = `alert alert-${resultado.valido ? 'success' : 'danger'}`;
    mensajeFinal.textContent = resultado.valido ? 
        `"${entrada}" es una constante válida.` :
        `"${entrada}" no es válida: ${resultado.mensaje}`;
}

function setExample(example) {
    document.getElementById("entrada").value = example;
    analizar();
}
