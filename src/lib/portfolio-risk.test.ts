import { describe, expect, it } from "vitest";
import { portfolioRisk } from "./portfolio-risk";
describe("portfolio risk",()=>{it("keeps an unblocked portfolio healthy",()=>expect(portfolioRisk(0,70,0)).toEqual({score:0,level:"healthy"}));it("escalates dependency pressure",()=>expect(portfolioRisk(8,92,2).level).toBe("critical"));});
