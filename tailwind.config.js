const fonts = {
    '.font-h1': {
        fontFamily: 'Montserrat, Montserrat fallback',
        fontStyle: 'normal',

        fontWeight: 900,
        fontSize: '1.875rem',

        lineHeight: '2.313rem',
        letterSpacing: '0.05em'
    },

    '.font-h2': {
        fontFamily: 'Montserrat, Montserrat fallback',
        fontStyle: 'normal',

        fontWeight: 700,
        fontSize: '1.125rem',

        lineHeight: '1.375rem',
        letterSpacing: '0.05em'
    },

    '.font-h3': {
        fontFamily: 'Montserrat, Montserrat fallback',
        fontStyle: 'normal',

        fontWeight: 700,
        fontSize: '0.938rem',

        lineHeight: '1.125rem',
        letterSpacing: '0.04em'
    },

    '.font-h4': {
        fontFamily: 'Montserrat, Montserrat fallback',
        fontStyle: 'normal',

        fontWeight: 700,
        fontSize: '0.75rem',

        lineHeight: '0.938rem',
        letterSpacing: '0.05em'
    },

    '.font-h5': {
        fontFamily: 'Montserrat, Montserrat fallback',
        fontStyle: 'normal',

        fontWeight: 400,
        fontSize: '0.65rem',

        lineHeight: '0.938rem',
        letterSpacing: '0.03em'
    },

    '.font-legend': {
        fontFamily: 'Montserrat, Montserrat fallback',
        fontStyle: 'normal',

        fontWeight: 400,
        fontSize: '0.625rem',

        lineHeight: '0.625rem'
    },

    '.font-legendb': {
        fontFamily: 'Montserrat, Montserrat fallback',
        fontStyle: 'normal',

        fontWeight: 700,
        fontSize: '0.625rem',

        lineHeight: '0.75rem',
        letterSpacing: '2%'
    },

    '.font-m1': {
        fontFamily: 'Montserrat, Montserrat fallback',
        fontStyle: 'normal',

        fontWeight: 400,
        fontSize: '0.75rem',

        lineHeight: '0.938rem',
        letterSpacing: '0.03em'
    },

    '.font-mb1': {
        fontFamily: 'Montserrat, Montserrat fallback',
        fontStyle: 'normal',

        fontWeight: 600,
        fontSize: '0.75rem',

        lineHeight: '0.938rem',
        letterSpacing: '0.03em'
    },

    '.font-m2': {
        fontFamily: 'Montserrat, Montserrat fallback',
        fontStyle: 'normal',

        fontWeight: 500,
        fontSize: '0.625rem',

        lineHeight: '0.75rem',
        letterSpacing: '0.03em'
    }
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './composables/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './error.vue'
    ],

    injectPosition: 'first',

    theme: {
        extend: {
            colors: {
                text: 'var(--text)',
                background: 'var(--background)',
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                accent: 'var(--accent)',
                green: 'var(--success)',
                yellow: 'var(--warning)',
                red: 'var(--danger)',
                success: 'var(--success)',
                warning: 'var(--warning)',
                danger: 'var(--danger)',
                'card-color': 'var(--card-color)'
            },

            fontSize: {
                xxs: '0.6rem'
            },

            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
                '6xl': '3rem'
            },

            maxWidth: {
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%'
            }
        }
    },

    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.text-ellipsis': {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                },

                '.absolute-center': {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                },

                '.fixed-center': {
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                },

                '.grid-center': {
                    display: 'grid',
                    placeItems: 'center'
                },

                '.flex-center': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                },

                ...fonts,

                h1: fonts['.font-h1'],
                h2: fonts['.font-h2'],
                h3: fonts['.font-h3'],
                h4: fonts['.font-h4'],
                h5: fonts['.font-h5'],
                p: fonts['.font-m1'],
                legend: fonts['.font-legend']
            });
        }
    ]
};
