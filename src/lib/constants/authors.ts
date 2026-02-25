// src/authors.ts
export const blogAuthors = {
  nulligma: {
    name: "Shantanu Kulkarni",
    title: "Nadi Sevak",
    picture:
      "https://pbs.twimg.com/profile_images/722045969936703488/bLHK_LbW_400x400.jpg",
    url: "https://x.com/Nulligma/",
  },
  // Add more authors here...
} as const;

export type AuthorID = keyof typeof blogAuthors;
