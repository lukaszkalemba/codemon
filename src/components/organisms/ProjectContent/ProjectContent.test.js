import React from 'react';
import { render } from 'utils/test-utils';
import ProjectContent from './ProjectContent';

describe('<ProjectContent />', () => {
  it('renders properly with images and matches snapshot', () => {
    const props = {
      mainViewImage: { aspectRatio: 0, sizes: '', src: '', srcSet: '' },
      secondViewImage: null,
      thirdViewImage: null,
    };

    const { container } = render(<ProjectContent {...props} />);

    expect(container).toMatchSnapshot();
  });
});
