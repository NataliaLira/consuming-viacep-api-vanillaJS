let cep = document.getElementById('cep');
let envioCep = document.getElementById('envioCep');

envioCep.onclick = function (){

        let config = {
            headers:{
                "Content-Type":"application/json"
            },
            method:"GET",

        }
        fetch('https://viacep.com.br/ws/03191160/json/', config)
        .then(function(resposta){
        return resposta.json();
        }).then(function(json){
            console.log(json);
        })

}
