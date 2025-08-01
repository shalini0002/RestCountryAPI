import CountryDetail from "../components/CountryDetails";
import Countries from "../data/data.json";

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Country {
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: Currency[];
  borders?: string[];
  flag: string;
}

interface PageProps {
  params: {
    country: string;
  };
}

// Generates static paths at build time
export async function generateStaticParams() {
  return Countries.map((country) => ({
    country: encodeURIComponent(country.name),
  }));
}

export default async function CountryPage({ params }: PageProps) {
  const decodedName = decodeURIComponent(params.country);
  const country: Country | undefined = Countries.find(
    (c) => c.name === decodedName
  );

  // ✅ Defensive check
  if (!country || !country.currencies) {
    return <div className="p-10">Country or currency data not found.</div>;
  }

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
