/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
    //   colors: {
    //     "primary": "#06CFFF", 
    //     "on-primary": "#272625",
    //     "primary-darken-1": "#0E9797",
    //     "on-primary-darken-1": "#272625",
    //     "background": "#1A1918",
    //     "on-background": "#EDEBE8",
    //     "surface": "#272625", 
    //     "on-surface": "#FBFAF9",
    //     "surface-variant": "#333231",
    //     "on-surface-variant": "#FBFAF9",
    //     "secondary": "#B2B2B2",
    //     "on-secondary": "#272625",
    //     "secondary-darken-1": "#CCC9C2",
    //     "accent": "#1A1918",
    //     "on-accent": "#FBFAF9",
    //     "tertiary": "#4F94EC",
    //     "on-tertiary": "#1A1918",
    //     "tertiary-darken-1": "#0E9797",
    //     "border-color": "#4C4B48",
    //     "error": "#F9745B",
    //     "on-error": "#272625",
    //     "info": "#4164FB",
    //     "on-info": "#FBFAF9",
    //     "success": "#249A13",
    //     "on-success": "#1A1918",
    //     "warning": "#F4810C",
    //     "on-warning": "#1A1918",
    //     "white-grey": "#f2f2f2",
    //     "on-white-grey": "#272625"
    // }
})
