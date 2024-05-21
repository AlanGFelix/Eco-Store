import {resolve} from 'path';

export default {
  root: resolve(__dirname ,'src'),
  build: {
    outDir: resolve(__dirname ,'dist'),
    emptyOutDir: true
  },
  rollupOptions: {
    input: resolve(__dirname ,'src')
  },
  alias: {
    '@': resolve(__dirname, 'src'),
  },
  base: '/Eco-Store/'
}