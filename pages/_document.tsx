import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html className="text-[55%] transition-all duration-200 lg:text-[62.5%] sm:text-[50%]">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Quicksand:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}