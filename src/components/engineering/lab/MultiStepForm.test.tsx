import { describe, expect, it } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithRouter } from "../../../test/test-utils";
import { MultiStepForm } from "./MultiStepForm";

function fillPersonal(): void {
  fireEvent.change(screen.getByLabelText(/Full name/i), {
    target: { value: "Jane Doe" },
  });
  fireEvent.change(screen.getByLabelText(/Email/i), {
    target: { value: "jane@example.com" },
  });
}

describe("MultiStepForm", () => {
  it("blocks advancing until Personal validation passes", () => {
    renderWithRouter(<MultiStepForm />);
    fireEvent.click(screen.getByRole("button", { name: /Continue/i }));
    expect(screen.getAllByRole("alert").length).toBeGreaterThan(0);
    expect(screen.getByLabelText(/Full name/i)).toBeInTheDocument();

    fillPersonal();
    fireEvent.click(screen.getByRole("button", { name: /Continue/i }));
    expect(screen.getByLabelText(/Street/i)).toBeInTheDocument();
  });

  it("can complete all steps and reveals the success state", () => {
    renderWithRouter(<MultiStepForm />);

    fillPersonal();
    fireEvent.click(screen.getByRole("button", { name: /Continue/i }));

    fireEvent.change(screen.getByLabelText(/Street/i), {
      target: { value: "12 Example Street" },
    });
    fireEvent.change(screen.getByLabelText(/City/i), {
      target: { value: "Hyderabad" },
    });
    fireEvent.change(screen.getByLabelText(/Postal code/i), {
      target: { value: "500081" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Continue/i }));

    fireEvent.change(screen.getByLabelText(/Role/i), { target: { value: "engineer" } });
    fireEvent.click(screen.getByRole("button", { name: /Continue/i }));

    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("checkbox"));
    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    expect(screen.getByText("Submission received")).toBeInTheDocument();
  });

  it("does not submit without the confirmation checkbox", () => {
    renderWithRouter(<MultiStepForm />);

    fillPersonal();
    fireEvent.click(screen.getByRole("button", { name: /Continue/i }));

    fireEvent.change(screen.getByLabelText(/Street/i), {
      target: { value: "12 Example Street" },
    });
    fireEvent.change(screen.getByLabelText(/City/i), {
      target: { value: "Hyderabad" },
    });
    fireEvent.change(screen.getByLabelText(/Postal code/i), {
      target: { value: "500081" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Continue/i }));

    fireEvent.change(screen.getByLabelText(/Role/i), { target: { value: "engineer" } });
    fireEvent.click(screen.getByRole("button", { name: /Continue/i }));

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.queryByText("Submission received")).not.toBeInTheDocument();
  });
});
