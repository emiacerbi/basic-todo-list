import { extendTheme } from '@chakra-ui/react'

// Version 1: Using objects
const theme = extendTheme({
  styles: {
    global: {
      body: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        minWidth: '100vw',
        bg: '#f1f4fd',
        color: 'white',
      },
    },
  },
})

export default theme

