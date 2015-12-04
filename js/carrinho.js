var item_old = JSON.parse(localStorage.getItem('cart')) || [];

$(document).on('click','.addCar', function(){ 
	
	var item_new ={
		id        : $(".id_bike").val(),
		preco     : $(".valor_uni").val(),
		nome      : $('.nome_prod').val(),
		quantidade: "1",
		src       :	$('#foto_bike').prop('src')
	};
	
	item_old.push(item_new);
	localStorage.setItem( 'cart', JSON.stringify(item_old));
	alert("Seu pedido foi adicionado ao carrinho");
	location.reload();
});


    var item      = JSON.parse(localStorage.getItem('cart'));
	var localhtml = "";
	var total 	  = 0;
	
	function removerItem(itemRemover){
		console.log(itemRemover);
		for (var i in item) {
			if(item[i].id == itemRemover) {
				item.splice(i,1);
				//return false;
			}
		}
		console.log(item);
		localStorage.setItem( 'cart', JSON.stringify(item));
		location.reload();
	}
	
	function resetCarrinho(){
		localStorage.removeItem('cart');
		location.reload();
	}
	
	window.onload = function () {
		for (var i in item) {
			localhtml += "<tr><td>" + item[i].nome +"</td>"
						   + "<td> <button type='button' class='btn btn-primary'>R$ "+ item[i].preco +"</button></td>"
						   + "<td> <button id='' onclick='removerItem("	+ item[i].id +");' type='button' class='btn btn-info'>Remover</button></td>"
						   + "<td> <img src='"+item[i].src+"' width='32'/></td>"
						+"</tr>";
			total = total + parseFloat(item[i].preco);
		}
		$('#carrinho').append(localhtml);
		$('#total').html("<button type='button' class='btn btn-primary'>R$ "+total+",00</button>");
		$(".carrinho_contador").html('Carrinho <strong>'+ item_old.length+'</strong>');
	};
	
	function contraste(){
		 $(".contraste").css("background-color","black");
		 $(".contraste").css("fontSize", 20);
	}
	function uniContraste(){
		$(".contraste").css("background-color","");
		$(".contraste").css("fontSize", "");
	}
	
	function aumentar(){
		$(".zoom").css("fontSize", 30);
	}
	
	function diminuir(){
		$(".zoom").css("fontSize", "");
	}
	
	function login(){
		var usuarioNome = document.getElementById('usuario').value;
		var usuarioSenha = document.getElementById('senha').value;
		localStorage.setItem('usuario', usuarioNome);
		localStorage.setItem('senha', usuarioSenha);
		alert("Seja bem vindo " + localStorage.getItem('usuario') + "!");
	}

	
