import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Tabs } from "../src/components/Tabs";

describe("Tabs", () => {
  test("switches active panel on trigger click", () => {
    render(
      <Tabs defaultValue="overview">
        <Tabs.List aria-label="Sections">
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="details">Details</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="overview">Overview content</Tabs.Content>
        <Tabs.Content value="details">Details content</Tabs.Content>
      </Tabs>
    );

    fireEvent.click(screen.getByRole("tab", { name: "Details" }));
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Details content");
  });
});
