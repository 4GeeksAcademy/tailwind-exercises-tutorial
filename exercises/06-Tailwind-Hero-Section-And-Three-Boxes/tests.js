const fs=require("fs");
const path=require("path");
const html=fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

jest.dontMock("fs");

describe("All the tests should pass", function () {
    beforeEach(() => {
        document.documentElement.innerHTML=html.toString();
    });
    afterEach(() => {
        jest.resetModules();
    });

    it("You should not change or delete the existing elements in the <head> tag", function () {
        let meta1 = document.querySelector("head").innerHTML.toString().indexOf("<meta c");
        let meta2 = document.querySelector("head").innerHTML.toString().indexOf("<meta n");
        let title = document.querySelector("head").querySelector("title");
        let tailwindScript = document.querySelector("head").innerHTML.toString().indexOf(`<script src="https://cdn.tailwindcss.com"></script>`);

        expect(meta1).not.toBe(-1);
        expect(meta2).not.toBe(-1);
        expect(title).toBeTruthy();
        expect(tailwindScript > -1).toBeTruthy();
    });

    it("You should not use the <style> tag", function () {
        let style = document.querySelector("style");
        expect(style).toBe(null);
    });

    it("Do not use any inline styles, only use Tailwind classes for styling", function () {
        expect(html.toString().match(/style(\s*)=(\s*)["']/)).toBeFalsy();
    });

    it("The body should contain a <div> tag with the class w-full", function () {
        let div = document.querySelector("div");
        expect(div).toBeTruthy();
        expect(div.classList.contains("w-full")).toBeTruthy();
    });

    it("The first element of the first section should be an <h1> tag", function () {
        let main = document.querySelector(".w-full");
        expect(main).toBeTruthy();

        let firstSection = main.querySelector("div");
        expect(firstSection).toBeTruthy();

        let h1 = firstSection.querySelector("h1");
        expect(h1).toBeTruthy();
    });

    it("The second element of the first section should be a <p> tag", function () {
        let firstSection = document.querySelector(".w-full").querySelector("div");
        let p = firstSection.querySelector("p");
        expect(p).toBeTruthy();
    });

    it("The third element of the first section should be a <button> tag with a blue button class", function () {
        let firstSection = document.querySelector(".w-full").querySelector("div");
        let button = firstSection.querySelector("button");
        expect(button).toBeTruthy();
        expect(button.classList.contains("bg-blue-600")).toBeTruthy();
    });

    it("The second section should contain 3 columns of the same width", function () {
        let secondSection = document.querySelectorAll(".w-full > div")[1];
        expect(secondSection).toBeTruthy();
        expect(secondSection.classList.contains("flex")).toBeTruthy();

        let cols = secondSection.querySelectorAll("div");
        expect(cols[0].classList.contains("w-1/3") || cols[0].classList.contains("w-1\\/3")).toBeTruthy();
        expect(cols[1].classList.contains("w-1/3") || cols[1].classList.contains("w-1\\/3")).toBeTruthy();
        expect(cols[2].classList.contains("w-1/3") || cols[2].classList.contains("w-1\\/3")).toBeTruthy();
    });

    it("The 3 columns should contain an <h2>, a <p> and a <button>", function () {
        let secondSection = document.querySelectorAll(".w-full > div")[1];
        let cols = secondSection.querySelectorAll("div");
        for (let i = 0; i < 3; i++) {
            let h2 = cols[i].querySelector("h2");
            let p = cols[i].querySelector("p");
            let button = cols[i].querySelector("button");
            expect(h2).toBeTruthy();
            expect(p).toBeTruthy();
            expect(button).toBeTruthy();
        }
    });
});
