<h1 align="center">
  Catálogo digital Marvel
    <br>
</h1>

<h4 align="center">
 O app connsiste numa pagina web básica consumindo  a API da Marvel trazendo a tela de quadrinhos e o título!
</h4>
<br>

<p align="center">
<img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/mopanc/catalogo-digital-marvel?color=2E8BC0">
<img alt="Project top programing language" src="https://img.shields.io/github/languages/top/Mopanc/catalogo-digital-marvel?color=2E8BC0">
</p> 

<p align="center">
  <a href="built-with">Built with</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-run">How to run</a>
</p>
<br><br>

## Built with

This project was developed with the following technologies:

-  [Html5](https://www.w3schools.com/Tags/tag_div.asp)
-  [Css3](https://www.w3schools.com/Css/css_intro.asp)
-  [JavaScript](https://www.javascript.com/)
-  [Bootstrap](https://getbootstrap.com/)
-  [VS Code](https://code.visualstudio.com/)

## information_source: How to run

### Requirements
To run the app, you will need [Git](https://git-scm.com), [Node.js](https://nodejs.org/) v12.13.1 or higher, [Npm](https://www.npmjs.com/).
<br>
<br>

### Application
Now clone the repository and install the dependencies.
```bash
# to clone the repository
git clone https://

# go into the folder
cd catalogo-digital-marvel/

#install the backend dependencies
npm install

#install the framework dependencies
npm install bootsrtap

```

# run application

You have to go into the  [Marvel](https://developer.marvel.com) website and create account to get your public key and private key, then you can make a timestamp and put everithing concat in [JavaScript md5 creator](https://blueimp.github.io/JavaScript-MD5/) to create your md5 hash:
<br>
Go to the index.js inside of project and paste your keys:
```bash
    const timeStamp = '1623272205';
    const apiKey = '823905701adbde9cdc0c1a3225c01cbf';
    const md5 = '4263fcd0120201bbdbad5136270cdd75';
```


## More info

if you want to see more about the methods, here the docs: [Marvel API](https://developer.marvel.com)

by Jorge Morais

