import React from "react"
import { shallow} from "enzyme";
import { GifGrid } from "../../componentes/GifGrid"
import "@testing-library/jest-dom"
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs")


describe('Testing GifGrid component', () => {

    const category="Naruto";
    test('should component works', () => {

        useFetchGifs.mockReturnValue({
            data:[],
            loading:true,
        })
        const wrapper=shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();
    })
    test('should show items to charge image useFetchGifs', () => {
        const gifs=[{
            id:"123",
            url:"https://localhost/hueyd.jpg",
            title:"aonechuzri",
        }];
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false,
        })
        const wrapper=shallow(<GifGrid category={category} />)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("p").exists()).toBe(false);
        console.log(wrapper.find("GifGridItem"));
        console.log(gifs);
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length);//debería ser uno en vez
    })

})
