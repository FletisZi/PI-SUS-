let Perfil = document.getElementById('perfil');
let novaConsulta = document.getElementById('novaConsulta');
let historico = document.getElementById('historico');

function openPerfil(){
    Perfil.style.display = "block";
    novaConsulta.style.display = "none";
    historico.style.display = "none";
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

document.addEventListener("DOMContentLoaded",()=>{
    Perfil.style.display = "none";
    historico.style.display = "none"; 
});