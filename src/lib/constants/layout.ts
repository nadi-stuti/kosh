export const SidebarFolders = [
  {
    label: "Nadi Stuti",
    collapsed: true,
    autogenerate: {
      directory: "nadi-stuti",
      collapsed: true,
    },
  },
  {
    label: "Rivers",
    collapsed: true,
    autogenerate: {
      directory: "rivers",
      collapsed: true,
    },
  },
  {
    label: "Books",
    collapsed: true,
    autogenerate: {
      directory: "books",
      collapsed: true,
    },
  },
  {
    label: "Tech",
    collapsed: true,
    autogenerate: {
      directory: "tech",
      collapsed: true,
    },
  },
  {
    label: "Tools",
    collapsed: true,
    autogenerate: {
      directory: "tools",
      collapsed: true,
    },
  },
  {
    label: "Papers",
    collapsed: true,
    autogenerate: {
      directory: "papers",
      collapsed: true,
    },
  },
  {
    label: "Events",
    collapsed: true,
    autogenerate: {
      directory: "events",
      collapsed: true,
    },
  },
  {
    label: "Team",
    collapsed: true,
    autogenerate: {
      directory: "team",
      collapsed: true,
    },
  },
  {
    label: "Guides",
    collapsed: true,
    autogenerate: {
      directory: "guides",
      collapsed: true,
    },
  },
  {
    label: "Daily Drops",
    collapsed: true,
    autogenerate: {
      directory: "daily-drops",
      collapsed: true,
    },
  },
  {
    label: "Thinking Grounds",
    collapsed: true,
    autogenerate: {
      directory: "thinking-grounds",
      collapsed: true,
    },
  },
];

export const SidebarTopics = [
  {
    label: "Pollution Academy",
    link: "/pollution-academy",
    icon: "warning",
    items: [
      {
        label: "Pollution Academy",
        autogenerate: {
          directory: "/pollution-academy",
          collapsed: true,
        },
      },
    ],
  },
  {
    label: "Get Involved",
    link: "/papers/about",
    icon: "seti:bicep",
    items: ["papers/about"],
  },
  {
    label: "Our Rivers",
    link: "/rivers/about",
    icon: "heart",
    items: [
      {
        label: "Guides",
        autogenerate: {
          directory: "/rivers",
          collapsed: true,
        },
      },
    ],
  },
  {
    label: "Data & Research",
    link: "/daily-drops/",
    icon: "seti:notebook",
    items: [
      {
        label: "Daily Drops",
        autogenerate: {
          directory: "/daily-drops",
          collapsed: true,
        },
      },
    ],
  },
  {
    label: "Itihaas",
    link: "/daily-drops/",
    icon: "seti:info",
    items: [
      {
        label: "Daily Drops",
        autogenerate: {
          directory: "/daily-drops",
          collapsed: true,
        },
      },
    ],
  },
  {
    label: "Nadi Stuti",
    link: "/nadi-stuti",
    icon: "starlight",
    items: [
      {
        label: "Nadi Stuti",
        autogenerate: {
          directory: "/nadi-stuti",
          collapsed: true,
        },
      },
    ],
  },
  {
    label: "Thinking Grounds",
    link: "/thinking-grounds/about",
    icon: "seti:smarty",
    items: [
      {
        label: "Thinking Grounds",
        autogenerate: {
          directory: "/thinking-grounds",
          collapsed: true,
        },
      },
    ],
  },
];
export const ExcludeTopics = {
  exclude: ["/blog", "/tags", "/blog/**/*", "/tags/**/*"],
};
