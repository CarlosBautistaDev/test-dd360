# Tests REACT GAME WORDLE

Prueba para DD360 de Carlos Bautista!

## Build and run

### To Run Locally:

clonar repositorio y correr con run start 
npm install
npm run start

abrira en  [http://localhost:3000] en el buscador.

## Requisitos

Requerimientos:
1. Maquetar el siguiente figma
Se compone de 3 vistas. Una donde muestra las instrucciones del juego, otra donde
muestra el tablero del juego y la última, donde encontramos el resultado del juego
*Captura obtenida de figma

2. Deberá detectar que es la primera vez que entra y deberá mostrar las instrucciones
del juego
3. Al iniciar, la aplicación deberá seleccionar automáticamente una palabra de 5 letras
del catálogo de palabras
4. Al teclear o al dar click en una letra del teclado virtual, la letra se mostrará en la
primera caja que se encuentre vacía y así sucesivamente
5. Al completar una fila de 5 letras, la aplicación compará cada letra de palabra
formada con la palabra seleccionada en el punto 3 y se aplicará la siguiente lógica:
        a. Si la letra ingresada está en el mismo lugar, la caja se pintara de verde
        b. Si la letra ingresada está en la palabra pero no en el mismo lugar, la caja se
            pintará de amarillo
        c. Si la letra ingresada no se encuentra en la palabra, la caja se mostrar de
            color gris

6. Si coincide la palabra ingresada con la seleccionada, mostrará el modal de
estadísticas y sumará un punto al contador de victorias y al contador de partidas
7. Si el usuario llena las 5 filas sin lograr que coincida la palabra, mostrará el modal de
estadísticas y sumará un punto al contador de partidas. Además, mostrará la palabra
que fue seleccionada
8. Cada 5 minutos la aplicación seleccionará otra palabra y limpiará el tablero, esta
palabra no debe repetirse
9. La aplicación mostrará el modal de instrucciones al dar click en el icono de

10. La aplicación mostrará el modal de estadísticas al dar click en el icono de
11. La aplicación se mostrará en “modo oscuro” al activar el toggle*
12. La aplicación se mostrará en “modo claro” al desactivar el toggle*


### Tecnologias utilizadas:
● React V 17.0.2
● Typescript V 4.5.4
● TailwindCSS V 3.0.12

### Notas:
● Subir código a un repositorio git y compartir enlace
● Esta prueba tiene una duración de 2 días
    
