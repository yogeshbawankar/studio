"use client";

import { useState, useEffect } from 'react';

export default function SiteFooter() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted">
      <div className="container mx-auto text-center text-muted-foreground">
        <p>&copy; {currentYear} Yogesh Bawankar. All rights reserved.</p>
        <p className="text-sm mt-2">Designed with Elegance</p>
      </div>
    </footer>
  );
}
