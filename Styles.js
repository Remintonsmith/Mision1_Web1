:root {
  --fondo: #f4f4f4;
  --texto: #1e1e1e;
  --boton: #3b6ef5;
  --boton-texto: #ffffff;
}

body.oscuro {
  --fondo: #15151c;
  --texto: #ececec;
  --boton: #f5a63b;
  --boton-texto: #15151c;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background: var(--fondo);
  color: var(--texto);
  font-family: system-ui, sans-serif;
  transition: background 0.4s, color 0.4s;
}

.juego {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
}

.contador {
  font-size: 4rem;
  font-weight: bold;
  margin: 0 0 1rem;
}

/* Zona en la que el botón puede moverse */
.zona {
  position: relative;
  width: min(600px, 100%);
  height: 400px;
}

.boton {
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  border: none;
  border-radius: 12px;
  background: var(--boton);
  color: var(--boton-texto);
  cursor: pointer;
  transition: left 0.3s, top 0.3s, scale 0.3s, background 0.4s;
}

.boton:active {
  filter: brightness(0.85);
}

/* Tamaños que aplica el evento de cambio de tamaño */
.boton.pequeno {
  scale: 0.6;
}

.boton.grande {
  scale: 1.6;
}