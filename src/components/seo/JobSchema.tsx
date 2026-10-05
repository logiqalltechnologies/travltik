interface JobSchemaProps {
  title: string;
  description: string;
  datePosted: string;
  validThrough: string;
  hiringOrganization: string;
  country: string;
  currency: string;
  minSalary: number;
  maxSalary: number;
}

export function JobSchema({
  title,
  description,
  datePosted,
  validThrough,
  hiringOrganization,
  country,
  currency,
  minSalary,
  maxSalary,
}: JobSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title,
    description,
    datePosted,
    validThrough,
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: hiringOrganization,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: country,
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency,
      value: {
        '@type': 'QuantitativeValue',
        minValue: minSalary,
        maxValue: maxSalary,
        unitText: 'YEAR',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
