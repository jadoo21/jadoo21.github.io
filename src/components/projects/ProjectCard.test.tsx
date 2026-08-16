import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../test/test-utils";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/projects";

describe("ProjectCard", () => {
  const tally = projects.find((p) => p.slug === "tally-cis");
  if (!tally) throw new Error("tally-cis project missing from data");

  it("renders title, tagline, description and technologies", () => {
    renderWithRouter(<ProjectCard project={tally} />);
    expect(screen.getByRole("link", { name: "TALLY CIS" })).toBeInTheDocument();
    expect(screen.getByText("Enterprise SaaS Platform")).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes("energy retailers")),
    ).toBeInTheDocument();
    for (const tech of ["React", "TypeScript", ".NET", "Azure"]) {
      expect(screen.getByText(tech)).toBeInTheDocument();
    }
  });

  it("links to its case study", () => {
    renderWithRouter(<ProjectCard project={tally} />);
    const link = screen.getAllByRole("link", { name: /Read Case Study/i })[0];
    expect(link).toHaveAttribute("href", "/work/tally-cis");
  });

  it("marks professional work as such", () => {
    const { unmount } = renderWithRouter(<ProjectCard project={tally} />);
    expect(screen.getAllByText("Professional").length).toBeGreaterThan(0);
    unmount();
  });
});
