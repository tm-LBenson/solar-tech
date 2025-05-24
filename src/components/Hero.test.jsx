import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test } from "vitest";
import Hero from "./Hero";

test("renders title, subtitle, button", () => {
  render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>,
  );

  expect(
    screen.getByText("Harness the Sun for Your Workflow"),
  ).toBeInTheDocument();

  expect(
    screen.getByText(
      "SolarTech converts your idle browser tabs into renewable energy credits.",
    ),
  ).toBeInTheDocument();

  expect(
    screen.getByRole("button", { name: "Get Started" }),
  ).toBeInTheDocument();
});
