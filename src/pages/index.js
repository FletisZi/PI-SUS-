let Perfil = document.getElementById('perfil');
let novaConsulta = document.getElementById('novaConsulta');
let historico = document.getElementById('historico');
let menu1 = document.getElementById('menu1');
let menu2 = document.getElementById('menu2');

var Users = JSON.parse(localStorage.getItem("Usuario"));
var TokenUser = JSON.parse(localStorage.getItem("TokenUser"));
var Consultas = JSON.parse(localStorage.getItem("Consultas"));


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
    addHistorico();

}

function openEdit(){
    let formEdit = document.querySelector('.container-edit');
    
    if(formEdit.style.display != "flex"){
        formEdit.style.display = "flex"
    }else{
        formEdit.style.display = "none"
    }

}

function Logof(){
    TokenUser.name = "";
    TokenUser.CPF = "";
    TokenUser.CartaoSus = "";
    TokenUser.Telefone = "";
    TokenUser.DataNascimento = "";
    TokenUser.Endereco = "";
    TokenUser.Numero = "";
    TokenUser.Bairro = "";
    
    localStorage.setItem("TokenUser", JSON.stringify(TokenUser));

    window.location.href = "CAD.html";
}


function addValues(){
    
    let nome = document.getElementById('nome').textContent = TokenUser.name;
    let cpf = document.getElementById('cpf').textContent = TokenUser.CPF;;
    let cartaoSus = document.getElementById('sus').textContent = TokenUser.CartaoSus;;
    let telefone = document.getElementById('telefone').textContent = TokenUser.Telefone;;
    let dataNascimento = document.getElementById('dataNascimento').textContent = TokenUser.DataNascimento;;
    let endereco = document.getElementById('endereco').textContent = TokenUser.Endereco;;



}


function Consultar(){

    let dorCabeca = document.querySelector('input[name="cabeca"]:checked').value;
    let malEstar = document.querySelector('input[name="malEstar"]:checked').value;
    let sintomasGripais = document.querySelector('input[name="sintomaGripais"]:checked').value;
    let temperatura = document.querySelector('#input-temperatura').value;
    let descricao = document.querySelector('#input-DescriptionSintomas').value;
    

    let err = 0
    Consultas.status.push('Triagem');
    Consultas.CPF.push((TokenUser.CPF)!="" ? TokenUser.CPF: err++);
    Consultas.dorCabeca.push((dorCabeca)!="" ? dorCabeca: err++)
    Consultas.malEstar.push((malEstar)!="" ? malEstar: err++);
    Consultas.sintomasGripais.push((sintomasGripais)!="" ? sintomasGripais: err++);
    Consultas.temperatura.push((temperatura)!="" ? temperatura: err++);
    Consultas.descricao.push((descricao)!="" ? descricao: err++);

    if (err === 0 ){
    
        localStorage.setItem("Consultas", JSON.stringify(Consultas));
        alert('Cadastro realizado com sucesso');

    
    }else{
        alert('preencha todos os campos')
    }
}


function searchConsultas(cpff){
    let Consultaspesquisado = {
        status:[],
        CPF:[],
        dorCabeca: [],
        malEstar:[],
        sintomasGripais:[],
        temperatura:[],
        descricao:[],
    }

    for(let i = 0; i < Consultas.CPF.length ;i++){
        console.log(i)
        console.log( Consultas.status[i])
        
        if( Consultas.CPF[i] == cpff){
            Consultaspesquisado.status.push(Consultas.status[i]);
            Consultaspesquisado.CPF.push(Consultas.CPF[i]);
            Consultaspesquisado.dorCabeca.push(Consultas.dorCabeca[i]);
            Consultaspesquisado.malEstar.push(Consultas.malEstar[i]);
            Consultaspesquisado.sintomasGripais.push(Consultas.sintomasGripais[i]);
            Consultaspesquisado.temperatura.push(Consultas.temperatura[i]);
            Consultaspesquisado.descricao.push(Consultas.descricao[i]);

        }
    }
    return (Consultaspesquisado);
}

function addHistorico(){
    let table = document.querySelector('tbody');
    let newTable = document.createElement('table');
    let linha = document.createElement('tr');
    let coluna = document.createElement('td');
    
    console.log(searchConsultas(TokenUser.CPF));
    
    
    coluna.textContent = TokenUser.CPF;
    linha.appendChild(coluna);
    table.appendChild(linha);
    
}


function openMenuStrip(){
    menu1.classList.toggle('menu-strip');
    menu1.style.display = 'flex';
    menu2.style.display = 'none';
}

function closeMenuStrip(){
    menu1.classList.toggle('menu-strip');
    menu1.style.display = 'none';
    menu2.style.display = 'initial';
}



function menu(){
    
    let elmento = document.querySelector('#menu2')
    elmento.style.display = "flex";
}

function home(){
    let elmento = document.querySelector('#menu2')
    elmento.style.display = "none";
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

var Token = {
    name: [''],
    CPF: [''],
    CartaoSus:[''],
    Telefone: [''],
    Sexo: [''],
    DataNascimento: [''],
    Endereco: [''],
    Numero: [''],
    Bairro: [''],
}
var createConsultas = {
    status:[''],
    CPF:[''],
    dorCabeca: [''],
    malEstar:[''],
    sintomasGripais:[''],
    temperatura:[''],
    descricao:[''],
}


function VerificaBanco(){
    if(localStorage.getItem("Usuario") == null){
        localStorage.setItem("Usuario", JSON.stringify(Usuarios));
    }
    if(localStorage.getItem("TokenUser") == null){
        localStorage.setItem("TokenUser", JSON.stringify(Token));
    }
    if(localStorage.getItem("Consultas") == null){
        localStorage.setItem("Consultas", JSON.stringify(createConsultas));
    }
    if(TokenUser.CPF == ''  || TokenUser.CartaoSus == ''){
        window.location.href = "CAD.html";
    }
}






document.addEventListener("DOMContentLoaded",()=>{
    Perfil.style.display = "none";
    historico.style.display = "none"; 
    VerificaBanco();
});