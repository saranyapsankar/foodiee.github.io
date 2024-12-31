import ContactUs from "../ContactUs";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

test("should load ContactUs component", ()=>{
    render(<ContactUs/>);
    //screen.logTestingPlaygroundURL()
   const headerText =  screen.getByRole('heading', {
        name: /name: eatgo/i
      });
   expect(headerText).not.toBe(undefined)
})
test("should load ContactUs header", ()=>{
    render(<ContactUs/>);
    //screen.logTestingPlaygroundURL()
   const headerText =  screen.getByRole('heading', {
        name: /name: eatgo/i
      });
   expect(headerText).toBeInTheDocument()
})