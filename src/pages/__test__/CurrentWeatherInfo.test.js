import { render,screen, waitFor } from "@testing-library/react";
import { CurrentWeatherInfo } from "../Weather/components";

describe("Test Current Weather Component", () => {
    test('renders current weather info', async () => {
        render(<CurrentWeatherInfo />)

        const weatherCondition = screen.getByTestId("weather-condition")
        const weatherDescription = screen.getByTestId("weather-descr")
        const Temperature = screen.getByTestId("temp")
        const RealFeelTemp = screen.getByTestId("real-feel")
        const Metrics = screen.getByTestId("metrics")

        await waitFor(() => {
            expect(weatherCondition.innerHTML).toBeTruthy()
            expect(weatherDescription.innerHTML).toBeTruthy()
            expect(Temperature.innerHTML).toBeTruthy()
            expect(RealFeelTemp.innerHTML).toBeTruthy()
            expect(Metrics.innerHTML).toBeTruthy()
        })
    })
})