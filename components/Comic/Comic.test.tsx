import Comic from "./index";
import { screen, render } from "@testing-library/react";

describe("Comic", () => {
  const comic = {
    pageNum: 7,
    alt: "test page",
    src: "",
    desc: "i like pie",
  };
  it("renders a comic page image", () => {
    render(<Comic comic={comic} />);
    const comicImage = screen.getByAltText(/comic/i);
    expect(comicImage).toBeInTheDocument();
  });
  it("renders a comic page number", () => {
    render(<Comic comic={comic} />);
    const pageNum = screen.getByTestId("pageNum");
    expect(pageNum).toBeInTheDocument();
  });
  it("renders a comic page description", () => {
    render(<Comic comic={comic} />);
    const comicDesc = screen.getByTestId("comicDesc");
    expect(comicDesc).toBeInTheDocument();
  });
});
