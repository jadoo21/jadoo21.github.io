import { describe, expect, it } from "vitest";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithRouter } from "../../test/test-utils";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("renders the RR brand mark and primary navigation links", () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByRole("link", { name: /Rishabh Roshan/ })).toBeInTheDocument();
    for (const label of ["Experience", "Work", "About", "Contact"]) {
      expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
    }
  });

  it("links to LinkedIn and Resume", () => {
    renderWithRouter(<Navbar />);
    const linkedInLinks = screen.getAllByRole("link", { name: "LinkedIn profile" });
    expect(
      linkedInLinks.some(
        (link) =>
          link.getAttribute("href") === "https://www.linkedin.com/in/rishabh-roshan/",
      ),
    ).toBe(true);
    expect(screen.getByRole("link", { name: "Resume" })).toHaveAttribute(
      "href",
      "/Rishabh-Roshan-Resume.pdf",
    );
  });

  it("toggles dark mode class on the document element", async () => {
    renderWithRouter(<Navbar />);
    const toggles = screen.getAllByRole("button", { name: "Switch to dark mode" });
    const toggle = toggles[0]!;
    expect(document.documentElement).not.toHaveClass("dark");

    fireEvent.click(toggle);
    await waitFor(() => expect(document.documentElement).toHaveClass("dark"));

    const lightToggles = screen.getAllByRole("button", {
      name: "Switch to light mode",
    });
    fireEvent.click(lightToggles[0]!);
    await waitFor(() => expect(document.documentElement).not.toHaveClass("dark"));
  });
});