interface Props {
  name: string;
  description: string;
  licenseNo: string;
  country: string;
  rating: number;
  reviewCount: number;
}

export function ProfessionalServiceSchema({
  name,
  description,
  licenseNo,
  country,
  rating,
  reviewCount,
}: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name,
    description,
    areaServed: country,
    hasCredential: licenseNo,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
