import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

jest.mock('next/router', () => require('next-router-mock'));


describe('Home page', () => {

    it('renders a heading', () => {
        render(<Home name="Adrian Ceja" />);

        const heading = screen.getByRole('heading', {
            name: "Adrian Ceja",
        });

        expect(heading).toBeInTheDocument();
    });
});