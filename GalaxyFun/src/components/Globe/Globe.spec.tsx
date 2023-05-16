import { render } from '@testing-library/react';

import Globe from './Globe';

describe('Globe', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Globe />);
    expect(baseElement).toBeTruthy();
  });
});
