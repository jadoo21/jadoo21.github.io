import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../test/test-utils";
import { WorkItem } from "./WorkItem";
import { projects } from "../../data/projects";

describe("WorkItem", () => {
  const epayments = projects.find((p) => p.slug === "keyloop-epayments-platform");
  if (!epayments) throw new Error("keyloop-epayments-platform project missing from data");

  it("renders title, company, tagline and summary", () => {
    renderWithRouter(<WorkItem project={epayments} />);
    expect(screen.getByText("Keyloop ePayments Platform")).toBeInTheDocument();
    expect(screen.getByText("Keyloop")).toBeInTheDocument();
    expect(
      screen.getByText("Distributed payment platform for automotive retail"),
    ).toBeInTheDocument();
    expect(screen.getByText(/distributed system of 6\+/)).toBeInTheDocument();
  });

  it("links to its case study", () => {
    renderWithRouter(<WorkItem project={epayments} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/work/keyloop-epayments-platform");
  });

  it("renders the work items in the expected order", () => {
    expect(projects.map((p) => p.slug)).toEqual([
      "keyloop-epayments-platform",
      "ucp-sms-paybylink",
      "adapter-agnostic-settlement",
      "paymentsintegrationhub-modernization",
      "tally-cis",
      "enterprise-retail",
    ]);
  });
});