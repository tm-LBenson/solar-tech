import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test } from "vitest";
import Content from "./Content";

test("Renders the about me", () => {
  render(
    <MemoryRouter>
      <Content />
    </MemoryRouter>,
  );
  expect(screen.getByText(/about me!/i)).toBeInTheDocument();
});
