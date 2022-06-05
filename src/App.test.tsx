import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './layout/Home/Home';

describe('Given I am on the Home page', () => {
  test('Then, it should render the about section', () => {
    render(<Home />);
    const aboutSection = screen.getByText(/Front-End Developer/i);
    expect(aboutSection).toBeInTheDocument();
  });

  test('Then, it should render the skills section', () => {
    render(<Home />);
    const aboutSection = screen.getByText(/Skills and tech/i);
    expect(aboutSection).toBeInTheDocument();
  });

  test('Then, it should render the projects section', () => {
    render(<Home />);
    const aboutSection = screen.getByText(/projects/i);
    expect(aboutSection).toBeInTheDocument();
  });

  test('Then, it should render the contact section', () => {
    render(<Home />);
    const aboutSection = screen.getByText(/contact/i);
    expect(aboutSection).toBeInTheDocument();
  });
});
