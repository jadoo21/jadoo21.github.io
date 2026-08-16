import { MemoryRouter, type MemoryRouterProps } from "react-router-dom";
import { render } from "@testing-library/react";
import type { ReactElement } from "react";

interface RenderOptions {
  route?: string;
  routerProps?: Omit<MemoryRouterProps, "initialEntries">;
}

export function renderWithRouter(ui: ReactElement, options: RenderOptions = {}) {
  return render(
    <MemoryRouter initialEntries={[options.route ?? "/"]} {...options.routerProps}>
      {ui}
    </MemoryRouter>,
  );
}
