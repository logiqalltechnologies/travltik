import React, { useState, useEffect } from 'react';
import { Home, Compass, Sparkles, Users, Briefcase } from 'lucide-react';

export default function MobileBottomNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/find-experts', label: 'Consultants', icon: Users },
    { href: '/self-apply', label: 'Self Apply', icon: Compass },
    { href: '/ai-tools', label: 'AI Tools', icon: Sparkles },
    { href: '/visa-services', label: 'Services', icon: Briefcase },
  ];

  return (
    <nav
      className={`fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2 z-50 md:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center flex-1 py-1 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <Icon className="w-5 h-5 stroke-[1.8]" />
              <span className="text-[10px] tracking-tight mt-0.5">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
