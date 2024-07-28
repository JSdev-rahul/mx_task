import { render, screen, waitFor } from "@testing-library/react"
import PostsComponent from "../components/PostsComponent"
import axios from "axios"
import "@testing-library/jest-dom/extend-expect";

jest.mock("axios");

test('render loading message intially',()=>{
    render(<PostsComponent  />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
})
test('should render posts list',async()=>{
    const mockPosts={
        data: [
            {
              id: 1,
              title: 'Post 1',
              body: 'Body of Post 1',
            },
            {
              id: 2,
              title: 'Post 2',
              body: 'Body of Post 2',
            },
          ],
    }
    axios.get.mockResolvedValueOnce(mockPosts);
    render(<PostsComponent  />)
     await waitFor(()=>expect(screen.getByText('Post 1')).toBeInTheDocument());
     expect(screen.getByText('Body of Post 1')).toBeInTheDocument()
     expect(screen.getByText('Post 2')).toBeInTheDocument()
     expect(screen.getByText('Body of Post 2')).toBeInTheDocument()
})
test('render error message when api failed',async()=>{
    axios.get.mockRejectedValueOnce(new Error("Failed to fetch"));
    render(<PostsComponent />)
   await waitFor(()=> expect(screen.getByText("Error: Failed to fetch")).toBeInTheDocument())
    
})
test('show meesage when no posts are avaikable',async()=>{
    const mockPosts={
        data:{}
    }
    axios.get.mockResolvedValueOnce(mockPosts);
    render(<PostsComponent />)
    await waitFor(()=>expect(screen.getByText('No posts available')).toBeInTheDocument())
})
test('should be called api at once only',async()=>{
 
      render(<PostsComponent />)
      await waitFor(()=>expect(axios.get).toHaveBeenCalledTimes(1))
})