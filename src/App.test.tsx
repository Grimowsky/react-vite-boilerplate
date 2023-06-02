import {render, screen} from "@testing-library/react";
import App from './App'
import {describe, it} from "vitest";

//TODO: remove this test  after forking repo
describe('App basic test', () => {
    it('Should render greetings', () => {
        const {debug} = render(<App/>)
       debug()
    })
})