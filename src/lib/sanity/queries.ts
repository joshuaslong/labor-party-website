import { groq } from "next-sanity";

// Platform
export const allPlatformSectionsQuery = groq`
  *[_type == "platformSection"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    order,
    icon
  }
`;

export const platformSectionBySlugQuery = groq`
  *[_type == "platformSection" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    summary,
    order,
    icon,
    content
  }
`;

export const allPlatformSlugsQuery = groq`
  *[_type == "platformSection"] { "slug": slug.current }
`;

// Blog
export const allBlogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    author,
    excerpt,
    featuredImage,
    "category": category->{ title, "slug": slug.current }
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    author,
    excerpt,
    featuredImage,
    body,
    "category": category->{ title, "slug": slug.current }
  }
`;

export const allBlogSlugsQuery = groq`
  *[_type == "blogPost"] { "slug": slug.current }
`;

export const relatedPostsQuery = groq`
  *[_type == "blogPost" && slug.current != $slug && category._ref == $categoryId] | order(publishedAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    featuredImage,
    "category": category->{ title, "slug": slug.current }
  }
`;

// Categories
export const allCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current
  }
`;
