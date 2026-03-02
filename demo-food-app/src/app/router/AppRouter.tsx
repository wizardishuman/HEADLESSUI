import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DocsLayout } from "../../components/docs/DocsLayout";
import { AppLayout } from "../../components/layout/AppLayout";
import { ButtonDocsPage } from "../../pages/ButtonDocsPage";
import { CardDocsPage } from "../../pages/CardDocsPage";
import { CartPage } from "../../pages/CartPage";
import { CheckoutPage } from "../../pages/CheckoutPage";
import { ComponentsPage } from "../../pages/ComponentsPage";
import { DropdownDocsPage } from "../../pages/DropdownDocsPage";
import { HomePage } from "../../pages/HomePage";
import { InputDocsPage } from "../../pages/InputDocsPage";
import { ModalDocsPage } from "../../pages/ModalDocsPage";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { ProfilePage } from "../../pages/ProfilePage";
import { RestaurantPage } from "../../pages/RestaurantPage";
import { TabsDocsPage } from "../../pages/TabsDocsPage";
import { ToastDocsPage } from "../../pages/ToastDocsPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurant/:id" element={<RestaurantPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/docs" element={<DocsLayout />}>
            <Route index element={<Navigate to="button" replace />} />
            <Route path="button" element={<ButtonDocsPage />} />
            <Route path="card" element={<CardDocsPage />} />
            <Route path="input" element={<InputDocsPage />} />
            <Route path="modal" element={<ModalDocsPage />} />
            <Route path="dropdown" element={<DropdownDocsPage />} />
            <Route path="tabs" element={<TabsDocsPage />} />
            <Route path="toast" element={<ToastDocsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
