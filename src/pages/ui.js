var btnLogin = document.getElementById('btnlogin').addEventListener('click',()=>{

    let CPF = document.getElementById('cpfLogin').value;
    let Senha = document.getElementById('senhaLogin').value;
    
    console.log(CPF+Senha);
    if(CPF === "123" && Senha === "123"){
        window.open('./index.html');
        
    }else{
        alert('Senha ou Senha incorreto!');

    }

})

