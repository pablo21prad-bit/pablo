const navElements = [
    { title: 'Salidas 🚗 ',    link: 'pages/salidas/salidas.html' },
    { title: 'Viajes ✈️',      link: 'pages/viajes/viajes.html' },
    { title: 'Nosotros 👫',    link: 'pages/nosotros/nosotros.html' },
    { title: 'Amor Mio ♥..',    link: 'pages/amor/amor.html' },
];

export const navbar =  `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="pages/teamo/teamo.html">Te Amo ♥♥♥</a>   <!-- ACÁ EL ARREGLO -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" aria-controls="navbarNav" 
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                ${navElements.map(element => `
                    <li class="nav-item">
                        <a class="nav-link" href="${element.link}">${element.title}</a>
                    </li>
                `).join('')}
            </ul>
        </div>
    </div>
</nav>`;


