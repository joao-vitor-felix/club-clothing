describe("Buy Product", () => {
  it("should buy a product", () => {
    cy.visit("http://localhost:8888");
    cy.findByText("Entrar").click();
    cy.findByPlaceholderText("Digite seu e-mail").type(
      "testetestando@teste.com"
    );
    cy.findByPlaceholderText("Digite sua senha").type("12345678");
    cy.findByRole("button", { name: "Entrar" }).click();
    cy.findByText("Chapéus").click({ force: true });
    cy.findByLabelText("Adicionar Boné Casquinha ao carrinho de compras").click(
      { force: true }
    );
    cy.findByLabelText(
      "Adicionar Chapéu Pôr do Sol ao carrinho de compras"
    ).click({ force: true });
    cy.findByLabelText("Adicionar Boné Branco ao carrinho de compras").click({
      force: true
    });
    cy.findByLabelText("Carrinho de compras").click();
    cy.findByText("Prosseguir com o pagamento").click();
    cy.findByLabelText("Aumentar Boné Casquinha do Checkout").click();
    cy.findByLabelText("Diminuir Boné Branco do Checkout").click();
    cy.findByLabelText("Remover Chapéu Pôr do Sol do Checkout").click();
    cy.findByText("Sair").wait(3000).click();
  });
});
