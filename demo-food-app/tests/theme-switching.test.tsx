import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { App } from "../src/app/App";

describe("Theme switching", () => {
  test("toggles between light and dark themes", async () => {
    window.history.pushState({}, "", "/");
    render(<App />);

    const toggle = screen.getByRole("button", { name: /Switch Theme/i });
    expect(toggle).toHaveTextContent("light-food");

    await userEvent.click(toggle);

    expect(screen.getByRole("button", { name: /Switch Theme/i })).toHaveTextContent("dark-neon");
    expect(screen.getByRole("status")).toHaveTextContent("Theme switched successfully.");
  });
});
