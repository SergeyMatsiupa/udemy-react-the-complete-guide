import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
    test("renders posts if request succeeds", async () => {
        render(<Async/>);
        const listitemElements = await screen.findAllByRole("listitem");
        expect(listitemElements).not.toHaveLength(0);
    });
});