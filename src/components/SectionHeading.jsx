export default function SectionHeading({ children, className = '' }) {
  return (
    <h2
      className={`font-play text-center text-3xl font-bold text-gray-500 sm:text-5xl lg:text-8xl ${className}`}
    >
      {children}
    </h2>
  );
}
