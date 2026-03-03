const fs=require("fs");
const path=require("path");
const html=fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

jest.dontMock("fs");

describe("All the tests should pass", function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML=html.toString();
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

    it('The <ul> tag should contain the classes flex, border-b, and list-none', function () {
        let ul = document.querySelector("ul");

        expect(ul).toBeTruthy();
        expect(ul.classList.contains("flex")).toBeTruthy();
        expect(ul.classList.contains("border-b")).toBeTruthy();
        expect(ul.classList.contains("list-none")).toBeTruthy();
    });

    it('The first <a> tag (Home) should have the active tab styling with border-blue-500 and text-blue-600', function () {
        const firstLink = document.querySelectorAll("a")[0];

        expect(firstLink).toBeTruthy();
        expect(firstLink.classList.contains("border-blue-500")).toBeTruthy();
        expect(firstLink.classList.contains("text-blue-600")).toBeTruthy();
        expect(firstLink.classList.contains("px-4")).toBeTruthy();
        expect(firstLink.classList.contains("py-2")).toBeTruthy();
        expect(firstLink.classList.contains("border-b-2")).toBeTruthy();
    });

    it('The other <a> tags should have border-transparent for inactive tab styling', function () {
        const links = document.querySelectorAll("a");

        expect(links[1].classList.contains("border-transparent")).toBeTruthy();
        expect(links[2].classList.contains("border-transparent")).toBeTruthy();
    });
});
