let routes = {
  'dashboard': dashboard,
  'personagens': personagens,
  'carrinho': carrinho,
  'ofertas': ofertas,
}

function updateContentPage(pageName) {
  if (!routes[pageName]) {
    document.getElementById('root').innerHTML = notFound();
    return;
  }

  document.getElementById('root').innerHTML = routes[pageName]();
}

let url = new URL(window.location.href);
let route = url.searchParams.get('p');

if (route) {
  content = route;
}
location.replace("file:///Users/jorgemorais/Desktop/catalogo-digital/index.html?p=dashboard");
updateContentPage(content);

