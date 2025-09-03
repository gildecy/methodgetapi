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
        console.log(dados.data)
        let html = ""
        for (let index = 0; index < dados.data.length; index++) {
          html += "<tr>";
          html += "<td>" + dados.data[index].pool_id+ "</td>";
          html += "<td>" + dados.data[index].nome+ "</td>";
          html += "<td>" + dados.data[index].ph+ "</td>";
         html += "<td>" + dados.data[index].cloro+ "</td>"; 
             html += "<td>" + dados.data[index].barrilha+ "</td>";
          html += "<td>" + formatDate(dados.data[index].date)+ "</td>";
          html += "</tr>";
        }
  
        lista.innerHTML = html;
  
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }
    
    document.addEventListener('DOMContentLoaded', fetchDados);
