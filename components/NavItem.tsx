import Link from "next/link";

type NavItemProps = {
	href: string;
	name: string;
	className?: string;
};

const NavItem = ({ href = "/", name = "Item", className }: NavItemProps) => {
	return (
		<Link href={href}>
			<a
				className={`mr-12 text-3xl font-medium capitalize text-night hover:border-b hover:border-night hover:pb-2 md:m-6 md:block md:text-4xl md:text-black ${className}`}
			>
				{name}
			</a>
		</Link>
	);
};

export default NavItem;
