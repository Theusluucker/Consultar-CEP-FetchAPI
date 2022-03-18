const cep = document.querySelector("#cep")

const showData = (result)=>{
    for(const campo in result){
        console.log(campo)
        if(document.querySelector("#" + campo)){
            document.querySelector("#" + campo).value = result[campo]
    }
}
}

cep.addEventListener("blur",(e)=>{
    let procura = cep.value.replace("-","")
    const option = {
        method: "GET",
        mode: "cors",
        cache: "default"
    }
    fetch(`https://viacep.com.br/ws/${procura}/json/`,option)
    .then(resposta =>{ resposta.json()
        .then(dados => showData(dados))
    })
    .catch(e => console.log("Error: " + e.message))
 
})