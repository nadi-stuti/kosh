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
      "https://media.licdn.com/dms/image/v2/D5603AQHrjEzJ5dfhJg/profile-displayphoto-scale_200_200/B56Zfe.9gVGoAY-/0/1751792738513?e=1775088000&v=beta&t=MY9eq0SBWt8X-140CVR2KR3ErhAz0p99m2tqXWgfDGM",
    url: "https://in.linkedin.com/in/gopalakrishna-anegundi",
    contribution: "Product & Research",
  },
} as const;

export type AuthorID = keyof typeof blogAuthors;
