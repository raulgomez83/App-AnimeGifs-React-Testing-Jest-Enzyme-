import { renderHook } from "@testing-library/react-hooks";
import "@testing-library/jest-dom";

const { useFetchGifs } = require("../../hooks/useFetchGifs")

describe('useFetchGifs testing', () => {

    test('should give back initial state', () => {

       const {result}=renderHook(()=>useFetchGifs("Naruto"));
       const {data,loading} =result.current;

       expect(data).toEqual([]);
       expect(loading).toBeTruthy(); // toEqual(true)
    });
});
