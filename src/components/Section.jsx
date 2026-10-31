export default function Section({ children, className = '' }) {
  return (
    <div className={`mx-auto mb-5 max-w-sm sm:max-w-2xl lg:mb-8 lg:max-w-7xl ${className}`}>
      {children}
    </div>
  );
}
