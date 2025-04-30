type DocsLink = {
  groupName: string;
  links: {
    displayName: string;
    id: string;
  }[];
};

export const docsLinks: DocsLink[] = [
  {
    groupName: "Getting started",
    links: [
      { displayName: "Introduction", id: "introduction" },
      { displayName: "Setup", id: "setup" },
    ],
  },
  {
    groupName: "Theme UI",
    links: [
      { displayName: "Colors", id: "colors" },
      { displayName: "Typography", id: "typography" },
      { displayName: "Logo", id: "logo" },
      { displayName: "Navigation", id: "navigation" },
    ],
  },
  {
    groupName: "Development",
    links: [
      { displayName: "Routing", id: "routing" },
      { displayName: "Environment variables", id: "environment-variables" },
      { displayName: "Structure", id: "structure" },
    ],
  },
];
