// app/[country]/page.tsx


import CountryDetail from "../components/CountryDetails";
import Countries from "../data/data.json";

interface PageProps {
  params: {
    country: string; // ✅ must match [country] folder name
  };
}

export default function CountryPage({ params }: PageProps) {
  const decodedName = decodeURIComponent(params.country);
  const country = Countries.find((c) => c.name === decodedName);

  if (!country) return <div className="p-10">Country not found.</div>;

  return (
    <CountryDetail
      flag={country.flag}
      name={country.name}
      nativeName={country.nativeName}
      population={country.population}
      region={country.region}
      subregion={country.subregion}
      capital={country.capital}
      topLevelDomain={country.topLevelDomain}
      currencies={country.currencies}
      borderCountries={country.borders || []}
    />
  );
}
