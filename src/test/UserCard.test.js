import { render, screen } from "@testing-library/react"
import UserCard from "../components/UserCard"

test('render card with props',()=>{
    render(<UserCard title={'myCard'} image={"xyz.png"} description={"des"}  />)
    const imageElement=screen.getByAltText('myCard')
    expect(imageElement).toBeInTheDocument()
})