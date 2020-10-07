
import React from "react";
import "@testing-library/jest-dom"
const { shallow } = require("enzyme")
const { AddCategory } = require("../../componentes/AddCategory")

describe('AddCategory test', () => {

    const setCategories=jest.fn();// en vez de ()=>{};
    let wrapper=shallow(<AddCategory setCategories={setCategories} />);
    beforeEach(()=>{
       jest.clearAllMocks();
       wrapper=shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should show right', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should change textbox', () => {
        const input=wrapper.find("input");
        const value="Holi"

        input.simulate("change",{target:{value}});
    })

    test('should not post information to submit', () => {
        wrapper.find("form").simulate("submit",{preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('should call setCategories and clear textbox', () => {
        const value="Holi"
        wrapper.find("input").simulate("change",{target:{value}});;//Simula inputChange
        wrapper.find("form").simulate("submit",{preventDefault(){}});//Simula el submit
        expect(setCategories).toHaveBeenCalled();  //Llamada al setCategories
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find("input").prop("value")).toBe("")})//el valor de input debe ser un string vacio
    
})
