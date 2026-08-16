import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("renders the home page hero and core sections", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      await screen.findByRole("heading", { level: 1, name: "Rishabh Roshan" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/production-grade enterprise applications across the frontend/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("heading", {
        level: 2,
        name: "Selected Engineering Work",
      }),
    ).toBeInTheDocument();
  });

  it("renders the work page with all project cards", async () => {
    render(
      <MemoryRouter initialEntries={["/work"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: "Selected Engineering Work",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /TALLY CIS/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Fastype/ })).toBeInTheDocument();
  });

  it("renders the experience page with both employers", async () => {
    render(
      <MemoryRouter initialEntries={["/experience"]}>
        <App />
      </MemoryRouter>,
    );

    expect(await screen.findByText("Tally Group")).toBeInTheDocument();
    expect(screen.getByText("NCR Corporation")).toBeInTheDocument();
  });

  it("shows the 404 view for unknown routes via the catch-all route", async () => {
    render(
      <MemoryRouter initialEntries={["/nope"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      await screen.findByRole("heading", { level: 1, name: /doesn't exist/i }),
    ).toBeInTheDocument();
  });
});
