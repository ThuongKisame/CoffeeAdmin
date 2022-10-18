/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'lg-img': "url('../../asset/image/background.jpg')",
            },
            colors: {
                primary: '#630000',
                header: '#dfd8b7',
            },
            outlineOffset: {
                '-8': '-8px',
            },
            fontSize: {
                '1-important': '1rem!important',
            },
        },
    },
    plugins: [],
};
