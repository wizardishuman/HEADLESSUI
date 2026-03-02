export type DemoThemeContract = {
  app: {
    shell: string;
    nav: string;
    navLink: string;
    content: string;
    heading: string;
    panel: string;
  };
  button: {
    primary: string;
    secondary: string;
    ghost: string;
  };
  card: {
    root: string;
    header: string;
    body: string;
    footer: string;
  };
  input: {
    root: string;
    label: string;
    field: string;
    message: string;
  };
  modal: {
    overlay: string;
    content: string;
    close: string;
  };
  dropdown: {
    root: string;
    trigger: string;
    menu: string;
    item: string;
  };
  tabs: {
    list: string;
    trigger: string;
    content: string;
  };
  toast: {
    container: string;
    close: string;
  };
  badge: string;
};

export const demoThemes = {
  "light-food": {
    app: {
      shell: "theme-light app-shell",
      nav: "nav light",
      navLink: "nav-link light",
      content: "content light",
      heading: "heading light",
      panel: "panel light"
    },
    button: {
      primary: "btn base btn-light-primary",
      secondary: "btn base btn-light-secondary",
      ghost: "btn base btn-light-ghost"
    },
    card: {
      root: "card card-light",
      header: "card-header",
      body: "card-body",
      footer: "card-footer"
    },
    input: {
      root: "input-root",
      label: "input-label",
      field: "input-field input-field-light",
      message: "input-message"
    },
    modal: {
      overlay: "modal-overlay",
      content: "modal-content modal-light",
      close: "btn base btn-light-secondary"
    },
    dropdown: {
      root: "dropdown-root",
      trigger: "btn base btn-light-ghost",
      menu: "dropdown-menu dropdown-light",
      item: "dropdown-item"
    },
    tabs: {
      list: "tabs-list",
      trigger: "tabs-trigger tabs-trigger-light",
      content: "tabs-content"
    },
    toast: {
      container: "toast toast-light",
      close: "btn base btn-light-ghost"
    },
    badge: "badge badge-light"
  },
  "dark-neon": {
    app: {
      shell: "theme-dark app-shell",
      nav: "nav dark",
      navLink: "nav-link dark",
      content: "content dark",
      heading: "heading dark",
      panel: "panel dark"
    },
    button: {
      primary: "btn base btn-dark-primary",
      secondary: "btn base btn-dark-secondary",
      ghost: "btn base btn-dark-ghost"
    },
    card: {
      root: "card card-dark",
      header: "card-header",
      body: "card-body",
      footer: "card-footer"
    },
    input: {
      root: "input-root",
      label: "input-label",
      field: "input-field input-field-dark",
      message: "input-message"
    },
    modal: {
      overlay: "modal-overlay",
      content: "modal-content modal-dark",
      close: "btn base btn-dark-secondary"
    },
    dropdown: {
      root: "dropdown-root",
      trigger: "btn base btn-dark-ghost",
      menu: "dropdown-menu dropdown-dark",
      item: "dropdown-item"
    },
    tabs: {
      list: "tabs-list",
      trigger: "tabs-trigger tabs-trigger-dark",
      content: "tabs-content"
    },
    toast: {
      container: "toast toast-dark",
      close: "btn base btn-dark-ghost"
    },
    badge: "badge badge-dark"
  }
} satisfies Record<string, DemoThemeContract>;

export type DemoThemeName = keyof typeof demoThemes;
