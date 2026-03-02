import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Card } from "../src/components/Card";

describe("Card", () => {
  test("renders slot composition", () => {
    render(
      <Card>
        <Card.Header>Header</Card.Header>
        <Card.Body>Body</Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  test("interactive card handles keyboard enter", () => {
    const onPress = vi.fn();
    render(
      <Card interactive onPress={onPress}>
        <Card.Body>Content</Card.Body>
      </Card>
    );

    const interactive = screen.getByRole("button");
    fireEvent.keyDown(interactive, { key: "Enter" });
    expect(onPress).toHaveBeenCalledTimes(1);
    expect(interactive).toHaveAttribute("data-active", "true");
  });
});
