import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test } from "vitest";
import NavBar from "./NavBar";

test("renders logo and two nav link", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>,
  );

  expect(screen.getByText("SolarTech")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /home/i })).toHaveAttribute("href", "/")
  expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute(
    "href",
    "/about",
  );

});
