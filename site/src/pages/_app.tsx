import '@/ui/layouts/styles/globals.css'
import '@/ui/layouts/styles/components-theme.css'
import type { AppProps } from 'next/app'
import { MainLayout } from '@/ui/layouts/MainLayout'

export default ({ Component, pageProps }: AppProps) => <MainLayout><Component {...pageProps} /></MainLayout>
