import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

const longWait = { timeout: 3000 };

describe("App", () => {
  it("renders the home page hero and core sections", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      await screen.findByRole("heading", { level: 1, name: "Building systems that scale." }, longWait),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/full-stack software engineer specializing in React/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("heading", { level: 2, name: "Currently at Keyloop" }, longWait),
    ).toBeInTheDocument();
  });

  it("renders the work page with all project cards", async () => {
    render(
      <MemoryRouter initialEntries={["/work"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      await screen.findByRole("heading", { level: 1, name: "Selected Work" }, longWait),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Keyloop ePayments Platform/ }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /TALLY CIS/ })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Enterprise Retail Platform/ }),
    ).toBeInTheDocument();
  });

  it("renders the experience page with all three employers", async () => {
    render(
      <MemoryRouter initialEntries={["/experience"]}>
        <App />
      </MemoryRouter>,
    );

    expect((await screen.findAllByText("Keyloop")).length).toBeGreaterThan(0);
    expect(screen.getAllByText("Tally Group").length).toBeGreaterThan(0);
    expect(screen.getAllByText("NCR Corporation").length).toBeGreaterThan(0);
  });

  it("renders the ePayments case study page with lifecycle and architecture blocks", async () => {
    render(
      <MemoryRouter initialEntries={["/work/keyloop-epayments-platform"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: "Keyloop ePayments Platform",
      }, longWait),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "From request to settlement" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Settlement")).toBeInTheDocument();
  });

  it("shows the 404 view for unknown routes via the catch-all route", async () => {
    render(
      <MemoryRouter initialEntries={["/nope"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      await screen.findByRole("heading", { level: 1, name: /doesn't exist/i }, longWait),
    ).toBeInTheDocument();
  });
});