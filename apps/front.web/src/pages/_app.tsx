import { AppProps } from 'next/app';
import React from 'react';
import '@libs/ui/theme/init';

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
