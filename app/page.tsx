// app/page.tsx or app/index.tsx

"use client";

import { useState, useMemo } from "react";
import { SearchFilter } from "./components/Filter";
import { CountryCard } from "./components/CountryCard";
import CountriesData from "./data/data.json";

interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag?: string;
  flags?: {
    svg: string;
    png: string;
  };
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");

  const filteredCountries = useMemo(() => {
    return (CountriesData as Country[])
      .filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((country) => (region ? country.region === region : true));
  }, [searchTerm, region]);

  return (
    <div
      style={{
        backgroundColor: "var(--darkbackground)",
        color: "var(--foreground)",
      }}
    >
      <div className="max-w-7xl mx-auto min-h-vh px-4 pt-6 pb-16 md:py-12 xl:px-0">
        <SearchFilter
          searchTerm={searchTerm}
          region={region}
          onSearchChange={setSearchTerm}
          onRegionChange={setRegion}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 py-6">
          {filteredCountries.map((country, index) => (
            <CountryCard
              key={index}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flag || country.flags?.svg}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
