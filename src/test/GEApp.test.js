import React from "react"
import { GEApp } from "../GEApp";
import "@testing-library/jest-dom";

const { shallow } = require("enzyme");

describe('Testing GEApp', () => {

    test('should works', () => {
        const wrapper= shallow(<GEApp />);
        expect(wrapper).toMatchSnapshot();
    })
     test('should show categories list', () => {
        const categories=["Naruto","Boku no Hero"];
        const wrapper=shallow(<GEApp defaultCategories={categories} />)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifGrid").length).toBe(categories.length);
    })
})
