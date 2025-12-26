// ~/config/fontawesome.js

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Adicione ícones que você deseja usar no seu projeto
library.add(fas, far, fab);

export default {
    icons: {
        // Configure aqui os ícones que você deseja usar
        solid: true, // Usa ícones sólidos (fas)
        regular: true, // Usa ícones regulares (far)
        brands: true // Usa ícones de marcas (fab)
    }
};
