document.getElementById('analizarBtn').addEventListener('click', analizarSentimiento);

async function analizarSentimiento() {
  const inputText = document.getElementById('inputText').value;
  const resultado = document.getElementById('resultado');
  const loader = document.getElementById('loader');
  const apiKey = 'XJc1deI31SzuW5TkcWmQ88mEar3RvUcf'; // Reemplázala por la real

  if (!inputText.trim()) {
    resultado.textContent = '⚠️ Por favor, escribe un comentario.';
    return;
  }

  resultado.textContent = '';
  loader.style.display = 'block';

  const API_URL = 'https://api.mistral.ai/v1/chat/completions';

  const requestBody = {
    model: 'open-mixtral-8x22b',
    messages: [
      {
        role: 'user',
        content: `Analiza este comentario y responde SOLO con "POSITIVO" o "NEGATIVO": "${inputText}"`
      }
    ]
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody)
    });

    loader.style.display = 'none';

    const data = await response.json();
    const respuestaIA = data.choices[0].message.content.trim().toUpperCase();

    if (respuestaIA.includes('POSITIVO')) {
      resultado.textContent = '✅ El comentario es POSITIVO';
    } else if (respuestaIA.includes('NEGATIVO')) {
      resultado.textContent = '❌ El comentario es NEGATIVO';
    } else {
      resultado.textContent = '⚠️ No se pudo determinar el sentimiento.';
    }

  } catch (error) {
    loader.style.display = 'none';
    console.error('Error:', error);
    resultado.textContent = '❌ Error al conectar con la IA.';
  }
}
