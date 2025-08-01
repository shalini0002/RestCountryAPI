// 'use client';

// import { useTheme } from 'next-themes';
// import { useEffect, useState } from 'react';

// export function ThemeToggle() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;

//   return (
//     <button
//       onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//       className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded shadow"
//     >
//       {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
//     </button>
//   );
// }
