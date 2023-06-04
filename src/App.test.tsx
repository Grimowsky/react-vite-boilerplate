import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

//TODO: remove this test  after forking repo
describe('App basic test', () => {
  it('Should render greetings', () => {
    render(<App />);
    expect(screen.getByText('hello there')).toBeDefined();
  });
});
