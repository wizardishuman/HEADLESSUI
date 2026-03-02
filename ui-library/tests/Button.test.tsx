import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Button } from "../src/components/Button";

describe("Button", () => {
  test("sets disabled behavior and loading data attributes", () => {
    render(<Button loading>Save</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
    expect(button).toHaveAttribute("data-loading", "true");
    expect(button).toHaveAttribute("data-disabled", "true");
  });

  test("supports keyboard click on custom element", () => {
    const onClick = vi.fn();
    render(
      <Button as="div" onClick={onClick}>
        Press
      </Button>
    );

    const node = screen.getByRole("button");
    fireEvent.keyDown(node, { key: "Enter" });
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
