document.addEventListener("DOMContentLoaded", () => {
    // INIEZIONE AUTOMATICA DELL'HEADER UNIVERSALE
    const headerHTML = `
        <header>
            <div class="nav-container">
                <a href="index.html" class="logo">
                    <img src="https://rpbbbqekqkwzyhpjeusp.supabase.co/storage/v1/object/public/immagini-salone/logo-enjoy-bianco.png" 
                         alt="Enjoy Bio Hair Spa Catania" 
                         style="height: 42px; width: auto; vertical-align: middle;">
                </a>
                
                <button class="mobile-menu-toggle" id="btn-toggle-menu" onclick="toggleMenuMobile()" aria-label="Apri Menu">
                    &#9776;
                </button>

                <ul class="nav-links" id="main-nav-links">
                    <li><a href="index.html#head-spa" onclick="chiudiMenuMobile()">Cascata Giapponese</a></li>
                    <li><a href="index.html#oway" onclick="chiudiMenuMobile()">Oway Official</a></li>
                    <li><a href="etica.html" onclick="chiudiMenuMobile()">Codice Etico</a></li>
                    <li><a href="index.html#servizi" onclick="chiudiMenuMobile()">Trattamenti</a></li>
                    <li><a href="recensioni.html" onclick="chiudiMenuMobile()">Recensioni</a></li>
                    <li><a href="index.html#contatti" onclick="chiudiMenuMobile()">Dove Siamo</a></li>
                    <li><a href="https://wa.me/390952165888" target="_blank" class="btn-gold-small">Prenota WhatsApp</a></li>
                </ul>
            </div>
        </header>
    `;

    // INIEZIONE AUTOMATICA DEL FOOTER UNIVERSALE
    const footerHTML = `
        <footer>
            <p><strong>Enjoy Parrucchieri Bio Hair Spa</strong> &bull; Via Padova, 52, 95127 Catania CT</p>
            <p>Partner Ufficiale Oway &bull; Cascata Giapponese Head Spa &bull; Centro Cheratina Specializzato</p>
            <p style="margin-top: 1.5rem; font-size: 0.75rem; color: #555;">&copy; 2026 Tutti i diritti riservati. Design & Tech by Enjoy Studio.</p>
        </footer>
    `;

    // Inserisce l'header all'inizio del body se non esiste già
    if (!document.querySelector('header')) {
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }

    // Inserisce il footer alla fine del body se non esiste già
    if (!document.querySelector('footer')) {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
});

// Funzioni globali per il menu mobile
function toggleMenuMobile() {
    const navLinks = document.getElementById('main-nav-links');
    if (navLinks) navLinks.classList.toggle('mobile-open');
}

function chiudiMenuMobile() {
    const navLinks = document.getElementById('main-nav-links');
    if (navLinks) navLinks.classList.remove('mobile-open');
}