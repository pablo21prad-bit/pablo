const navElements = [
    // La raíz de tu sitio es 'https://pablo21prad-bit.github.io/pablo/'
    { title: 'Salidas 🚗 ',    link: 'https://pablo21prad-bit.github.io/pablo/pages/salidas/salidas.html' },
    { title: 'Viajes ✈️',      link: 'https://pablo21prad-bit.github.io/pablo/pages/viajes/viajes.html' },
    { title: 'Nosotros 👫',    link: 'https://pablo21prad-bit.github.io/pablo/pages/nosotros/nosotros.html' },
    { title: 'Amor Mio ♥..',    link: 'https://pablo21prad-bit.github.io/pablo/pages/amor/amor.html' },
];

export const navbar =  `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="/pablo/pages/teamo/teamo.html">Te Amo ♥♥♥</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" aria-controls="navbarNav" 
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                ${navElements.map(element => {
                    return `
                    <li class="nav-item">
                        <a class="nav-link" href="${element.link}">${element.title}</a>
                    </li>
                    `
                }).join('')}
            </ul>

        </div>
    </div>
</nav>`;


