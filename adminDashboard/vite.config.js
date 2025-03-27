import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Make sure the React plugin is added
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(), // Ensure React plugin is included
    tailwindcss(),
  ],
});
