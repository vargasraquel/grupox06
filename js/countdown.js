	  // Dia e hora do evento
	  const countDownDate = new Date("Jul 9, 2020 19:00:00").getTime();

	  // Atualizar contagem a cada 1 segundo
	  let x = setInterval(function() {

    // Dia e hora de hoje
    let now = new Date().getTime();
    
    // Encontrar distância entre agora e o dia do evento
    let distance = countDownDate - now;
    
    // Calculo de dias, horas, minutos e segundos
    let dias = Math.floor(distance / (1000 * 60 * 60 * 24));
    let horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Fazer horas, minutos e segundos aparecer com 0 na frente
    if (segundos < 10) {
    segundos = `0${segundos}`;
    } if (minutos < 10) {
  	minutos = `0${minutos}`;
    } if (horas < 10) {
    horas = `0${horas}`;
    }
   
    // Mostrar o resultado com a id="relogio" e id="relogio1"
    document.getElementById("relogio").innerHTML = `<div class='contador'>${dias}</div> <div class='contador'>${horas}</div> <div class='contador'> ${minutos}</div> <div class='contador'> ${segundos}</div>`;
    document.getElementById("relogio1").innerHTML = `<div class='contador1'>${dias}</div> <div class='contador1'>${horas}</div> <div class='contador1'> ${minutos}</div> <div class='contador1'> ${segundos}</div>`;
    

    // Quando a contagem acabar, mostrar 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("relogio").innerHTML = "O evento acabou.";
      document.getElementById("relogio1").innerHTML = "O evento acabou.";
    }
  
}, 1000);