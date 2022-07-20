import {FilteredList} from "./App";
import {render} from "react-testing-library";
import React from "react";

describe("<FilteredList/>", () => {
    const starWarsChars = [
        {name: "Luke", side: "light"},
        {name: "Darth Vader", side: "dark"},
        {name: "Obi-wan Kenobi", side: "light"},
        {name: "Palpatine", side: "dark"}
    ];

    it("should filter and display dark side charactors", () => {
        const {getByTestId} = render(<FilteredList list={starWarsChars} defaultState={'dark'}/>)

        expect(getByTestId('side-switcher')).toBeInTheDocument()
    })
})