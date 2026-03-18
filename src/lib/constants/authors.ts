// src/authors.ts
export const blogAuthors = {
  nulligma: {
    name: "Shantanu Kulkarni",
    title: "Nadi Sevak",
    picture:
      "https://pbs.twimg.com/profile_images/722045969936703488/bLHK_LbW_400x400.jpg",
    url: "https://x.com/Nulligma/",
    contribution: "Architecture & Programming",
  },
  gopala: {
    name: "Gopalakrishna A",
    title: "Nadi Sevak",
    picture:
      "/authors/gopala.jpeg",
    url: "https://www.linkedin.com/in/gopalakrishna-anegundi/",
    contribution: "Product & Research",
  },
} as const;

export type AuthorID = keyof typeof blogAuthors;
