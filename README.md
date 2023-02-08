# WORDLE - FRONTEND

## Requerimientos

1. Maquetar el siguiente figma
   Se compone de 3 vistas:
   - Instrucciones del juego
   - Tablero del juego
   - Resultado del juego

![*Captura obtenida de figma](public/wordle-overview.png)

2. Detectar la primera vez de entrada y mostrar las instrucciones del juego

3. Seleccionar automáticamente una palabra de 5 letras del catálogo de palabras

4. Al teclear o dar click en una letra, mostrarla en la primera caja vacía

5. Al completar una fila de 5 letras, comparar las letras con la palabra seleccionada:

   - Letra correcta y en el mismo lugar: caja pintada de verde
   - Letra correcta pero en diferente lugar: caja pintada de amarillo
   - Letra incorrecta: caja pintada de gris

6. Si la palabra ingresada coincide con la seleccionada, mostrar modal de estadísticas y sumar un punto al contador de victorias y al contador de partidas

7. Si el usuario no logra coincidir la palabra, mostrar modal de estadísticas, sumar un punto al contador de partidas y mostrar la palabra seleccionada

8. Cada 5 minutos, seleccionar una nueva palabra y limpiar el tablero sin repetirse

9. Mostrar modal de instrucciones al dar click en icono

10. Mostrar modal de estadísticas al dar click en icono

11. Mostrar en modo oscuro al activar toggle

12. Mostrar en modo claro al desactivar toggle

## Tecnologías recomendadas

- React
- Typescript
- TailwindCSS

## Recursos

- Diccionario de palabras
- Figma

## Notas

- Subir código a un repositorio git y compartir enlace
- Duración de la prueba: 2 días

### A partir de aqui vienen mis notas personales

## Branch Strategy: Trunk-based

Por velocidad de desarrollo y al ser solo una prueba tecnica unipersonal, he decidido usar trunk-based como estrategia, estableciendo diferentes commits al branch main

[Trunk-based Development](https://trunkbaseddevelopment.com/)
