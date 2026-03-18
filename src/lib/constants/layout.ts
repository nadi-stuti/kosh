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
    link: "/get-involved",
    icon: "seti:bicep",
    items: [
      {
        label: "Get Involved",
        autogenerate: {
          directory: "/get-involved",
          collapsed: true,
        },
      },
    ],
  },
  {
    label: "Our Rivers",
    link: "/our-rivers",
    icon: "heart",
    items: [
      {
        label: "Our Rivers",
        autogenerate: {
          directory: "/our-rivers",
          collapsed: true,
        },
      },
    ],
  },
  {
    label: "Data & Research",
    link: "/data-research",
    icon: "seti:notebook",
    items: [
      {
        label: "Data & Research",
        autogenerate: {
          directory: "/data-research",
          collapsed: true,
        },
      },
    ],
  },
  {
    label: "Itihaas",
    link: "/itihaas/",
    icon: "seti:info",
    items: [
      {
        label: "Itihaas",
        autogenerate: {
          directory: "/itihaas/",
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
    link: "/thinking-grounds",
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
  exclude: ["/blog", "/tags", "/blog/**/*", "/tags/**/*", "/"],
};
