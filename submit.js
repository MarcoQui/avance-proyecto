const datos = {
    nombre: '',
    email: '',
    mensaje: '',
  }
  
  const formulario = document.querySelector('.formulario')
  
  formulario.addEventListener('submit', (event) => {
    event.preventDefault() // Detiene el envío del formulario
    // Imprimimos los datos
    console.log('submit', datos)
  
    const { nombre, email, mensaje } = datos
  
    if(nombre === '' || email === '' || mensaje === '')
      mostrarMensaje('TODOS LOS CAMPOS SON OBLIGATORIOS', 'error')
    else 
      mostrarMensaje('MENSAJE ENVIADO CORRECTAMENTE', 'correcto')
  })
  
  function mostrarMensaje(mensaje, clase) {
    const alerta = document.createElement('p')
    alerta.textContent = mensaje
    alerta.classList.add(clase)
  
    formulario.appendChild(alerta)
  
    setTimeout(() => {
      alerta.remove()
    }, 3000);
  }
  
  // Eventos de los inputs
  const nombre = document.querySelector('#nombre')
  const email = document.querySelector('#email')
  const mensaje = document.querySelector('#mensaje')
  
  
  nombre.addEventListener('input', leerTexto)
  email.addEventListener('input', leerTexto)
  mensaje.addEventListener('input', leerTexto)
  
  function leerTexto(event) {
    datos[event.target.id] = event.target.value
  }
  
  
