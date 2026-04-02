import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log('env.VITE_API_BASE_URL---', env.VITE_API_BASE_URL)

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    base: env.VITE_API_BASE_URL || '/'
  }
})
