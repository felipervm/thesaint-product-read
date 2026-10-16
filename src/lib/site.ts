export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? "/thesaint-product-read";
export const siteUrl = `https://felipervm.github.io${basePath}`;
export const asset = (path: string) => `${basePath}/${path.replace(/^\//, "")}`;
