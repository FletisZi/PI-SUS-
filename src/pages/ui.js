var btnLogin = document.getElementById('btnlogin').addEventListener('click',(e)=>{
    e.preventDefault();

    let CPF = document.getElementById('cpfLogin').value;
    let Senha = document.getElementById('senhaLogin').value;
    
    console.log(CPF+Senha);
    if(CPF === "123" && Senha === "123"){
        window.location.href = "index.html";
        
    }else{
        alert('Senha ou Senha incorreto!');

    }

})

