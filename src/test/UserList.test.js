// src/UserComponent.test.js
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserComponent from "../components/UserList";
import axios from "axios";

jest.mock("axios");

test("renders loading state initially", () => {
  render(<UserComponent />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});
test("should render api data", async () => {
  const mockUser = {
    data: {
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031",
    },
  };

  axios.get.mockResolvedValueOnce(mockUser);
  render(<UserComponent />);
  await waitFor(() =>
    expect(screen.getByText("Leanne Graham")).toBeInTheDocument()
  );
  expect(screen.getByText("Sincere@april.biz")).toBeInTheDocument();
  expect(screen.getByText("1-770-736-8031")).toBeInTheDocument();
});
test("render error message in the case of api failed ", async () => {
  axios.get.mockRejectedValueOnce(new Error("Failed to fetch"));
  render(<UserComponent />);
  await waitFor(() =>
    expect(screen.getByText("Error: Failed to fetch")).toBeInTheDocument()
  );
});
test("show empty message", async () => {
  const mockUser = {};
  axios.get.mockResolvedValueOnce(mockUser);
  render(<UserComponent />);
  await waitFor(() =>
    expect(screen.getByText("No user data available")).toBeInTheDocument()
  );
});
test('called api at once only',async()=>{
  const mockUser = {
    data: {
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031',
    },
  };

  axios.get.mockResolvedValueOnce(mockUser);
  render(<UserComponent />)
  await waitFor(()=>expect(axios.get).toHaveBeenCalledTimes(1))
})