const { getGifs } = require("../helpers")

describe('Test with getGifs Fetch', () => {

    test('should be bring 15 elements', async() => {
        const gifs= await getGifs("Naruto")
        expect(gifs.length).toBe(15)
    })
    
    
})
