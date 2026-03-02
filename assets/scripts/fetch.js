        const bridgeForm = document.getElementById('bridge-form');
        const fSec = document.getElementById('form-section');
        const sSec = document.getElementById('success-section');

        window.onload = () => {
        const savedName = localStorage.getItem('manada_user_name');
        const name = localStorage.getItem('manada_user_name');
        const contact = localStorage.getItem('manada_user_contact');

        
        if (savedName) {

        document.getElementById('user-name-display').innerText = name;
        document.getElementById('user-contact-display').innerText = contact;

        
        const tagline = document.querySelector('.tagline');
        if(tagline) tagline.innerHTML = `Hola de nuevo, <span class="highlight">${savedName}</span>.`;
        }
        };

const textarea = document.getElementById('note-textarea');
const counter = document.getElementById('char-counter');

textarea.addEventListener('input', () => {
    const remaining = textarea.value.length;
    counter.innerText = `${remaining} / 500`;
    
    // Aesthetic touch: turn the counter magenta when they hit the limit
    if (remaining >= 500) {
        counter.style.color = "var(--magenta)";
    } else {
        counter.style.color = "rgba(253, 102, 194, 0.5)";
    }
});

        // Toggle state if already registered
        if(localStorage.getItem('bridge_registered')) {
            fSec.style.display = 'none';
            sSec.style.display = 'block';
        }

        bridgeForm.addEventListener('submit', async (event) => {
            // Stopping the default GET reload immediately
            event.preventDefault();

            const name = bridgeForm.elements['name'].value;
            const contact = bridgeForm.elements['link'].value;
            const roles = Array.from(bridgeForm.querySelectorAll('input[name="role"]:checked'))
                   .map(el => el.value);

            localStorage.setItem('manada_user_name', name);
            localStorage.setItem('manada_user_contact', contact);

            document.getElementById('user-name-display').innerText = name;
            document.getElementById('user-contact-display').innerText = contact;
            
            const btn = document.getElementById('submit-btn');
            btn.innerText = "En camino ...";
            btn.disabled = true;

        
            const TARGET_URL = "https://submit-form.com/lsjb9xYtu"; //If you cloning this repo replace this with your url

            const formData = new FormData(bridgeForm);
            const payload = Object.fromEntries(formData.entries());

            try {
                const response = await fetch(TARGET_URL, {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json', 
                        'Accept': 'application/json' 
                    },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    localStorage.setItem('bridge_registered', 'true');
                    fSec.style.display = 'none';
                    sSec.style.display = 'block';
                } else {
                    throw new Error('Server responded with error');
                }
            } catch (err) {
                console.error("Fetch error:", err);
                alert("Pucha, algo se rompio. proba de nuevo");
                btn.innerText = "Reintentar?";
                btn.disabled = false;
            }
        });



        function toggleAbout() {
    const overlay = document.getElementById('about-overlay');
    if (overlay.style.display === 'flex') {
        overlay.style.display = 'none';
    } else {
        overlay.style.display = 'flex';
    }
}