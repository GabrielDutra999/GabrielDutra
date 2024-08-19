function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.style.display = 'none';
    });
    document.getElementById(screenId).style.display = 'flex';
}

function login() {
    // Aqui você deve adicionar a lógica de autenticação
    showScreen('main-menu');
}

function register() {
    // Aqui você deve adicionar a lógica de registro
    showScreen('login-screen');
}

function logout() {
    showScreen('login-screen');
}

function takePhoto() {
    // Aqui você deve adicionar a lógica para tirar foto
    const photoElement = document.getElementById('report-photo');
    photoElement.src = 'photo-placeholder.png'; // Substitua pelo caminho da foto tirada
    photoElement.style.display = 'block';
}

function sendReport() {
    // Aqui você deve adicionar a lógica para enviar a denúncia
    alert('Denúncia enviada!');
    showScreen('main-menu');
}

function saveProfile() {
    // Aqui você deve adicionar a lógica para salvar o perfil
    alert('Perfil salvo!');
    showScreen('main-menu');
}

function recoverPassword() {
    // Aqui você deve adicionar a lógica para recuperação de senha
    alert('Email de recuperação enviado!');
    showScreen('login-screen');
}

function getLocation() {
    const locationStatus = document.getElementById('location-status');
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
        locationStatus.innerHTML = "Obtendo localização...";
    } else {
        locationStatus.innerHTML = "Geolocalização não é suportada por este navegador.";
    }
}

function showPosition(position) {
    const locationStatus = document.getElementById('location-status');
    locationStatus.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
    // Aqui você pode salvar a localização em variáveis ou enviar para o servidor
}

function showError(error) {
    const locationStatus = document.getElementById('location-status');
    switch(error.code) {
        case error.PERMISSION_DENIED:
            locationStatus.innerHTML = "Usuário negou a solicitação de Geolocalização.";
            break;
        case error.POSITION_UNAVAILABLE:
            locationStatus.innerHTML = "Informações de localização estão indisponíveis.";
            break;
        case error.TIMEOUT:
            locationStatus.innerHTML = "A solicitação para obter a localização foi expirado.";
            break;
        case error.UNKNOWN_ERROR:
            locationStatus.innerHTML = "Um erro desconhecido ocorreu.";
            break;
    }
}
