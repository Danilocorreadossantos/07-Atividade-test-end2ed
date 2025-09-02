describe("Tela de login", function() {
    beforeEach(function() {
        cy.visit("http://127.0.0.1:5500/produto.html")
})

    it("Cadastro do produto", function(){
        cy.get("#nome").type("Nome do Produto")
        cy.get("#descricao").type("Descrição")
        cy.get("#categoria").type("Categoria")
        cy.get("submit").click()
        cy.get("mensagem").should("Produto cadastrado com sucesso")
})

//     it("Login com falha", function(){
//         cy.get("#username").type("admin")
//         cy.get("#password").type("senha_errada")
//         cy.get("button").click()
//         cy.get("#message").should("contain", "Usuário ou senha inválido!")
// })

})