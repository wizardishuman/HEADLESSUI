import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Dropdown } from "../src/components/Dropdown";

describe("Dropdown", () => {
  test("opens and selects menu item", () => {
    const onSelect = vi.fn();

    render(
      <Dropdown>
        <Dropdown.Trigger>Sort</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item onSelect={onSelect}>Top Rated</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );

    fireEvent.click(screen.getByRole("button", { name: "Sort" }));
    fireEvent.click(screen.getByRole("menuitem", { name: "Top Rated" }));
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  test("supports ArrowDown keyboard navigation", () => {
    render(
      <Dropdown defaultOpen>
        <Dropdown.Trigger>Menu</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>One</Dropdown.Item>
          <Dropdown.Item>Two</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );

    const menu = screen.getByRole("menu");
    fireEvent.keyDown(menu, { key: "ArrowDown" });
    expect(screen.getByRole("menuitem", { name: "Two" })).toHaveFocus();
  });
});
