import { describe, expect, it } from "vitest";
import { hasPermission, resolveRolesFromClaims } from "./rbac";

describe("Cadence RBAC", () => {
  it("grants wildcard permissions to administrators", () => expect(hasPermission(["admin"], "automation.manage")).toBe(true));
  it("keeps access policy away from contributors", () => expect(hasPermission(["contributor"], "access.manage")).toBe(false));
  it("maps portfolio groups", () => expect(resolveRolesFromClaims({ groups: ["pmo-leads"] })).toEqual(["portfolio_manager"]));
});
