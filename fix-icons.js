// Script para converter ícones <i> para <font-awesome-icon>
const fs = require('fs');
const path = require('path');

function convertIcons(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Converte ícones <i> para <font-awesome-icon>
  let newContent = content
    // Converte fas
    .replace(/<i class="fas ([^"]+)"><\/i>/g, '<font-awesome-icon icon="fas $1" />')
    // Converte fab 
    .replace(/<i class="fab ([^"]+)"><\/i>/g, '<font-awesome-icon icon="fab $1" />')
    // Converte far
    .replace(/<i class="far ([^"]+)"><\/i>/g, '<font-awesome-icon icon="far $1" />')
    // Converte com classes adicionais
    .replace(/<i class="(fas|fab|far) ([^"]+) ([^"]+)"><\/i>/g, '<font-awesome-icon icon="$1 $2" class="$3" />')
    .replace(/<i class="(fas|fab|far) ([^"]+) ([^"]+) ([^"]+)"><\/i>/g, '<font-awesome-icon icon="$1 $2" class="$3 $4" />')
    .replace(/<i class="(fas|fab|far) ([^"]+) ([^"]+) ([^"]+) ([^"]+)"><\/i>/g, '<font-awesome-icon icon="$1 $2" class="$3 $4 $5" />');

  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Convertido: ${filePath}`);
}

// Arquivos para converter
const files = [
  './pages/servicos.vue',
  './components/site/BtnWhatsApp.vue'
];

files.forEach(file => {
  const fullPath = path.resolve(file);
  if (fs.existsSync(fullPath)) {
    convertIcons(fullPath);
  }
});

console.log('Conversão concluída!');
