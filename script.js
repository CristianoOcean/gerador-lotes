const fabricantes = ['Baxter', 'Bayer CO', 'BioNTech Ltda', 'FIOCRUZ', 'MODERNA', 'Aztrazeneca', 'Butantan', 'Sinovac',
    'SanPasteur', 'Fund. OZAKA', 'American Cyanam', 'Pfizer', 'Serum', 'Bharat', 'Covaxin'];
const imunobiologicos = ['Hepatite B', 'Influenza', 'COVID-19', 'Tríplice Viral', 'HPV', 'Febre Amarela', 'Dengue', 'BCG', 'Penta',
    'Pentavalente', 'VIP', 'Pneumo', 'Rotavírus', 'Menigocócica', 'Meningo C', 'Hepatite A', 'Tetra Viral', 'Varicela', 'Soro'];
const dataReferencia = new Date(2025, 4, 20); // 20/05/2025

function gerarLote() {
    const parte1 = Math.random().toString(36).substring(2, 6).toUpperCase();
    const parte2 = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `${parte1}-${parte2}`;
}

function gerarDataValidade() {
    const vencido = Math.random() < 0.1;
    const dias = Math.floor(Math.random() * 1000);
    const data = new Date(dataReferencia);
    data.setDate(data.getDate() + (vencido ? -dias : dias));
    return data.toLocaleDateString('pt-BR');
}

function adicionarLinha() {
    const lote = gerarLote();
    const fabricante = fabricantes[Math.floor(Math.random() * fabricantes.length)];
    const imunobiologico = imunobiologicos[Math.floor(Math.random() * imunobiologicos.length)];
    const validade = gerarDataValidade();

    const tbody = document.querySelector("#tabela-lotes tbody");
    const novaLinha = document.createElement("tr");

    novaLinha.innerHTML = `
        <td>${lote}</td>
        <td>${fabricante}</td>
        <td>${imunobiologico}</td>
        <td>${validade}</td>
    `;

    tbody.appendChild(novaLinha);
}

function limparTabela() {
    const tbody = document.querySelector("#tabela-lotes tbody");
    tbody.innerHTML = '';
}
