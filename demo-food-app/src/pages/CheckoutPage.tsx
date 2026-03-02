import { Button, Input, Modal } from "@headless-food/ui-library";
import * as React from "react";
import { useDemoTheme } from "../app/theme/ThemeProvider";

export const CheckoutPage = () => {
  const { theme } = useDemoTheme();
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const invalid = email.length > 0 && !email.includes("@");

  return (
    <section className={theme.app.panel}>
      <h2>Checkout</h2>
      <Input
        label="Email"
        placeholder="you@example.com"
        value={email}
        onValueChange={setEmail}
        invalid={invalid}
        errorMessage={invalid ? "Invalid email format" : undefined}
        className={theme.input.root}
        labelClassName={theme.input.label}
        inputClassName={theme.input.field}
        messageClassName={theme.input.message}
      />
      <Input
        label="Delivery Address"
        placeholder="Street, City"
        className={theme.input.root}
        labelClassName={theme.input.label}
        inputClassName={theme.input.field}
        messageClassName={theme.input.message}
      />
      <Button className={theme.button.primary} disabled={invalid} onClick={() => setOpen(true)}>
        Place Order
      </Button>

      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Confirm Order"
        overlayClassName={theme.modal.overlay}
        contentClassName={theme.modal.content}
        closeButtonClassName={theme.modal.close}
      >
        <p>Order total: $24.00</p>
        <Button className={theme.button.primary} onClick={() => setOpen(false)}>
          Confirm
        </Button>
      </Modal>
    </section>
  );
};
