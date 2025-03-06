export default function LocalBusinessSchema() {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Truchic Experiences",
            image: "https://www.truchicexperiences.com/TruchicExperiencesFinalLogo.jpg",
            url: "https://www.truchicexperiences.com",
            telephone: "+34 649 88 08 64",
            address: {
              "@type": "PostalAddress",
              streetAddress: "",
              addressLocality: "Madrid",
              addressRegion: "Madrid",
              postalCode: "",
              addressCountry: "ES",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 40.4168,
              longitude: -3.7038,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday"],
                opens: "10:00",
                closes: "14:00",
              },
            ],
            priceRange: "$$$",
            servesCuisine: "Luxury Travel Services",
          }),
        }}
      />
    )
  }
  
  