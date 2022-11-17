let recriaUsuarios = JSON.parse(localStorage.getItem("Usuario"));

/***** Verificação de Login *****/
var btnLogin = document.getElementById('btnlogin').addEventListener('click',(e)=>{
    e.preventDefault();

    let CPF = document.getElementById('cpfLogin').value;
    let Sus = document.getElementById('senhaLogin').value;
    

    if( (CPF === searchUser(CPF).cpf && Sus === searchUser(CPF).sus) && CPF !=""){
        window.location.href = "index.html";
        
    }else{
        alert('Senha ou Senha incorreto!');

    }

})

/***** Cadastro de Users*****/
var btnCadastro = document.getElementById('submit').addEventListener('click',(e)=>{
    e.preventDefault();

    let name = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let sus = document.getElementById('sus').value;
    let telefone = document.getElementById('telefone').value;
   // let sexo = document.getElementById('telefone');
    let dataNascimento = document.getElementById('dataNascimento').value;
    let endereco = document.getElementById('endereco').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;

    let err = 0
    recriaUsuarios.name.push((name)!="" ? name: err++);
    recriaUsuarios.CPF.push((cpf)!="" ? cpf: err++);
    recriaUsuarios.CartaoSus.push((sus)!="" ? sus: err++);
    recriaUsuarios.Telefone.push((telefone)!="" ? telefone: err++);
    recriaUsuarios.Sexo.push('');
    recriaUsuarios.DataNascimento.push((dataNascimento)!="" ? dataNascimento: err++);
    recriaUsuarios.Endereco.push((endereco)!="" ? endereco: err++);
    recriaUsuarios.Numero.push((numero)!="" ? numero: err++);
    recriaUsuarios.Bairro.push((bairro)!="" ? bairro: err++);

    if (err === 0 ){
    
    localStorage.setItem("Usuario", JSON.stringify(recriaUsuarios));
    }else{
        alert('preencha todos os campos')
    }
    console.log( recriaUsuarios)
})


/***** Function pesquisa usuarios return users(name/cpf/sus) *****/
function searchUser(cpff){
    let Usuariopesquisado = {
        name: '',
        cpf: '',
        sus:''
    }

    console.log('quantidade é', typeof recriaUsuarios)


    for(let i = 0; i < recriaUsuarios.CPF.length ;i++){
    

        if( recriaUsuarios.CPF[i] == cpff){
            Usuariopesquisado.name = recriaUsuarios.name[i];
            Usuariopesquisado.cpf = recriaUsuarios.CPF[i];
            Usuariopesquisado.sus = recriaUsuarios.CartaoSus[i];
            i = recriaUsuarios.CPF.length;
        }
    }
    return (Usuariopesquisado);
}
