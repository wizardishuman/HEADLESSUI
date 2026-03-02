import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Input } from "../src/components/Input";

describe("Input", () => {
  test("connects label and invalid accessibility state", () => {
    render(<Input label="Email" invalid errorMessage="Required" />);

    const input = screen.getByLabelText("Email");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute("data-invalid", "true");
  });

  test("emits value updates", () => {
    let latest = "";
    render(<Input label="Name" onValueChange={(next) => (latest = next)} />);

    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Saurabh" } });
    expect(latest).toBe("Saurabh");
  });
});
