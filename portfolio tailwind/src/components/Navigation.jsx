const links = [
  { href: "#about", title: "About" },
  { href: "#projects", title: "Projects" },
  { href: "#experience", title: "Experience" },
  { href: "#testimonials", title: "Testimonials" },
];

export default function Navigation() {
  return (
    <nav className="p-4 rounded-full glass">
      <ul className="flex items-center gap-5">
        {links.map(({ title, href }, index) => (
          <li key={index}>
            <a className="text-sm text-nav hover:text-secondary-foreground trans hover:bg-surface" href={href}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
