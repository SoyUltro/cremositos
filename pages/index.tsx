import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Nav from "../components/Nav";
import { BiSearchAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const Home: NextPage = () => {
	const handleSearchAppears = () => {
		const search = document.getElementById("searchInput");
		search?.classList.toggle("hidden");
	};

	const handleMenuAppers = () => {
		const menu = document.getElementById("menu");
		menu?.classList.toggle("hidden");
	};

	return (
		<>
			<Head>
				<title>Cremositos</title>
				<link rel="icon" type="image/jpg" href="/images/icon.jpg" />
				<meta charSet="UTF-8" />
				<meta name="author" content="SoyUltro" />
				<meta name="theme-color" content="#29ddde" />
				<meta name="copyright" content="SoyUltro" />
				<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0" />
				<meta name="keywords" content="cremositos, cremositos cookies, cremosito, galletas" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			</Head>

			{/* Header */}
			<header className="fixed top-0 left-0 right-0 z-[999] flex items-center justify-between bg-light py-6 px-[7%] font-quicksand lg:py-5 lg:px-12">
				<div className="flex items-center space-x-2">
					<Link href="#">
						<a>
							<Image
								src="/images/icon.jpg"
								className="rounded-full"
								height="64"
								width="64"
								alt="Cremositos logo"
							/>
						</a>
					</Link>
					<h1 className="text-3xl font-extrabold text-night">Cremositos</h1>
				</div>
				<Nav />
				<div className="flex items-center space-x-8">
					<BiSearchAlt onClick={handleSearchAppears} className="h-8 w-8 cursor-pointer" />
					<GiHamburgerMenu onClick={handleMenuAppers} className="hidden h-8 w-8 cursor-pointer md:inline-block" />
				</div>

				<div id="searchInput" className="absolute top-full right-0 my-6 mx-[7%] hidden h-20 bg-transparent">
					<input
						type="search"
						placeholder="Search..."
						className="mr-[7%] h-full w-full rounded-2xl bg-light py-2 px-4 text-2xl text-night shadow-custom focus-within:outline-none"
					/>
				</div>
			</header>

			{/* Home Section */}
			<section></section>
		</>
	);
};

export default Home;
