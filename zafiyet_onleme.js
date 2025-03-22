document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('nameInput').value;
    const messageDiv = document.getElementById('message');

    // Kullanıcı girdisini temizle (HTML etiketlerini kaldır)
    const cleanInput = nameInput.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Temizlenmiş girdiyi ekle
    messageDiv.innerHTML = `Merhaba, <strong>${cleanInput}</strong>!`;
});
