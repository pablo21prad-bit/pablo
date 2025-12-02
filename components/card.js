const PABLO_BASE = "/pablo/";   // raíz del sitio publicado

export function cardComponent(momento) {

  const imagenes = momento.fotos.map((foto, index) => {
    const pathLimpio = foto.replace(/^\/+/, "");  
    const srcFinal = `${PABLO_BASE}${pathLimpio}`;

    return `
      <div class="carousel-item ${index === 0 ? "active" : ""}">
        <img src="${srcFinal}" class="d-block w-100 card-img-top" alt="">
      </div>
    `;
  }).join("");

  return `
    <div class="col-md-6 col-lg-6">   <!-- ⭐ MÁS GRANDES: 2 por fila -->
      <div class="card shadow-sm">

        <div id="${momento.id}" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            ${imagenes}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#${momento.id}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#${momento.id}" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>

        <div class="card-body">
          <h5 class="card-title">${momento.titulo}</h5>
          <p class="card-text">${momento.descripcion}</p>
        </div>

      </div>
    </div>
  `;
}

