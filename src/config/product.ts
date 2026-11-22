import type { ProductConfig } from "./types";

export const product: ProductConfig = {
  id: "cadence",
  name: "Cadence",
  category: "Work & Delivery",
  tagline: "Work management your PMO actually owns.",
  description: "A self-hosted portfolio and work management system for boards, dependencies, workload, automations, and delivery intelligence.",
  repositoryUrl: "https://github.com/ConseilTek-Tektons/cadence",
  nav: [{ label: "Boards", badge: "12" }, { label: "Portfolios" }, { label: "Timeline" }, { label: "Automations" }, { label: "Workload" }],
  demoUsers: [
    { id: "demo-admin", name: "Maya Chen", email: "maya@northstar.example", role: "admin", label: "Workspace administrator" },
    { id: "demo-manager", name: "Jon Bell", email: "jon@northstar.example", role: "portfolio_manager", label: "Portfolio manager" },
    { id: "demo-host", name: "Priya Rao", email: "priya@northstar.example", role: "contributor", label: "Project contributor" },
  ],
  ai: {
    name: "Portfolio copilot",
    description: "Ask about delivery risk, critical paths, capacity, portfolio health, or automation behavior.",
    systemPrompt: "You are Cadence's portfolio copilot. Answer only from supplied workspace context and approved knowledge. Cite the supporting board, item, dependency, or policy. Never mutate work or approve an automation.",
    suggestedQuestions: ["Which dependencies threaten the portfolio?", "How is workload calculated?", "Explain automation dry-run mode."],
  },
};
