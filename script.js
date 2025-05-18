function WhatsApp(){
    var nama = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById("message").value;

    var walink = "https://wa.me/6281210672183?text="
    + "Nama : " + nama + "%0a"
    + "Email : " + email + "%0a"
    + "Nomor Telepon : " + phone + "%0a"
    + "Pesan : " + message;

    window.open(walink, '_blank').focus();
}

function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Add these animation classes to your CSS
document.head.insertAdjacentHTML('beforeend', `
<style>
.hidden {
    opacity: 0;
    filter: blur(5px);
    transform: translateY(100px);
    transition: all 1s;
}

.show {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
}

@media (prefers-reduced-motion) {
    .hidden {
        transition: none;
    }
}
</style>
`);