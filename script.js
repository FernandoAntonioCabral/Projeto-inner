const titulo = document.getElementById("titulo");
titulo.innerText = "Título chamativo";
const link = document.querySelector("a");
link.innerText = "Site da Proz"
const ulist = document.querySelector("ul");
ulist.innerHTML = `
        <li>Item simples 1</li>
        <li>Item simples 2</li>
        <li>Item simples 3</li>
        `;
const olist = document.querySelector("#lista-ordenada");
olist.innerHTML = `
        <li><a href="https://www.google.com">Google</a></li>
        <li><a href="https://www.youtube.com">Youtube</a></li>
        <li><a href="https://www.muinvasion.com.br">Mu Invasion</a></li>
        `;