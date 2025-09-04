// script.js (substitua todo o arquivo por este)
// Todas as ações só serão registradas depois que o DOM estiver pronto.
document.addEventListener("DOMContentLoaded", () => {

  /***************************************
   * 1) Handler do formulário de login
   * (Só será anexado se o form existir na página)
   ***************************************/
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    // Protege contra páginas que não têm o form (como TelaFila.html)
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const usuario = document.getElementById("usuario");
      const senha = document.getElementById("senha");
      const errorUsuario = document.getElementById("errorUsuario");

      if (!usuario) return; // segurança extra

      if (usuario.value.trim() === "") {
        if (errorUsuario) errorUsuario.style.display = "block";
        usuario.style.border = "1px solid red";
        usuario.focus();
        return;
      }

      if (errorUsuario) errorUsuario.style.display = "none";
      usuario.style.border = "1px solid #aaa";

      // redirecionamento de exemplo
      if (usuario.value.trim() === "123") {
        window.location.href = "TelaFila.html";
      } else if (usuario.value.trim() === "321") {
        window.location.href = "TelaDoProfissional.html";
      } else {
        alert("Usuário não encontrado!");
      }
    });
  }

  /***************************************
   * 2) Botão "Adicionar cidadão" (se existir)
   ***************************************/
  const btnAdd = document.querySelector(".btn-add");
  if (btnAdd) {
    btnAdd.addEventListener("click", () => {
      alert("Função de adicionar cidadão ainda não implementada.");
    });
  }

  /***************************************
   * 3) Menu de ações (botão ⋮)
   * - Abre/fecha ao clicar no botão
   * - Fecha ao clicar fora
   * - Garante que apenas um menu esteja aberto
   ***************************************/
  // Seleciona todos os botões `.menu-btn` (pode haver vários itens na lista)
  const menuButtons = document.querySelectorAll(".menu-btn");
  if (menuButtons.length) {
    menuButtons.forEach(btn => {
      btn.addEventListener("click", function (e) {
        e.stopPropagation(); // evita que o clique "escape" para o document

        // encontra o dropdown relativo ao botão
        const dropdown = this.nextElementSibling;
        if (!dropdown) return;

        // fecha todos os outros dropdowns antes de abrir o atual
        document.querySelectorAll(".menu-dropdown").forEach(m => {
          if (m !== dropdown) m.classList.remove("open");
        });

        // alterna o estado do dropdown atual
        dropdown.classList.toggle("open");
      });
    });

    // Fecha todos os dropdowns quando clicar em qualquer ponto fora
    document.addEventListener("click", () => {
      document.querySelectorAll(".menu-dropdown").forEach(menu => {
        menu.classList.remove("open");
      });
    });

    // Fecha com 'Esc' (bom para acessibilidade)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.querySelectorAll(".menu-dropdown").forEach(menu => menu.classList.remove("open"));
      }
    });
  }

});

