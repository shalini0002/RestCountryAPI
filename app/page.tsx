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

const ITEMS_PER_PAGE = 12;

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredCountries = useMemo(() => {
    return (CountriesData as Country[])
      .filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((country) => (region ? country.region === region : true));
  }, [searchTerm, region]);

  // Only show a slice based on current visibleCount
  const visibleCountries = filteredCountries.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

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
          onSearchChange={(value) => {
            setSearchTerm(value);
            setVisibleCount(ITEMS_PER_PAGE); // reset pagination on new search
          }}
          onRegionChange={(value) => {
            setRegion(value);
            setVisibleCount(ITEMS_PER_PAGE); // reset pagination on new filter
          }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 py-6">
          {visibleCountries.map((country, index) => (
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

        {visibleCount < filteredCountries.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              style={{
                backgroundColor: "var(--lightbackground)",
                color: "var(--foreground)",
              }}
              className="text-white px-6 py-2 rounded-md shadow transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
