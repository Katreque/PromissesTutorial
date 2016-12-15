//$http, BASE_API

//Construtor Vazio

var PessoaService = function() {}

PessoaService.prototype.obterTodas = function() {

    //Sempre retornar o service, a promessa valida e a com erro;
	return $http.get(BASE_API + '/pessoas')
		.then((resposta) => {
			return resposta.data;
		})
		.catch((err) => {
			return new Error('Houve um problema bla bla bla')
		})
}

Pessoa.prototype.obterPorId = function(id) {
	return $http.get(BASE_API + '/pessoas' + id)
		.then((resposta) => {
			return resposta.data
		})
		.catch(() => {
			return new Error('Houve um problema bla bla bla')
		})
}

//retornar sempre um instância do service. Facilita na chamada dos métodos.
return new PessoaService()


// ctrl

//PessoaService

console.log(1)

pessoaService.obterTodos()
	.then((pessoas) => {
		console.log(2)
	})
	.catch(() => {
		
	})

console.log(3)

//Para encadeamento de promisses, caso necessário, verificar arquivo EncadeamentoPromisses.js.

pessoaService.obterPorId(999)
	.then((pessoa) => {
		console.log(4)
	})
	.catch(() => {
		
	})

console.log(5)