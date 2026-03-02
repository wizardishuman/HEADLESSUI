import { Button, Card, Dropdown } from "@headless-food/ui-library";
import * as React from "react";
import { Link } from "react-router-dom";
import { useDemoTheme } from "../app/theme/ThemeProvider";
import { restaurants } from "../data/restaurants";

type SortMode = "rating" | "eta";

export const HomePage = () => {
  const { theme } = useDemoTheme();
  const [sortMode, setSortMode] = React.useState<SortMode>("rating");

  const sortedRestaurants = React.useMemo(() => {
    if (sortMode === "rating") {
      return [...restaurants].sort((a, b) => b.rating - a.rating);
    }
    return [...restaurants].sort((a, b) => a.eta.localeCompare(b.eta));
  }, [sortMode]);

  return (
    <section className={theme.app.panel}>
      <h2>Home - Restaurant Listing</h2>
      <p>Browse restaurants and open details pages.</p>
      <Dropdown className={theme.dropdown.root}>
        <Dropdown.Trigger className={theme.dropdown.trigger}>Sort: {sortMode}</Dropdown.Trigger>
        <Dropdown.Menu className={theme.dropdown.menu}>
          <Dropdown.Item className={theme.dropdown.item} onSelect={() => setSortMode("rating")}>
            Top Rated
          </Dropdown.Item>
          <Dropdown.Item className={theme.dropdown.item} onSelect={() => setSortMode("eta")}>
            Fastest ETA
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div className="grid">
        {sortedRestaurants.map((restaurant) => (
          <Card key={restaurant.id} className={theme.card.root}>
            <Card.Header className={theme.card.header}>
              {restaurant.name} <span className={theme.badge}>{restaurant.rating.toFixed(1)}</span>
            </Card.Header>
            <Card.Body className={theme.card.body}>
              {restaurant.cuisine} · {restaurant.eta}
            </Card.Body>
            <Card.Footer className={theme.card.footer}>
              <Button as={Link} to={`/restaurant/${restaurant.id}`} className={theme.button.primary}>
                View Restaurant
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </section>
  );
};
