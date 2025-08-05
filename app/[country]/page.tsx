

// import CountryDetail from "../components/CountryDetails";
// import Countries from "../data/data.json";

// interface Currency {
//   code: string;
//   name: string;
//   symbol: string;
// }

// interface Country {
//   name: string;
//   nativeName: string;
//   population: number;
//   region: string;
//   subregion: string;
//   capital?: string[];
//   topLevelDomain: string[];
//   currencies: Currency[];
//   borders?: string[];
//   flag: string;
// }

// interface PageProps {

//   params: Promise<{
//     country: string;

// }>;
// }

// // ✅ Generate static paths at build time
// export function generateStaticParams() {
//   return Countries.map((country) => ({
//     country: encodeURIComponent(country.name),
//   }));
// }

// // ✅ Page component
// export default async function CountryPage({ params }: PageProps) {
//   const resolvedParams = await params;
//   const decodedName = encodeURIComponent(resolvedParams.country)

//   const country: Country | undefined = Countries.find(
//     (c) => c.name === decodedName
//   );

//   if (!country || !country.currencies) {
//     return <div className="p-10">Country or currency data not found.</div>;
//   }

//   return (
//     <CountryDetail
//       flag={country.flag}
//       name={country.name}
//       nativeName={country.nativeName}
//       population={country.population}
//       region={country.region}
//       subregion={country.subregion}
//       capital={country.capital}
//       topLevelDomain={country.topLevelDomain}
//       currencies={country.currencies}
//       borderCountries={country.borders || []}
//     />
//   );
// }



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
  capital?: string[]; // Capital can be an array of strings or undefined
  topLevelDomain: string[];
  currencies: Currency[];
  borders?: string[];
  flag: string;
}

interface PageProps {
  params: Promise<{ country: string }>; // Ensure params is a Promise
}

// ✅ Static params for SSG
export function generateStaticParams() {
  return Countries.map((c) => ({
    country: encodeURIComponent(c.name),
  }));
}

// ✅ Component
export default async function CountryPage({ params }: PageProps) {
  // Resolve the params promise
  const { country } = await params; // Use await to resolve params

  const decodedName = decodeURIComponent(country);

  const countryData = (Countries as Country[]).find(
    (c) => c.name.toLowerCase() === decodedName.toLowerCase()
  );

  if (!countryData) {
    return <div className="p-10">Country not found</div>;
  }

  // Handle capital field to ensure it's a string or fallback value
  const capital = Array.isArray(countryData.capital)
    ? countryData.capital.join(", ") // Join array into a single string
    : countryData.capital || "No capital"; // If it's not an array, use the string or fallback

  return (
    <CountryDetail
      flag={countryData.flag}
      name={countryData.name}
      nativeName={countryData.nativeName}
      population={countryData.population}
      region={countryData.region}
      subregion={countryData.subregion}
      capital={capital} // Pass the capital string
      topLevelDomain={countryData.topLevelDomain}
      currencies={countryData.currencies}
      borderCountries={countryData.borders || []}
    />
  );
}
