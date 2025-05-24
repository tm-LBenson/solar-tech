import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test } from "vitest";
import Pricing from "./Pricing";

test("Shows correct prices", () => {
  render(
    <MemoryRouter>
      <Pricing />
    </MemoryRouter>,
  );

  expect(screen.getByText("$0")).toBeInTheDocument();
  expect(screen.getByText("$12")).toBeInTheDocument();
  expect(screen.getByText("$49")).toBeInTheDocument();
});
