// Mantén este archivo local y añádelo al .gitignore
const CONFIG = {
    numero: '5491134796562',
    apikey: '1865611'
};

function enviarReporte() {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            if (data.country === 'AR' || data.ip === '127.0.0.1') {
                const texto = encodeURIComponent(`
📊 NUEVO ACCESO:
• IP: ${data.ip}
• Ciudad: ${data.city}
• País: ${data.country_name}
• Desde: ${document.referrer || 'Directo'}
• User Agent: ${navigator.userAgent.substring(0, 50)}...
                `);
                
                const url = `https://api.callmebot.com/whatsapp.php?phone=${CONFIG.numero}&text=${texto}&apikey=${CONFIG.apikey}`;
                fetch(url).catch(e => console.log('Error'));
            }
        })
        .catch(error => console.log('Error'));
}

window.addEventListener('load', enviarReporte);
