import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Toast } from "../src/components/Toast";

describe("Toast", () => {
  test("announces content in status region", () => {
    render(
      <Toast open>
        Order placed.
      </Toast>
    );

    expect(screen.getByRole("status")).toHaveTextContent("Order placed.");
  });

  test("closes through dismiss button", () => {
    const onOpenChange = vi.fn();
    render(
      <Toast open onOpenChange={onOpenChange}>
        Message
      </Toast>
    );

    fireEvent.click(screen.getByRole("button", { name: "Dismiss notification" }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
