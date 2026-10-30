export default function SectionHeading({ children, className = '' }) {
  return (
    <h2
      className={`font-play text-center text-3xl font-bold opacity-25 sm:text-5xl lg:text-8xl ${className}`}
    >
      {children}
    </h2>
  );
}
