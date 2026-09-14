// lib/catalog.ts
import { query, unsafeQuery, labMode } from './db';

const select = `
  SELECT
    p.id,
    p.category_id AS categoryId,
    c.name AS categoryName,
    p.name,
    p.description,
    p.image,
    p.price,
    p.unit,
    p.stock,
    p.active,
    p.created_at AS createdAt
  FROM products p
  JOIN categories c ON c.id = p.category_id
`;

export async function listProducts(search = '') {
  if (labMode) {
    const sql = `
      ${select}
      WHERE p.active = 1
      AND (
        p.name LIKE '%${search}%'
        OR p.description LIKE '%${search}%'
      )
      ORDER BY p.name
    `;

    return unsafeQuery<any[]>(sql);
  }

  const pattern = `%${search}%`;

  return query<any[]>(
    `
      ${select}
      WHERE p.active = 1
      AND (
        p.name LIKE ?
        OR p.description LIKE ?
      )
      ORDER BY p.name
    `,
    [pattern, pattern]
  );
}
