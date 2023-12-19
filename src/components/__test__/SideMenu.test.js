import { render,screen } from "@testing-library/react";
import { SideMenu } from "../layout/MobileHeader/components";
import { BrowserRouter } from "react-router-dom";

describe("Test Mobile Side Menu", () => {

    test("Render side menu correctly", () => {
        render(<SideMenu/>, {wrapper: BrowserRouter})
        const sideMenu = screen.getByTestId("side-menu")
        expect(sideMenu).toBeTruthy()
    })

    test("Render navagation option correctly", () => {
        render(<SideMenu/>, {wrapper: BrowserRouter})
        const navOptions = screen.getByTestId("nav-options")
        expect(navOptions).toBeInstanceOf(HTMLUListElement)
    })
})