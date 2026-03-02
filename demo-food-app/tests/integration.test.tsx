import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { App } from "../src/app/App";

describe("Demo integration", () => {
  test("navigates to docs page and renders live preview", async () => {
    window.history.pushState({}, "", "/");
    render(<App />);

    await userEvent.click(screen.getByRole("link", { name: "Docs" }));
    expect(screen.getByRole("heading", { name: "Button Docs" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Order Now" })).toBeInTheDocument();
  });

  test("opens dropdown and renders menu items on home", async () => {
    window.history.pushState({}, "", "/");
    render(<App />);

    await userEvent.click(screen.getByRole("button", { name: /Sort:/i }));
    expect(screen.getByRole("menuitem", { name: "Top Rated" })).toBeInTheDocument();
  });
});
