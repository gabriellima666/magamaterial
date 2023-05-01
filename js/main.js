const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const telefone = document.getElementById("telefone");
  const detalhes = document.getElementById("detalhes");
  document.getElementById("check").style.background = 'rgba(255, 0, 0, 0.644)';

  if (nome.value === "") {
    document.querySelector("#check").innerHTML='Por favor, preencha o campo Nome.';
    return;
  }

  if (email.value === "") {
    document.querySelector("#check").innerHTML='Por favor, preencha o campo Email.';
    return;
  }

  if (telefone.value === "") {
    document.querySelector("#check").innerHTML='Por favor, preencha o campo Telefone.';
    return;
  }

  if (detalhes.value === "") {
    document.querySelector("#check").innerHTML='Por favor, preencha o campo Detalhes.';
    return;
  }

  document.getElementById("check").style.background = 'rgba(10, 241, 22, 0.644)';
  document.querySelector("#check").innerHTML='Formulário enviado com sucesso!';
  formulario.reset()
});