import { render } from '@testing-library/react';

import Satellite from './Satellite';

describe('Satellite', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Satellite />);
    expect(baseElement).toBeTruthy();
  });
});
