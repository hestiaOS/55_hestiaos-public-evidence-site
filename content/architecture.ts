export interface ArchitectureLayer {
  name: string;
  description: string;
  components: string[];
}

export interface ArchitectureSection {
  title: string;
  layers: ArchitectureLayer[];
}

export const architectureOverview: ArchitectureSection = {
  title: "HestiaOS Governance Architecture (Public View)",
  layers: [
    {
      name: "Public Layer",
      description: "Components visible to external observers and evaluators.",
      components: [
        "public docs",
        "benchmark summaries",
        "screenshots",
        "sanitized traces",
        "this website",
        "public repositories",
      ],
    },
    {
      name: "Governance Boundary",
      description: "Where policy decisions are made and evidence is recorded.",
      components: [
        "Intent Registry",
        "Policy Decision Authority",
        "Execution Gate",
        "Causal Bridge",
        "DecisionTrace Store",
      ],
    },
    {
      name: "Private / Local Layer",
      description: "Not publicly accessible. Listed here only for boundary clarity.",
      components: [
        "real governance kernel",
        "private repositories",
        "OpenProject MCP",
        "Nextcloud",
        "local agents",
        "credentials",
        "runtime audit store",
        "production infrastructure",
      ],
    },
  ],
};
