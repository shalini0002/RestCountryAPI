import Image from "next/image";
import { SearchFilter } from "./components/Filter";
import { CountryCard } from "./components/CountryCard";
import Countries from "./data/data.json";

export default function Home() {
  return (
    <div style={{
      backgroundColor: "var(--darkbackground)",
      color: "var(--foreground)",
    }}>
      <div className="max-w-7xl mx-auto min-h-vh px-4 pt-6 pb-16 md:py-12 xl:px-0" >
        <SearchFilter />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 py-6">
          {Countries.map((country, index) => (
            <CountryCard
              key={index}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flag}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
