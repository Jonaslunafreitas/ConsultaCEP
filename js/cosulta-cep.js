//viacep.com.br/ws/RS/Porto Alegre/Domingos Jose/json/
let rua = document.querySelector("#rua");
let cidade = document.querySelector("#cidade")
let uf = document.querySelector("#estado");
let btnCep = document.querySelector("#btnBuscaCep");
let ListaCep = document.querySelector("#listaCep");



btnCep.addEventListener('click', function(e) {
    e.preventDefault();
    let urlBase = "https://viacep.com.br/ws/";
    let parametros = uf.value + '/' + cidade.value + "/" + rua.value + "/" + "/json/";
    let callback = "?callback=popularNaoSeiMeuCep";

    let script = document.createElement('script');
    script.src = urlBase + parametros + callback;
    document.body.appendChild(script);
});

function popularNaoSeiMeuCep(resposta) {

    if (!Array.isArray(resposta)) {
        alert('o retorno não é uma lista de CEPs');
        return;
    }

    resposta.forEach(function(i) {

        let li = document.createElement('li');
        let endereço = i.logradouro + '|' + i.bairro + '|' + i.localidade + '|' + i.uf + '|' + i.cep;
        li.innerHTML = endereço;
        li.setAttribute("onclick", 'exibirCep(' + i.cep.replace('-', '') + ')')
        ListaCep.appendChild(li);

    });
}


function exibirCep(cep) {
    alert("Seu cep é " + cep)
}