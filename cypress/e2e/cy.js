describe("Tela de login", function() {
    beforeEach(function() {
        cy.visit("http://127.0.0.1:5501/produto.html")
})

    it("Cadastro do produto", function(){
        cy.get("#nome").type("nome")
        cy.get("#descricao").type("descricao")
        cy.get("#categoria").type("categoria")
        cy.get("submit").click()
        cy.get("mensagem-sucesso").should("Produto cadastrado com sucesso")
})

//     it("Login com falha", function(){
//         cy.get("#username").type("admin")
//         cy.get("#password").type("senha_errada")
//         cy.get("button").click()
//         cy.get("#message").should("contain", "Usuário ou senha inválido!")
// })

})