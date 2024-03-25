const palavras = ["javascript", "programacao", "computador", "desenvolvimento"];
let palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];
let palavraOculta = Array(palavraEscolhida.length).fill('_');
let letrasUtilizadas = [];

function atualizarPalavraOculta() {
    document.getElementById('palavra').textContent = palavraOculta.join(' ');
}

function atualizarLetrasUtilizadas() {
    document.getElementById('letras-utilizadas').textContent = `Letras utilizadas: ${letrasUtilizadas.join(', ')}`;
}

function inserirLetra() {
    const letra = document.getElementById('letra').value.toLowerCase();
    
    if (letra && !letrasUtilizadas.includes(letra)) {
        letrasUtilizadas.push(letra);
        if (palavraEscolhida.includes(letra)) {
            for (let i = 0; i < palavraEscolhida.length; i++) {
                if (palavraEscolhida[i] === letra) {
                    palavraOculta[i] = letra;
                }
            }
            atualizarPalavraOculta();
        } else {
        }
        atualizarLetrasUtilizadas();
    }
    
    document.getElementById('letra').value = '';
}

atualizarPalavraOculta(); 
