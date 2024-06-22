function buscaCep(){
    let cep = document.getElementById('cep').nodeValue;

    if(cep !== ""){
        let url = "https://brasilapi.com.br/api/cep/v1/{cep}" + cep;

        let req  = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        //Tratar a resposta da requisição
        req.onload = function(){
            if(req.status === 200){
                let endereco = JSON.parse(req.response);
                document.getElementById("estado").value = endereco.state;
                document.getElementById("cidade").value = endereco.city;
                document.getElementById("bairro").value = endereco.neighborhood;
                document.getElementById("endereco").value = endereco.street;
            }
            else if(req.status === 404){
                alert("CEP inválido!")
            }
            else{
                alert("Erro!")
            }
        }
    }
}

window.onload = function(){
    let cep = document.getElementById("cep");
    cep.addEventListener("blur", buscaCep);
}