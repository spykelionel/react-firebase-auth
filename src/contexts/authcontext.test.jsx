import { AuthContext } from "./AuthContext";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { expect } from "vitest";
import Home from "../pages/Home";

describe("App Component", () => {
  it("Should render app", async (_) => {
    render(<App />);
  });
});

describe("Home page", () => {
//   it("Should render home page", async (_) => {
//     render(<App />);
//     const ele = screen.getByText("Dashboard");
//     expect(ele).toBeInTheDocument();
//   });

  it('redirects if authenticated', async () => {
    render(<Home />);
  
    expect(window.location.pathname).toBe('/dashboard'); 
  })
});
 