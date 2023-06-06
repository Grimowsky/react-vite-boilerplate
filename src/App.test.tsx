import { App } from './App';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

//TODO: remove this test  after forking repo
describe('App basic test', () => {
  it('Should render greetings', () => {
    render(<App />);
    expect(screen.getByText('hello there')).toBeDefined();
  });
});
