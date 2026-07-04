/**
 * Renders schema.org structured data as a JSON-LD script tag.
 * `data` may be a single node or an array of nodes.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
