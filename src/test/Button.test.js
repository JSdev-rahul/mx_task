import { fireEvent, render, screen } from "@testing-library/react";
import ButtonComponent from "../components/button";

// test("should button component render with given ppros", () => {
//   render(<ButtonComponent bgColor="red" text="myButton" />);
//   const isButton = screen.getByText("myButton");
//   expect(isButton).toBeInTheDocument();
// });

test('should button component render',()=>{
  render(<ButtonComponent bgColor={'red'} text={'myButton'} />)
  const buttonElement=screen.getByTestId("button");
  expect(buttonElement).toBeInTheDocument()
})
test('should bg color red',()=>{
  render(<ButtonComponent bgColor={'red'} text={'myButton'} />)
  const buttonElement=screen.getByTestId('button')
  expect(buttonElement).toHaveClass('bg-red-500')
})
// test('should handleChage mock on click',()=>{
//   console.log=jest.fn()
//   render(<ButtonComponent bgColor={'red'} text={'myButton'} />)
//   const buttonElement=screen.getByTestId('button')
//   fireEvent.click(buttonElement)
//   expect(console.log).toHaveBeenCalledWith('handleChange running')
// })

test('should run handleChange ',()=>{
  const handleChange=jest.fn()
  render(<ButtonComponent bgColor={'red'} text={'myButton'} handleChange={handleChange}/>)
  const buttonElement=screen.getByTestId('button')
  fireEvent.click(buttonElement)
  expect(handleChange).toHaveBeenCalledTimes(1)
})