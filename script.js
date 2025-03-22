document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun sayfayı yenilemesini engelle

    const nameInput = document.getElementById('nameInput').value;
    const messageDiv = document.getElementById('message');

    // Kullanıcı girdisini doğrudan HTML'e ekleyerek XSS zafiyeti oluştur
    messageDiv.innerHTML = `Welcome, <strong>${nameInput}</strong>!`;
});
