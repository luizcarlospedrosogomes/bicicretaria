function login(){
	var usuarioNome = document.getElementById('usuario').value;
	var usuarioSenha = document.getElementById('senha').value;
	localStorage.setItem('usuario', usuarioNome);
    localStorage.setItem('senha', usuarioSenha);
	alert("Seja bem vindo " + localStorage.getItem('usuario') + "!");
}
