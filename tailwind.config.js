/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        container: {
            center: true,
        },
        screens: {
            'sm': '576px',
            'md': '768px',
            'lg': '992px',
            'xl': '1440px',
        },
        extend: {
            boxShadow: {
              'rounded': '0 0 0 3px rgba(229, 38, 41, 0.47)'
            },
            fontFamily: {
                "Raleway": "Raleway, sans-serif",
            },
            colors: {
                "primary": "#e52629",
                "text": "#a1adb7",
                "tertial-grey": {
                    "background": "#f3f6f8",
                    "border": "#d9e0e6"
                }
            },
            margin: {
                "110": "110px",
            },
            container: {
                screens: {
                    'sm': '100%',
                    'md': '768px',
                    'lg': '992px',
                    'xl': '1440px',
                },
                padding: {
                    DEFAULT: '1rem',
                }
            },
        },
    },
    plugins: [],
}

