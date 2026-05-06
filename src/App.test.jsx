import { describe, expect, it } from 'vitest';
import { App } from './App.jsx';

describe('App', () => {
  it('exports a project component', () => {
    expect(App).toBeTypeOf('function');
  });
});
