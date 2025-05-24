import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("Shows home route by default (/)", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByText(/harness the sun/i)).toBeInTheDocument();
});


test("navigates to About route", () => {
  render(
    <MemoryRouter initialEntries={["/about"]}>
      <App />
    </MemoryRouter>,
  );

  expect(screen.getByText(/about me!/i)).toBeInTheDocument();
});
