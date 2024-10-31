/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: "#181C14", // เพิ่ม # ก่อนค่า HEX
        primaryContent: "#697565", // เพิ่ม # ก่อนค่า HEX
        primarySubContent: "#3C3D37", // เพิ่ม # ก่อนค่า HEX
        primaryBg: "#ECDFCC", // เพิ่ม # ก่อนค่า HEX
        primaryProject: "#D4C3B2", // เพิ่ม # ก่อนค่า HEX
        
      }
    },
  },
  plugins: [],
}

