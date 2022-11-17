let Perfil = document.getElementById('perfil');
let novaConsulta = document.getElementById('novaConsulta');
let historico = document.getElementById('historico');
let menu1 = document.getElementById('menu1');
let menu2 = document.getElementById('menu2');

var Users = JSON.parse(localStorage.getItem("Usuario"));


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
    let nome = document.getElementById('nome').textContent = Users.name;
    let cpf = document.getElementById('cpf').textContent = Users.CPF;;
    let cartaoSus = document.getElementById('sus').textContent = Users.CartaoSus;;
    let telefone = document.getElementById('telefone').textContent = Users.Telefone;;
    let dataNascimento = document.getElementById('dataNascimento').textContent = Users.DataNascimento;;
    let endereco = document.getElementById('endereco').textContent = Users.Endereco;;



}

function openMenuStrip(){
    menu1.classList.toggle('menu-strip');
    menu2.style.display = 'none';
}

var Usuarios = {
    name: ['Admin'],
    CPF: ['123'],
    CartaoSus:['123'],
    Telefone: ['11'],
    Sexo: ['m'],
    DataNascimento: ['11/11/1111'],
    Endereco: ['Rua 1'],
    Numero: ['11'],
    Bairro: ['JD. UM'],
}

if(localStorage.getItem("Usuario") == null){
    localStorage.setItem("Usuario", JSON.stringify(Usuarios));
}



document.addEventListener("DOMContentLoaded",()=>{
    Perfil.style.display = "none";
    historico.style.display = "none"; 
});