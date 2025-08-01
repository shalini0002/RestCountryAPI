"use client";

import { useRouter } from "next/navigation";

interface CountryCardProps {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

export function CountryCard({
  flag,
  name,
  population,
  region,
  capital,
}: CountryCardProps) {
  const router = useRouter();

  return (
    <div
    onClick={() => router.push(`/${encodeURIComponent(name)}`)}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer"
      style={{
        backgroundColor: "var(--lightbackground)",
        color: "var(--foreground)",
      }}
    >
      <img src={flag} alt={name} className="w-full h-40 object-cover " />
      <div className="p-5 mb-5">
        <h2 className="text-lg font-semibold mb-3">{name}</h2>
        <p className="text-sm"><strong>Population:</strong> {population}</p>
        <p className="text-sm"><strong>Region:</strong> {region}</p>
        <p className="text-sm"><strong>Capital:</strong> {capital}</p>
      </div>
    </div>
  );
}
