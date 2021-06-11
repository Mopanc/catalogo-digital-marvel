function navbar() {
  return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <a class="navbar-brand" href="?p=dashboard">Catálogo Marvel</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="?p=dashboard">Início <span class="sr-only">(current)</span></a>
          </li>
          <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="?p=personagens"> Personagens </a>
          </li>
        </ul>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="?p=ofertas">Ofertas <span class="sr-only">(current)</span></a>
          </li>
        </ul>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <span class="text-white mr-2">Bem vindo, <strong>usuário</strong></span>
          <a class="btn btn-outline-warning my-2 my-sm-0" href="?p=carrinho">Carrinho</a>
        </form>
      </div>
    </nav>
  `;
}
