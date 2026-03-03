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

    it("The main <div> should contain a <div> with class flex", function () {
        let flex = document.querySelector(".w-full").querySelector("div");
        expect(flex).toBeTruthy();
        expect(flex.classList.contains("flex")).toBeTruthy();
    });

    it("The flex row should contain 2 columns with w-1/6 and w-5/6", function () {
        let row = document.querySelector(".w-full").querySelector(".flex");
        expect(row).toBeTruthy();

        let colLeft = row.querySelector(".w-1\\/6");
        let colRight = row.querySelector(".w-5\\/6");
        expect(colLeft).toBeTruthy();
        expect(colRight).toBeTruthy();
    });

    it("The left column should contain a <ul> with class flex and flex-col", function () {
        let ul = document.querySelector(".w-1\\/6").querySelector("ul");

        expect(ul).toBeTruthy();
        expect(ul.classList.contains("flex")).toBeTruthy();
        expect(ul.classList.contains("flex-col")).toBeTruthy();
    });

    it("The background color of the second column should be light gray", function () {
        let rightCol = document.querySelector(".w-5\\/6");
        expect(rightCol.classList.contains("bg-gray-100")).toBeTruthy();
    });

    it("The second column should contain an <h4>, a <p> and a <button>", function () {
        let rightCol = document.querySelector(".w-5\\/6");
        expect(rightCol).toBeTruthy();

        let h4 = rightCol.querySelector("h4");
        let p = rightCol.querySelector("p");
        let button = rightCol.querySelector("button");

        expect(h4).toBeTruthy();
        expect(p).toBeTruthy();
        expect(button).toBeTruthy();
    });

    it("The <button> in the second column should be blue", function () {
        let button = document.querySelector(".w-5\\/6").querySelector("button");

        expect(button).toBeTruthy();
        expect(button.classList.contains("bg-blue-600")).toBeTruthy();
        expect(button.classList.contains("text-white")).toBeTruthy();
    });
});
