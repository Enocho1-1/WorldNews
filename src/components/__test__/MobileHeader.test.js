import { render, screen} from "@testing-library/react";
import { MobileHeader } from "../layout/MobileHeader";

describe("Test Mobile Header ", () => {
    test('renders mobile header', () => {
        render(<MobileHeader/>)
        const mobileHeader = screen.getByTestId("mobile-header")

        expect(mobileHeader).toBeTruthy()

    })
})