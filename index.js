function calculo(){
    let adulto = parseInt(document.getElementById('adulto').value)
    let adultoNaoAlcoolicos = parseInt(document.getElementById('adultoNaoAlcoolicos').value)
    let crianca = parseInt(document.getElementById('crianca').value)
    let textoCarne = document.getElementById('totalCarne')
    let textoAcompanha= document.getElementById('totalAcompanha')
    let textoCerveja = document.getElementById('totalCerveja')
    let textoRefri = document.getElementById('totalRefri')
    let textoAgua = document.getElementById('totalAgua')

    let carne = 0.4
    let acompanhamentos = 0.2
    let cerveja = 2
    let refri = 0.5
    let agua = 0.4

    totalCarne = Number( adulto + crianca + adultoNaoAlcoolicos) * carne;
    totalAcompanha =  Number(adulto + crianca + adultoNaoAlcoolicos) * acompanhamentos;
    totalCerveja = Number(adulto * cerveja);
    totalRefri = Number (crianca + adultoNaoAlcoolicos) * refri;
    totalAgua = Number(adulto + crianca + adultoNaoAlcoolicos) * agua;


    textoCarne.innerHTML = `<p>Total de Carne: ${totalCarne.toFixed(2)}KG</p>`
    textoAcompanha.innerHTML = `<p>Total de Acompanhamentos: ${totalAcompanha.toFixed(2)}KG</p>`
    textoCerveja.innerHTML = `<p>Total de Cerveja: ${totalCerveja.toFixed(2)}L</p>`
    textoRefri.innerHTML = `<p>Total de Refrigerante: ${totalRefri.toFixed(2)}L</p>`
    textoAgua.innerHTML = `<p>Total de Agua: ${totalAgua.toFixed(2)}L</p>`
    


}