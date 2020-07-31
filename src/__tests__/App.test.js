import React from "react"
import App from "../App"
import { create } from "react-test-renderer"

describe("My first snapshot text", () => {
    test("testing app", () => {
        let tree = create(<App />)
        expect(tree.toJSON()).toMatchSnapshot()
    })
})