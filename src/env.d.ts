// src/env.d.ts
declare module "virtual:starlight-blog-config" {
  const blogConfig: import("starlight-blog").StarlightBlogConfig;
  export { blogConfig };
}
