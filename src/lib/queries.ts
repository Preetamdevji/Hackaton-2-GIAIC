// lib/queries.ts
export const productQuery = `
*[_type == "products"] {
  _id,
  _createdAt,
  name,
  price,
  description,
  "imageUrl": image.asset->url,
  category,
  discountPercent,
  isNew,
  colors[],
  sizes[]
}
`;
