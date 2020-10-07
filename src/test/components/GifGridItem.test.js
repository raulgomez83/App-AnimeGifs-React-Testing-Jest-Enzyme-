import React from "react"
import { shallow} from "enzyme";
const { GifGridItem } = require("../../componentes/GifGridItem")

describe('Test in GifGridItem', () => {
    const title="jbbhbibb";
    const url="http://debudye/ded.jpg"
    const wrapper=shallow(<GifGridItem title={title} url={url} />)


    test('should  component works', () => {

        
        expect (wrapper).toMatchSnapshot()
    })

    /* test('should have a p', () => {
        const p= wrapper.find("p");
        expect(p.text().trim()).toBe(title)
    }) */

    test('should be a image=url&alt ', () => {
        const img=wrapper.find("img");
      /*  console.log(img.html());  console.log(img.props());*/
      expect(img.prop("src")).toBe(url);
      expect(img.prop("alt")).toBe(title);


    })
    test('should have animate__fadeIn', () => {
        const div=wrapper.find("div");
        const className=div.prop("className")
        expect(className.includes("animate__fadeIn")).toBe(true)
        
    })
    
    
    
})
