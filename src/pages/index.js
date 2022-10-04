let Perfil = document.getElementById('perfil');
let novaConsulta = document.getElementById('novaConsulta');
let historico = document.getElementById('historico');
const Users = {
    nome:"Rodrigo",
    cpf:"111.111.111-1",
    cartaoSus:"12.332.212",
    telefone:"(11)11111-1111",
    dataNascimento:"01/01/1111",
    endereco:"Rua 1 , Nº1  - jadim 1"
}

function openPerfil(){
    Perfil.style.display = "block";
    novaConsulta.style.display = "none";
    historico.style.display = "none";
    addValues()
}

function openConsulta(){
    Perfil.style.display = "none";
    novaConsulta.style.display = "block";
    historico.style.display = "none"; 
}

function openHistorico(){
    Perfil.style.display = "none";
    novaConsulta.style.display = "none";
    historico.style.display = "block";
}

function openEdit(){
    let formEdit = document.querySelector('.container-edit');
    
    if(formEdit.style.display != "flex"){
        formEdit.style.display = "flex"
    }else{
        formEdit.style.display = "none"
    }

}


function addValues(){
    let nome = document.getElementById('nome').textContent = Users.nome;
    let cpf = document.getElementById('cpf').textContent = Users.cpf;;
    let cartaoSus = document.getElementById('sus').textContent = Users.cartaoSus;;
    let telefone = document.getElementById('telefone').textContent = Users.telefone;;
    let dataNascimento = document.getElementById('dataNascimento').textContent = Users.dataNascimento;;
    let endereco = document.getElementById('endereco').textContent = Users.endereco;;



}

document.addEventListener("DOMContentLoaded",()=>{
    Perfil.style.display = "none";
    historico.style.display = "none"; 
});