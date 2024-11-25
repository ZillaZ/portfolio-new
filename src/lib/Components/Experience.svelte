<script>
  import Project from "./Project.svelte";
  const link_lines = [
    "<p>Durante minha colaboração na equipe de transformação digital da instituição, desempenhei um papel crucial na otimização de processos e na implementação de soluções automatizadas. Minha principal responsabilidade foi desenvolver automações capazes de:",
    "<li>Fazer disparo de e-mails automáticos, aumentando a eficiência na comunicação com stakeholders;",
    "<li>Atualizar e manter a base de dados, garantindo a precisão e a disponibilidade das informações essenciais para as operações diárias;",
    "<li>Fazer verificação de informações cadastrais através do uso de API's externas para, assegurando a integridade e validade das informações providas pelos usuários;",
    "<li>Administrar usuários, criando e gerenciando contas Google Workspace, facilitando a colaboração e a produtividade interna.",
  ];
</script>

<div class="content-wrapper">
  <Project
    header="Automation Process Intern | Link Tecnologia Social"
    body={link_lines}
  />
</div>

<style>
  .content-wrapper {
    height: 100%;
    width: 100%;
    background-color: #000000a0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
