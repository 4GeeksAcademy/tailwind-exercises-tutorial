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
        let tailwindScript = document.querySelector("head").innerHTML.toString().indexOf(`<script src="https://cdn.tailwindcss.com"></script>`)

        expect(meta1).not.toBe(-1)
        expect(meta2).not.toBe(-1)
        expect(title).toBeTruthy();
        expect(tailwindScript>-1).toBeTruthy();
    })

    it("You should not use the <style> tag", function (){
        let style = document.querySelector('style')
        expect(style).toBe(null)
    })

    it("Do not use any inline styles, only use Tailwind classes for styling", function () {
        expect(html.toString().match(/style(\s*)=(\s*)["']/)).toBeFalsy();
    });

    it('You should not change the first row', function () {
        let divContent=document.querySelectorAll(".flex")[0].innerHTML
        
        expect(divContent.toString().indexOf(`<div class="w-1/2">First col</div>`)>-1).toBeTruthy();
        expect(divContent.toString().indexOf(`<div class="w-1/2">Second col</div>`)>-1).toBeTruthy();
    });

    it('The second row should contain 3 columns of the same width', function () {
        let secondRow = document.querySelectorAll(".flex")[1]
        expect(secondRow.childElementCount).toBe(3)

        let cols = secondRow.querySelectorAll("div")
        expect(cols[0].classList.contains("w-1/3")).toBeTruthy();
        expect(cols[1].classList.contains("w-1/3")).toBeTruthy();
        expect(cols[2].classList.contains("w-1/3")).toBeTruthy();
    });

    it('You should create a third row with one column of full width and a red background', function () {
        let thirdRow = document.querySelectorAll(".flex")[2]
        expect(thirdRow).toBeTruthy();

        let div = thirdRow.querySelector("div");
        expect(div).toBeTruthy();
        expect(div.classList.contains("w-full")).toBeTruthy();
        expect(div.classList.contains("bg-red-500")).toBeTruthy();
        expect(div.innerHTML.toString()).toBeTruthy();
    });
    
    it('The main <div> tag should have the class w-full', function () {
        let div = document.querySelector("body").querySelector("div");
        expect(div).toBeTruthy();
        expect(div.classList.contains("w-full")).toBeTruthy();
    });

});
