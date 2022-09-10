import NavItem from "./NavItem";

const Nav = () => {
	return (
		<nav id="menu" className="md:absolute md:top-full md:right-0 md:h-[80vh] md:w-96 md:bg-light md:text-night">
			<NavItem href="#home" name="inicio" />
			<NavItem href="#product" name="productos" />
			<NavItem href="#blogs" name="blogs" />
			<NavItem href="#review" name="review" />
			<NavItem href="#contact" name="contacto" />
		</nav>
	);
};

export default Nav;
