import { Button, Card, Tabs, Toast } from "@headless-food/ui-library";
import * as React from "react";
import { useParams } from "react-router-dom";
import { useDemoTheme } from "../app/theme/ThemeProvider";
import { restaurants } from "../data/restaurants";

export const RestaurantPage = () => {
  const { id = "" } = useParams();
  const { theme } = useDemoTheme();
  const [toastOpen, setToastOpen] = React.useState(false);
  const restaurant = restaurants.find((item) => item.id === id) ?? restaurants[0];

  return (
    <section className={theme.app.panel}>
      <h2>Restaurant Details</h2>
      <Card className={theme.card.root}>
        <Card.Header className={theme.card.header}>{restaurant.name}</Card.Header>
        <Card.Body className={theme.card.body}>{restaurant.description}</Card.Body>
        <Card.Footer className={theme.card.footer}>
          <Button className={theme.button.primary} onClick={() => setToastOpen(true)}>
            Add Signature Bowl
          </Button>
        </Card.Footer>
      </Card>

      <Tabs defaultValue="menu">
        <Tabs.List className={theme.tabs.list} aria-label="Restaurant tabs">
          <Tabs.Trigger value="menu" className={theme.tabs.trigger}>
            Menu
          </Tabs.Trigger>
          <Tabs.Trigger value="reviews" className={theme.tabs.trigger}>
            Reviews
          </Tabs.Trigger>
          <Tabs.Trigger value="info" className={theme.tabs.trigger}>
            Info
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="menu" className={theme.tabs.content}>
          Paneer Tikka Bowl · Veg Ramen · Tofu Wrap
        </Tabs.Content>
        <Tabs.Content value="reviews" className={theme.tabs.content}>
          "Fast delivery and hot food." - 4.8 average
        </Tabs.Content>
        <Tabs.Content value="info" className={theme.tabs.content}>
          {restaurant.cuisine} · {restaurant.eta}
        </Tabs.Content>
      </Tabs>

      <Toast
        open={toastOpen}
        onOpenChange={setToastOpen}
        className={theme.toast.container}
        closeButtonClassName={theme.toast.close}
      >
        Item added to cart.
      </Toast>
    </section>
  );
};
