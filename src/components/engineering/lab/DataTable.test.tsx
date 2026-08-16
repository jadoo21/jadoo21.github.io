import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, fireEvent, screen } from "@testing-library/react";
import { renderWithRouter } from "../../../test/test-utils";
import { DataTable } from "./DataTable";

describe("DataTable", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  const finishLoading = async () => {
    await act(async () => {
      vi.advanceTimersByTime(800);
    });
  };

  it("shows a loading state then renders customer rows", async () => {
    renderWithRouter(<DataTable errorRate={0} />);
    expect(screen.getAllByRole("row").length).toBeGreaterThan(1);

    await finishLoading();
    expect(screen.getByText("Ava Thompson")).toBeInTheDocument();
  });

  it("filters customers by search query", async () => {
    renderWithRouter(<DataTable errorRate={0} />);
    await finishLoading();

    fireEvent.change(screen.getByRole("searchbox", { name: /Search customers/i }), {
      target: { value: "non-existent-company" },
    });
    expect(screen.getByText(/No customers match your filters/i)).toBeInTheDocument();

    fireEvent.change(screen.getByRole("searchbox", { name: /Search customers/i }), {
      target: { value: "Northwind" },
    });
    expect(screen.getByText("Ava Thompson")).toBeInTheDocument();
  });

  it("shows the error state and retries", async () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    renderWithRouter(<DataTable errorRate={1} />);
    await finishLoading();

    expect(screen.getByText(/Failed to load customers/i)).toBeInTheDocument();

    vi.spyOn(Math, "random").mockReturnValue(1);
    fireEvent.click(screen.getByRole("button", { name: /^Retry$/i }));
    await finishLoading();

    expect(screen.getByText("Ava Thompson")).toBeInTheDocument();
    vi.restoreAllMocks();
  });
});
