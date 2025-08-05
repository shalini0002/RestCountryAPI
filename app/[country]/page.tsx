

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


// app/[country]/page.tsx

// app/[country]/page.tsx

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
  capital?: string[]; // Some entries may be arrays
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

// ✅ Generate static paths at build time
export function generateStaticParams() {
  return Countries.map((c) => ({
    country: encodeURIComponent(c.name),
  }));
}

// ✅ Page component
export default function CountryPage({ params }: PageProps) {
  const decodedName = decodeURIComponent(params.country);

  // ❌ Original (just for reference):
  // const country: Country | undefined = Countries.find((c) => c.name === decodedName);

  // ✅ Updated with defensive matching (case insensitive and safe)
  const country = (Countries as Country[]).find(
    (c) => c.name.toLowerCase() === decodedName.toLowerCase()
  );

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
