let cep = document.getElementById('cep');
let envioCep = document.getElementById('envioCep');
let bairro = document.getElementById("bairro");
let rua = document.getElementById("rua");

envioCep.onclick = function (){

        if((cep.value).length == 8){
            
            let config = {
            headers:{
                "Content-Type":"application/json"
            },
            method:"GET",

            }
            fetch('https://viacep.com.br/ws/'+this.value+'/json/', config)
            .then(function(resposta){
            return resposta.json();
            }).then(function(json){
                rua.value = json.logradouro;
                bairro.value = json.bairro;
                console.log(json);
            })
        } else {
            alert("Digite um cep valido")
        }

}
