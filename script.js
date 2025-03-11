function mostrarCodigo(lenguaje) {
    let codigo = "";

    switch (lenguaje) {
        case 'python':
            codigo = `print("¡Hola Mundo!")`;
            break;
        case 'javascript':
            codigo = `console.log("¡Hola Mundo!");`;
            break;
        case 'java':
            codigo = `public class HolaMundo {\n    public static void main(String[] args) {\n        System.out.println("¡Hola Mundo!");\n    }\n}`;
            break;
        case 'cpp':
            codigo = `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "¡Hola Mundo!" << endl;\n    return 0;\n}`;
            break;
        case 'php':
            codigo = `<?php\necho "¡Hola Mundo!";\n?>`;
            break;
        default:
            codigo = "Selecciona un lenguaje para ver el código.";
    }

    document.getElementById("codigo-ejemplo").textContent = codigo;
}
