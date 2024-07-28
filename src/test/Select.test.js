import { fireEvent, render, screen } from "@testing-library/react";
import Select from "../components/Select";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

test("should be render heading and select box", () => {
  render(<Select options={options} placeholder="select" />);
  const headingElement = screen.getByText("Select");
  expect(headingElement).toBeInTheDocument();
  const selectElement = screen.getByTestId("select");
  expect(selectElement).toBeInTheDocument();
});

test("show options when click on select", () => {
  render(<Select options={options} placeholder="select" />);
  const selectElement = screen.getByTestId("select");
  fireEvent.click(selectElement);
  options.forEach((option) => {
    expect(screen.getByText(option.label)).toBeInTheDocument();
  });
});

test("show selected option", () => {
  render(<Select options={options} placeholder="select" />);
  const selectElement = screen.getByTestId("select");
  fireEvent.change(selectElement, { target: { value: "option2" } });
  expect(screen.getByText(/Selected: option2/i)).toBeInTheDocument();
});
