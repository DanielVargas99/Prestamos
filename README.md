Desarrollo de una aplicación web para la cotización del valor a pagar de prestamos, el código es desarrollado en React, el valor a pagar del prestamo varia dependiendo de la cantidad prestada y el plazo para pagar, de la siguiente manera:

Intereses de la cantidad prestada:
- $0 - $1000 = 25%
- $1001 - $5000 = 20%
- $5001 - $10000 = 15%
- +$10000 = 10%

Intereses del plazo para pagar:
- 3 meses = 5%
- 6 meses = 10%
- 12 meses = 15%
- 24 meses = 20%

Total a pagar = cantidad + totalInteresesCantidad + totalInteresesPlazo

Este es un proyecto pequeño, se manejan conceptos básicos de React, se puede comprobar su funcionamiento en: https://sweet-mermaid-f29884.netlify.app/