(function() {
    try {
        // Verificar si "DAN" está definido en el entorno global
        if (typeof DAN !== "undefined") {
            console.warn("DAN detectado. Posible ejecución en entorno modificado.");
            return;
        }

        // Verificar si se bloquean ciertas funciones clave como console.log
        const testFunc = function() {};
        Object.defineProperty(window, "console", { value: testFunc, configurable: false });

        if (console !== testFunc) {
            console.warn("Posible manipulación del entorno detectada.");
            return;
        }

        console.log("Script ejecutándose normalmente.");
    } catch (e) {
        console.error("Error detectando entorno:", e);
    }
})();
