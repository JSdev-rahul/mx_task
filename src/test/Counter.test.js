import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../components/counter";

// Helper function to render the Counter component and get common elements

test("should render count with inc dec button", () => {
  render(<Counter />);
  const countElement = screen.getByText(/Counter: 0/i);
  const incButtonElement = screen.getByText("Increment");
  const decButtonElement = screen.getByText("Decrement");
  expect(incButtonElement).toBeInTheDocument();
  expect(countElement).toBeInTheDocument();
  expect(decButtonElement).toBeInTheDocument();
});
test("should count be incriment on click of incriment buton", () => {
  render(<Counter />);
  const incButtonElement = screen.getByText("Increment");
  fireEvent.click(incButtonElement);
  const countElement = screen.getByText(/Counter: 1/i);
  expect(countElement).toBeInTheDocument();
});
test('should count decriment on decriment button click',()=>{
  render(<Counter />);
  const decButtonElement = screen.getByText("Decrement");
  fireEvent.click(decButtonElement)
  const countElement=screen.getByText(/Counter: -1/i)
  expect(countElement).toBeInTheDocument()
})


// const renderCounter = () => {
//   render(<Counter />);
//   const headingElement = screen.getByText(/Counter:/i);
//   const incrementButtonElement = screen.getByText("Increment");
//   const decrementButtonElement = screen.getByText("Decrement");
//   return { headingElement, incrementButtonElement, decrementButtonElement };
// };

// test("should render component with button and initial count value", () => {
//   const { headingElement, incrementButtonElement, decrementButtonElement } = renderCounter();
//   expect(headingElement).toBeInTheDocument();
//   expect(incrementButtonElement).toBeInTheDocument();
//   expect(decrementButtonElement).toBeInTheDocument();
// });

// test("should increment the counter when increment button is clicked", () => {
//   const { incrementButtonElement } = renderCounter();
//   fireEvent.click(incrementButtonElement);
//   const headingElement = screen.getByText(/Counter: 1/i);
//   expect(headingElement).toBeInTheDocument();
// });

// test("should decrement the counter when decrement button is clicked", () => {
//   const { decrementButtonElement } = renderCounter();
//   // Increment first to ensure the counter is not initially negative
//   fireEvent.click(screen.getByText("Increment"));
//   fireEvent.click(decrementButtonElement);
//   const headingElement = screen.getByText(/Counter: 0/i);
//   expect(headingElement).toBeInTheDocument();
// });
