document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Tampilkan loader animasi
    const loader = document.getElementById('loader');
    loader.style.display = 'block';

    // Simulasi proses login (2 detik)
    setTimeout(() => {
        loader.style.display = 'none';
        alert('Login berhasil!');
    }, 2000);
});
