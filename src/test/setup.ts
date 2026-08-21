import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

class IntersectionObserverStub implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin = "0px";
  readonly thresholds: ReadonlyArray<number> = [];
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

globalThis.IntersectionObserver =
  IntersectionObserverStub as unknown as typeof IntersectionObserver;

class ResizeObserverStub implements ResizeObserver {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}

globalThis.ResizeObserver = ResizeObserverStub as unknown as typeof ResizeObserver;

// Mock window.scrollTo for testing
Object.defineProperty(window, "scrollTo", {
  writable: true,
  value: () => {},
});

if (typeof window.matchMedia !== "function") {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList;
}

afterEach(() => {
  cleanup();
  document.documentElement.classList.remove("dark");
  window.localStorage.clear();
});
