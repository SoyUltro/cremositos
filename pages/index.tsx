import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
	const handleNavAppears = () => {
		let navbar = document.querySelector(".navbar");
		navbar?.classList.toggle("active");
	};

	const handleSearchAppears = () => {
		let search = document.querySelector(".search");
		search?.classList.toggle("active");
	};

	return (
		<>
			<Head>
				<title>Cremositos</title>
				<link rel="icon" type="image/jpg" href="/images/logo.png" />
				<meta charSet="UTF-8" />
				<meta name="author" content="SoyUltro" />
				<meta name="theme-color" content="#29ddde" />
				<meta name="copyright" content="SoyUltro" />
				<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0" />
				<meta name="keywords" content="cremositos, cremositos cookies, cremosito, galletas" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
				<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />

				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			</Head>

			<header className="header">
				<div className="logoContent space-x-2">
					<a href="#" className="logo">
						<Image width="64" height="64" src="/images/logo.png" className="rounded-full" alt="" />
					</a>
					<h1 className="logoName">Cremositos </h1>
				</div>

				<nav className="navbar">
					<a href="#home">Inicio</a>
					<a href="#product">Producto</a>
					<a href="#blogs">Blogs</a>
					<a href="#review">Reseñas</a>
					<a href="#contact">Contacto</a>
				</nav>

				<div className="icon">
					<i className="fas fa-search" id="search" onClick={handleSearchAppears}></i>
					<i className="fas fa-bars" id="menu-bar" onClick={handleNavAppears}></i>
				</div>

				<div className="search">
					<input type="search" placeholder="search..." />
				</div>
			</header>
			{/* <!-- header section end here  --> */}

			{/* <!-- home section start here  --> */}
			<section className="home" id="home">
				<div className="homeContent">
					<h2>Una torta deliciosa para todos</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum excepturi doloribus, fuga quod deserunt
						recusandae?
					</p>
					<div className="home-btn">
						<a href="#">
							<button>Ver Más</button>
						</a>
					</div>
				</div>
			</section>

			{/* <!-- home section end here  --> */}

			{/* <!-- product section start here  --> */}
			<section className="product" id="product">
				<div className="heading">
					<h2>Nuestros productos exclusivos</h2>
				</div>
				<div className="swiper product-row">
					<div className="swiper-wrapper">
						<div className="swiper-slide box">
							<div className="img">
								<img src="images/cake1.png" alt="" />
							</div>
							<div className="product-content">
								<h3>Chocolate</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
								</p>
								<div className="orderNow">
									<button>Ordena ahora </button>
								</div>
							</div>
						</div>
						<div className="swiper-slide box">
							<div className="img">
								<img src="images/cake1.png" alt="" />
							</div>
							<div className="product-content">
								<h3>Chocolate</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
								</p>
								<div className="orderNow">
									<button>Ordena ahora </button>
								</div>
							</div>
						</div>
						<div className="swiper-slide box">
							<div className="img">
								<img src="images/cake1.png" alt="" />
							</div>
							<div className="product-content">
								<h3>Chocolate</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
								</p>
								<div className="orderNow">
									<button>Ordena ahora </button>
								</div>
							</div>
						</div>
						<div className="swiper-slide box">
							<div className="img">
								<img src="images/cake2.png" alt="" />
							</div>
							<div className="product-content">
								<h3>Chocolate</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.
								</p>
								<div className="orderNow">
									<button>Ordena ahora </button>
								</div>
							</div>
						</div>
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</section>

			{/* <!-- product section end here  --> */}

			{/* <!-- blogs section start here  --> */}
			<section className="blogs" id="blogs">
				<div className=" swiper blogs-row">
					<div className="swiper-wrapper">
						<div className=" swiper-slide box">
							<div className="img">
								<img src="images/blog-img1.png" alt="" />
							</div>
							<div className="content">
								<h3>Caramel Bourbon Vanilla Cupcakes </h3>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum voluptatum
									corporis accusamus aperiam fugiat tempora blanditiis labore dolor aliquid maxime nobis
									laborum sed soluta voluptatibus aspernatur natus, dicta quisquam.
								</p>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ab ullam reiciendis sint
									eaque at.
								</p>
							</div>
						</div>
						<div className=" swiper-slide box">
							<div className="img">
								<img src="images/blog-img2.png" alt="" />
							</div>
							<div className="content">
								<h3>Caramel Bourbon Vanilla Cupcakes </h3>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum voluptatum
									corporis accusamus aperiam fugiat tempora blanditiis labore dolor aliquid maxime nobis
									laborum sed soluta voluptatibus aspernatur natus, dicta quisquam.
								</p>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ab ullam reiciendis sint
									eaque at.
								</p>
								<a href="#blogs" className="btn">
									learn more
								</a>
							</div>
						</div>
						<div className=" swiper-slide box">
							<div className="img">
								<img src="images/blog-img2.png" alt="" />
							</div>
							<div className="content">
								<h3>Caramel Bourbon Vanilla Cupcakes </h3>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum voluptatum
									corporis accusamus aperiam fugiat tempora blanditiis labore dolor aliquid maxime nobis
									laborum sed soluta voluptatibus aspernatur natus, dicta quisquam.
								</p>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ab ullam reiciendis sint
									eaque at.
								</p>
								<a href="#blogs" className="btn">
									learn more
								</a>
							</div>
						</div>
					</div>
					<div className="swiper-button-next"></div>
					<div className="swiper-button-prev"></div>
					<div className="swiper-pagination"></div>
				</div>
			</section>

			{/* <!-- blogs section ends here  --> */}

			{/* <!-- newsletter section start here  --> */}

			<section className="newsletter">
				<form action="">
					<h3>suscríbase para recibir las últimas actualizaciones</h3>
					<input type="email" name="" placeholder="escribe tu correo" id="" className="box" />
					<input type="button" value="suscribete" className="box2" />
				</form>
			</section>
			{/* <!-- newsletter section ends here  --> */}

			{/* <!-- review section start here  --> */}
			<section className="review" id="review">
				<div className="heading">
					<h2>reseñas</h2>
				</div>

				<div className=" swiper review-row">
					<div className="swiper-wrapper">
						<div className="swiper-slide box">
							<div className="client-review">
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, perferendis architecto
									quasi eveniet aliquam sed?
								</p>
							</div>
							<div className="client-info">
								<div className="img">
									<img src="images/client1.jpg" alt="" />
								</div>
								<div className="clientDetailed">
									<h3>Hardy Devid</h3>
									<p>UI / UX designer</p>
								</div>
							</div>
						</div>
						<div className="swiper-slide box">
							<div className="client-review">
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, perferendis architecto
									quasi eveniet aliquam sed?
								</p>
							</div>
							<div className="client-info">
								<div className="img">
									<img src="images/client1.jpg" alt="" />
								</div>
								<div className="clientDetailed">
									<h3>Hardy Devid</h3>
									<p>UI / UX designer</p>
								</div>
							</div>
						</div>
						<div className="swiper-slide box">
							<div className="client-review">
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, perferendis architecto
									quasi eveniet aliquam sed?
								</p>
							</div>
							<div className="client-info">
								<div className="img">
									<img src="images/client1.jpg" alt="" />
								</div>
								<div className="clientDetailed">
									<h3>Hardy Devid</h3>
									<p>UI / UX designer</p>
								</div>
							</div>
						</div>
						<div className="swiper-slide box">
							<div className="client-review">
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, perferendis architecto
									quasi eveniet aliquam sed?
								</p>
							</div>
							<div className="client-info">
								<div className="img">
									<img src="images/client1.jpg" alt="" />
								</div>
								<div className="clientDetailed">
									<h3>Hardy Devid</h3>
									<p>UI / UX designer</p>
								</div>
							</div>
						</div>
						<div className="swiper-pagination"></div>
					</div>
				</div>
			</section>
			{/* <!-- review section ends here  --> */}

			{/* <!-- footer section start here  --> */}

			<footer className="footer" id="contact">
				<div className="box-container">
					<div className="mainBox">
						<div className="content space-x-3">
							<a href="#">
								<Image
									width="50"
									height="50"
									src="/images/logo.png"
									className="rounded-full"
									alt="cremositos logo"
								/>
							</a>
							<h1 className="logoName"> Cremositos </h1>
						</div>

						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta accusamus maxime quod.</p>
					</div>
					<div className="box">
						<h3>Enlaces</h3>
						<a href="#">
							<i className="fas fa-arrow-right"></i>Inicio
						</a>
						<a href="#">
							<i className="fas fa-arrow-right"></i>Productos
						</a>
						<a href="#">
							<i className="fas fa-arrow-right"></i>blogs
						</a>
						<a href="#">
							<i className="fas fa-arrow-right"></i>Reseñas
						</a>
						<a href="#">
							<i className="fas fa-arrow-right"></i>Contacto
						</a>
					</div>
					<div className="box">
						<h3>Enlaces Extras</h3>
						<a href="#">
							<i className="fas fa-arrow-right"></i>Información de cuenta
						</a>
						<a href="#">
							<i className="fas fa-arrow-right"></i>Ordenar un postre
						</a>
						<a href="#">
							<i className="fas fa-arrow-right"></i>Politica y privacidad
						</a>
						<a href="#">
							<i className="fas fa-arrow-right"></i>Metodos de pago
						</a>
						<a href="#">
							<i className="fas fa-arrow-right"></i>Nuestros servicios
						</a>
					</div>
					<div className="box">
						<h3>Contact Info</h3>
						<a href="#">
							<i className="fas fa-phone"></i>+51 911 221 344
						</a>
						<a href="#">
							{" "}
							<i className="fas fa-envelope"></i>contacto@cremosito.xyz
						</a>
					</div>
				</div>
				<div className="share">
					{/* <a href="#" className="fab fa-facebook-f"></a> */}
					{/* <a href="#" className="fab fa-twitter"></a> */}
					<a href="https://intagram.cremosito.xyz" className="fab fa-instagram"></a>
					{/* <a href="#" className="fab fa-linkedin"></a> */}
					{/* <a href="#" className="fab fa-pinterest"></a> */}
				</div>
				<div className="credit">
					creador por <span>Jose Carbonell </span> | todos los derechos reservados !
				</div>
			</footer>
		</>
	);
};

export default Home;
