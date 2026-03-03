const fs=require("fs");
const path=require("path");
const html=fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

jest.dontMock("fs");

describe("All the tests should pass", function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML=html.toString();

        //apply the styles from the stylesheet if needed

    });
    afterEach(() => {
        jest.resetModules();
    });
    it("You should not change or delete the existing elements in the <head> tag", function () {
        let meta1 = document.querySelector('head').innerHTML.toString().indexOf("<meta c")
        let meta2 = document.querySelector('head').innerHTML.toString().indexOf("<meta n")        
        let title = document.querySelector('head').querySelector("title")

        expect(meta1).not.toBe(-1)
        expect(meta2).not.toBe(-1)
        expect(title).toBeTruthy();
    })

    it("You should not use the <style> tag", function (){
        let style = document.querySelector('style')
        expect(style).toBe(null)
    })
});
describe('1. All the rules in the instructions should be applied', function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML=html.toString();
    });
    afterEach(() => {jest.resetModules();});

    it('The <head> tag should contain the Tailwind CDN <script> tag', function () {
        let head = document.querySelector("head").innerHTML
        expect(head.toString().indexOf(`<script src="https://cdn.tailwindcss.com"></script>`)>-1).toBeTruthy();
    });
    
    it('The body should contain a <div> tag with the class w-full and bg-gray-500', function () {
        let div = document.querySelector("div")
        expect(div).toBeTruthy();
        expect(div.classList.contains("w-full")).toBeTruthy();
        expect(div.classList.contains("bg-gray-500")).toBeTruthy();
    });

    it('The <div> tag should wrap the existing <h1> and <p> tags', function () {
        let h1 = document.querySelector("div").querySelector("h1")
        let p = document.querySelector("div").querySelector("p")
        expect(h1).toBeTruthy();
        expect(p).toBeTruthy();
    });

    it('The <h1> should contain the same innerHTML', function(){
        let h1 = document.querySelector("div").querySelector("h1").innerHTML
        expect(h1).toBe("This is my first example using Tailwind CSS")
    })

    it('The <p> should contain the same innerHTML', function(){
        let p = document.querySelector("div").querySelector("p").innerHTML
        expect(p).toBe("I can't believe that Tailwind is so easy, now HTML and CSS are a simple but very useful technology.")
    })
});
