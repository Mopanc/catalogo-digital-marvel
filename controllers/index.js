    const timeStamp = '1623272205';
    const apiKey = '';
    const md5 = '';

    //default not avail image
    var IMAGE_NOT_AVAIL = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";

    fetch(`http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`
    ).then((response) => {
        return response.json();
    }).then((jsonParsed) => {
        const divHero = document.querySelector('#herois');

        new_results = fetch_results(jsonParsed.data.results)

        new_results.forEach(element => {
            const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
            const titleHero = element.title

            createDivHero(srcImage, titleHero, divHero);
        });
    })

    function createDivHero(srcImage, titleHero, divToAppend) {
        const divPai = document.createElement('div');
        const divFilho = document.createElement('div');
        const textName = document.createElement('text')
        const img = document.createElement('img');
        const button = document.createElement("button");
        button.innerHTML = "Adicionar ao carrinho";
        button.className = "button-buy"
        textName.className = "DescriptionCard"

        textName.textContent = titleHero
        img.className = "card-image";
        img.src = srcImage

        divFilho.appendChild(img)
        divFilho.appendChild(textName)
        divPai.appendChild(divFilho)
        divToAppend.appendChild(divPai)
        divFilho.appendChild(button)

        divPai.classList.add("personagem");
    }


    function fetch_results(results) {
        new_results = []

        for(var i=0; i<results.length; i++) {
            var comic = results[i];
            //console.dir(comic);
            if(comic.thumbnail && comic.thumbnail.path && comic.thumbnail.path != IMAGE_NOT_AVAIL) {
                new_results.push(comic);
            }
        }

        return new_results
    }

//823905701adbde9cdc0c1a3225c01cbf
//4263fcd0120201bbdbad5136270cdd75
