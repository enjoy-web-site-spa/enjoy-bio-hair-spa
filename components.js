document.addEventListener("DOMContentLoaded", () => {
    // INIEZIONE AUTOMATICA DELL'HEADER UNIVERSALE
    const headerHTML = `
        <header>
            <div class="nav-container">
                <a href="index.html" class="logo">
                    <img src="https://rpbbbqekqkwzyhpjeusp.supabase.co/storage/v1/object/public/immagini-salone/logo-enjoy.png" 
                         alt="Enjoy Parrucchieri Bio Hair Spa Catania" 
                         style="height: 42px; width: auto; vertical-align: middle;">
                </a>
                
                <button class="mobile-menu-toggle" id="btn-toggle-menu" onclick="toggleMenuMobile()" aria-label="Apri Menu">
                    &#9776;
                </button>

                <ul class="nav-links" id="main-nav-links">
                    <li><a href="index.html#head-spa" onclick="chiudiMenuMobile()">Cascata Giapponese</a></li>
                    <li><a href="index.html#oway" onclick="chiudiMenuMobile()">Oway Official</a></li>
                    <li><a href="etica.html" onclick="chiudiMenuMobile()">Codice Etico</a></li>
                    <li><a href="servizi.html" onclick="chiudiMenuMobile()">Trattamenti</a></li>
                    <li><a href="recensioni.html" onclick="chiudiMenuMobile()">Recensioni</a></li>
                    <li><a href="contatti.html" onclick="chiudiMenuMobile()">Dove Siamo</a></li>
                    <li><a href="https://enjoyhairspa.github.io/hair-spa-Enjoy/index.html" target="_blank" rel="noopener noreferrer" class="btn-gold-small">Prenota Web App</a></li>
                </ul>
            </div>
        </header>
    `;

    // INIEZIONE AUTOMATICA DEL FOOTER UNIVERSALE (CON LINK SOCIAL REALI)
    const footerHTML = `
        <footer>
            <div style="max-width: 1100px; margin: 0 auto; padding: 1rem 0; text-align: center;">
                <p style="margin-bottom: 0.5rem; font-size: 1rem; color: #FFFFFF;">
                    <strong>Enjoy Parrucchieri Bio Hair Spa</strong> &bull; Via Padova, 50, 95127 Catania CT (Fermata Metro Giuffrida)
                </p>
                <p style="margin-bottom: 1.2rem; font-size: 0.9rem; color: #A0A0A0;">
                    Partner Ufficiale Oway &bull; Cascata Giapponese Bio Hair Spa &bull; Centro Trattamenti Specializzato
                </p>
                
                <!-- LINK SOCIAL UFFICIALI -->
                <div style="display: flex; justify-content: center; gap: 1.2rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
                    <a href="https://www.instagram.com/parrucchierienjoycatania/" target="_blank" rel="noopener noreferrer" class="btn-gold-small" style="text-decoration: none;">
                        📷 Instagram Official
                    </a>
                    <a href="https://www.facebook.com/enjoyparrucchiericatania" target="_blank" rel="noopener noreferrer" class="btn-gold-small" style="text-decoration: none;">
                        👍 Facebook Official
                    </a>
                </div>

                <p style="margin-top: 1.5rem; font-size: 0.75rem; color: #666666;">
                    &copy; 2026 Enjoy Parrucchieri Bio Hair Spa. Tutti i diritti riservati. Design & Tech Luxury Studio.
                </p>
            </div>
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

// Funzioni globali per la gestione del menu mobile
function toggleMenuMobile() {
    const navLinks = document.getElementById('main-nav-links');
    if (navLinks) navLinks.classList.toggle('mobile-open');
}

function chiudiMenuMobile() {
    const navLinks = document.getElementById('main-nav-links');
    if (navLinks) navLinks.classList.remove('mobile-open');
}

// ==========================================
// PROTEZIONE LUXURY: ANTI-CLICK DESTRO & ANTI-DOWNLOAD IMMAGINI (GLOBALE VIA EVENT DELEGATION)
// ==========================================
document.addEventListener("contextmenu", (e) => {
    if (e.target.tagName === "IMG") {
        e.preventDefault();
        return false;
    }
});

document.addEventListener("dragstart", (e) => {
    if (e.target.tagName === "IMG") {
        e.preventDefault();
        return false;
    }
});