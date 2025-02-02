/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        save: '#22C55E',      // Green
        'save-hover': '#16A34A',  // Darker green on hover

        cancel: '#EF4444',    // Red
        'cancel-hover': '#DC2626',  // Darker red on hover

        modify: '#F59E0B',    // Amber
        'modify-hover': '#D97706',  // Darker amber on hover

        preview: '#3B82F6',   // Blue
        'preview-hover': '#2563EB',  // Darker blue on hover
      },
    },
  },
  plugins: [],
}
