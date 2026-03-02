import { Button, Card, Input } from "@headless-food/ui-library";
import { Link } from "react-router-dom";
import { useDemoTheme } from "../app/theme/ThemeProvider";

export const CartPage = () => {
  const { theme } = useDemoTheme();

  return (
    <section className={theme.app.panel}>
      <h2>Cart</h2>
      <Card className={theme.card.root}>
        <Card.Header className={theme.card.header}>Your Items</Card.Header>
        <Card.Body className={theme.card.body}>1x Signature Bowl · 1x Citrus Soda</Card.Body>
        <Card.Footer className={theme.card.footer}>Subtotal: $24.00</Card.Footer>
      </Card>

      <Input
        label="Promo Code"
        placeholder="FOOD10"
        className={theme.input.root}
        labelClassName={theme.input.label}
        inputClassName={theme.input.field}
        messageClassName={theme.input.message}
      />

      <Button as={Link} to="/checkout" className={theme.button.primary}>
        Proceed to Checkout
      </Button>
    </section>
  );
};
