import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "../components/checkBox";


test('should render checkBox and lable',()=>{
  render(<Checkbox label={'myCheckBox'} checkedInitially={true}  />)
  const lableElement=screen.getByText('myCheckBox')
  const checkBoxElement=screen.getByTestId("checkbox")
  expect(lableElement).toBeInTheDocument()
  expect(checkBoxElement).toBeInTheDocument()
})
test('should be checked on click',()=>{
  render(<Checkbox label={'myCheckBox'} checkedInitially={false}  />)
  const checkBoxElement=screen.getByTestId("checkbox")
  fireEvent.click(checkBoxElement)
  expect(checkBoxElement).toBeChecked()
})
test('should be unchecked intially',()=>{
  render(<Checkbox label={'myCheckBox'}  />)
  const checkBoxElement=screen.getByTestId("checkbox")
  expect(checkBoxElement).not.toBeChecked()
})

test('should be unchecked onclick twice',()=>{
  render(<Checkbox label={'myCheckBox'}  />)
  const checkBoxElement=screen.getByTestId("checkbox")
  fireEvent.click(checkBoxElement)
  fireEvent.click(checkBoxElement)
  expect(checkBoxElement).not.toBeChecked()
})








// test("should checkbox available", () => {
//   render(<Checkbox label="Accept Terms and Conditions" />);
//   const checkBoxElement = screen.getByTestId("checkbox");
//   const lableElement = screen.getByText(/Accept Terms and Conditions/i);
//   expect(checkBoxElement).toBeInTheDocument();
//   expect(lableElement).toBeInTheDocument();
// });
// test("should be checked when user click on that", () => {
//   render(<Checkbox />);
//   const checkBoxElement = screen.getByTestId("checkbox");
//   fireEvent.click(checkBoxElement);
//   expect(checkBoxElement).toBeChecked();
// });
// test("should be checked when user click on twice", () => {
//   render(
//     <Checkbox label="Accept Terms and Conditions" checkedInitially={true} />
//   );
//   const checkBoxElement = screen.getByTestId("checkbox");
//   fireEvent.click(checkBoxElement);
//   fireEvent.click(checkBoxElement);
//   expect(checkBoxElement).toBeChecked();
// });
// test("should be checked intially ", () => {
//   render(
//     <Checkbox label="Accept Terms and Conditions" checkedInitially={true} />
//   );
//   const checkBoxElement = screen.getByTestId("checkbox");
//   expect(checkBoxElement).toBeChecked();
// });
