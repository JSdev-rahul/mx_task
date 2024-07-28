import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InputBox from "../components/input";

// render input box with heading

// test("should render input box with heading", () => {
//   render(<InputBox />);
//   const headingElement = screen.getByText("Name:");
//   const inputElement = screen.getByPlaceholderText("Enter Your Name");
//   expect(headingElement).toBeInTheDocument();
//   expect(inputElement).toBeInTheDocument();
// });

// test("should update the state with user input", () => {
//   render(<InputBox />);
//   const inputElement = screen.getByPlaceholderText("Enter Your Name");
//   expect(inputElement).toBeInTheDocument();
//   fireEvent.change(inputElement, { target: { value: "123" } });
//   expect(inputElement.value).toBe("123");
// });

test("should render input field with lable", () => {
  render(<InputBox />);
  const headingElement = screen.getByText("Name:");
  const inputElement = screen.getByPlaceholderText("Enter Your Name");
  expect(headingElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});
test('should change state by user input test',()=>{
  render(<InputBox />);
  const inputElement = screen.getByPlaceholderText("Enter Your Name");
  fireEvent.change(inputElement,{target:{value:"123"}})
  expect(inputElement.value).toBe('123')
})