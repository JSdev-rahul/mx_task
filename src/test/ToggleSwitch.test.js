import { fireEvent, render, screen } from "@testing-library/react"
import ToggleSwitch from "../components/ToggleSwitch"

test('should render lable and toggle switch button',()=>{ 
    render(<ToggleSwitch label={'mylable'} />)
    const headingElement=screen.getByText('mylable')
    const toggleButtonoElement=screen.getByTestId('toggle-switch')
    expect(headingElement).toBeInTheDocument()
    expect(toggleButtonoElement).toBeInTheDocument()
})

test('should be checked when user click on that',()=>{
    render(<ToggleSwitch  initialState={false} />)
    const toggleButtonoElement=screen.getByTestId('toggle-switch')
    fireEvent.click(toggleButtonoElement)
    expect(toggleButtonoElement).toHaveClass('bg-green-500')
})