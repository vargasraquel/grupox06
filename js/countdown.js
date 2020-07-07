	// Dia e hora do evento
	const countDownDate = new Date("Jul 9, 2020 19:00:00").getTime();

	// Atualizar contagem a cada 1 segundo
	let x = setInterval(function() {

    // Dia e hora de hoje
    let now = new Date().getTime();
    
    // Encontrar distância entre agora e o dia do evento
    let distance = countDownDate - now;
    
    // Calculo de dias, horas, minutos e segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Configurar horas, minutos e segundos com 0 na frente
    if (seconds < 10) {
    seconds = `0${seconds}`;
    } if (minutes < 10) {
  	minutes = `0${minutes}`;
    } if (hours < 10) {
  	hours = `0${hours}`;
    }
   
    // Mostrar o resultado com a id="relogio" e id="relogio1"
    document.getElementById("relogio").innerHTML = `<div class='contador'>${days}</div> <div class='contador'>${hours}</div> <div class='contador'> ${minutes}</div> <div class='contador'> ${seconds}</div>`;
    document.getElementById("relogio1").innerHTML = `<div class='contador1'>${days}</div> <div class='contador1'>${hours}</div> <div class='contador1'> ${minutes}</div> <div class='contador1'> ${seconds}</div>`;
    

    // Quando a contagem acabar, mostrar 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("relogio").innerHTML = "Tempo esgotado.";
      document.getElementById("relogio1").innerHTML = "Tempo esgotado.";
    }
  
}, 1000);