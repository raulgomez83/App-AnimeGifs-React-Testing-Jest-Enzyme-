import { renderHook } from "@testing-library/react-hooks";
import "@testing-library/jest-dom";

const { useFetchGifs } = require("../../hooks/useFetchGifs")

describe('useFetchGifs testing', () => {

    test('should give back initial state', async() => {

       const {result,waitForNextUpdate}=renderHook(()=>useFetchGifs("Naruto"));
       const {data,loading} =result.current;
       await waitForNextUpdate();

       expect(data).toEqual([]);
       expect(loading).toBeTruthy(); // toEqual(true)
    });

    test('should return an images array and loading=false', async() => {
       const {result,waitForNextUpdate}=renderHook(()=>useFetchGifs("Naruto"));
       await waitForNextUpdate();

       const {data,loading} =result.current;

       expect(data.length).toBe(15);
       expect(loading).toBeFalsy();
    });
});
