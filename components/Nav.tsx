import NavItem from "./NavItem";

const Nav = () => {
	return (
		<nav id="menu" className="md:absolute md:top-full md:right-0 md:h-[80vh] md:w-96 md:bg-light md:text-night">
			<NavItem href="#home" name="Inicio" />
			<NavItem href="#product" name="Productos" />
			<NavItem href="#blogs" name="Blogs" />
			<NavItem href="#review" name="Review" />
			<NavItem href="#contact" name="Contacto" />
		</nav>
	);
};

export default Nav;
