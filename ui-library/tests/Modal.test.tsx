import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Modal } from "../src/components/Modal";

describe("Modal", () => {
  test("renders accessible dialog when open", () => {
    render(
      <Modal open onOpenChange={() => undefined} title="Order Summary">
        <p>Body</p>
      </Modal>
    );

    expect(screen.getByRole("dialog", { name: "Order Summary" })).toBeInTheDocument();
  });

  test("closes on Escape key", () => {
    const onOpenChange = vi.fn();
    render(
      <Modal open onOpenChange={onOpenChange} title="Checkout">
        <button type="button">Focusable</button>
      </Modal>
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
