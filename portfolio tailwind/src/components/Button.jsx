export default function Button({ className, size = "default", children, transparent }) {
  const sizesClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent p-2 bg-accent text-light   hover:bg-accent/90 trans shadow-lg shadow-accent/25 capitalize ${className ? className : ""} ${sizesClasses ? sizesClasses[size] : ""} ${transparent ? "bg-transparent" : ""}`}
    >
      {children}
    </button>
  );
}
