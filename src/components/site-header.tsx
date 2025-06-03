import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 shadow-md bg-background sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          <svg
            className="h-8 w-8 text-primary group-hover:text-purple-700 transition-colors duration-300"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 80C20 46.8629 46.8629 20 80 20V20C80 20 20 20 20 20C20 20 20 80 20 80Z"
              stroke="currentColor"
              strokeWidth="10"
              strokeLinejoin="round"
            />
            <path
              d="M80 20L80 80L20 80"
              stroke="currentColor"
              strokeWidth="10"
              strokeLinejoin="round"
              strokeDasharray="5 15"
            />
          </svg>
          <span className="font-headline text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            Portfolio
          </span>
        </Link>
        {/* Optional: Navigation links could be added here */}
      </div>
    </header>
  );
}
