"use client";

import Image from "next/image";
import { BackButton } from "./BackButton";

interface CountryDetailProps {
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: { name: string }[];
  borderCountries: string[];
}

export default function CountryDetail({
  flag,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  borderCountries,
}: CountryDetailProps) {
  return (
    <>
    <div className="h-screen" style={{
        backgroundColor: "var(--darkbackground)",
        color: "var(--foreground)",
      }}>
    <div className="max-w-7xl mx-auto px-4 py-10" >
      <BackButton />
    </div>
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 py-10">
      {/* Flag */}
      <div className="w-full h-auto">
        
        <Image
          src={flag}
          alt={`${name} flag`}
          width={800}
          height={500}
          className="rounded-md w-full object-cover shadow"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center gap-6">
        <h2 className="text-3xl font-bold">{name}</h2>

        <div className="grid sm:grid-cols-2 gap-y-2 gap-x-8">
          <p><strong>Native Name:</strong> {nativeName}</p>
          <p><strong>Population:</strong> {population.toLocaleString()}</p>
          <p><strong>Region:</strong> {region}</p>
          <p><strong>Sub Region:</strong> {subregion}</p>
          <p><strong>Capital:</strong> {capital}</p>
          <p><strong>Top Level Domain:</strong> {topLevelDomain.join(", ")}</p>
          <p><strong>Currencies:</strong> {currencies.map(c => c.name).join(", ")}</p>
        </div>

        <div>
          <p className="font-semibold mb-2">Border Countries:</p>
          <div className="flex flex-wrap gap-2">
            {borderCountries.length > 0 ? (
              borderCountries.map((border, index) => (
                <span
                style={{
                  backgroundColor: "var(--lightbackground)",
                  color: "var(--foreground)",
                }}
                  key={index}
                  className="px-6 py-2 text-sm dark:bg-dark-blue rounded shadow"
                >
                  {border}
                </span>
              ))
            ) : (
              <span className="text-gray-500">None</span>
            )}
          </div>
        </div>
      </div>
    </section>
    </div>
    </>
  );
}
