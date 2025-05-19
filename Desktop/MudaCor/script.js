document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase(); // Aceita letras maiúsculas e minúsculas
  
    switch (key) {
      case 'R':
        document.body.style.backgroundColor = 'red';
        break;
      case 'G':
        document.body.style.backgroundColor = 'green';
        break;
      case 'B':
        document.body.style.backgroundColor = 'blue';
        break;
      case 'W':
        document.body.style.backgroundColor = 'white';
        break;
    }
  });
  
  document.addEventListener('keyup', function(event) {
    console.log(`Tecla liberada: ${event.key}`);
  });
  