const formatDate = (date)=>{
    if(date === null) return "-"
    const data = new Date(date);
    return new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(data);
  }
  
  async function fetchDados() {
  try {
    const response = await fetch('https://pool-api-alpha.vercel.app/api/v1/pool/');
    const dados = await response.json();
    const lista = document.getElementById('dados-lista');
    console.log(dados.data);

    if (!Array.isArray(dados.data) || dados.data.length === 0) {
      lista.innerHTML = "<tr><td colspan='5'>Nenhum dado encontrado</td></tr>";
      return;
    }

    const html = dados.data.map(item => `
      <tr>
        <td>${item.pool_id ?? "-"}</td>
        <td>${item.nome ?? "-"}</td>
        <td>${item.ph ?? "-"}</td>
        <td>${item.cloro ?? "-"}</td>
        <td>${formatDate(item.date)}</td>
      </tr>
    `).join("");

    lista.innerHTML = html;

  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    document.getElementById("dados-lista").innerHTML =
      "<tr><td colspan='5'>Erro ao carregar dados</td></tr>";
  }
}
