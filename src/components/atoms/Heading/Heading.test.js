import React from 'react';
import { render } from 'utils/test-utils';
import theme from 'styles/theme';
import 'jest-styled-components';
import '__mocks__/intersectionObserver';
import Heading from './Heading';

const renderHeading = props => {
  const utils = render(<Heading {...props} />);

  const heading = utils.getByRole('heading');
  return { ...utils, heading };
};

describe('<Heading />', () => {
  it('renders as h1 element', () => {
    const headingProps = {
      isH1: true,
      children: 'Home page',
    };

    const { heading } = renderHeading(headingProps);

    expect(heading.tagName).toBe('H1');
    expect(heading).toHaveTextContent(headingProps.children);
    expect(heading).toHaveStyleRule('font-size', theme.font.size.heading.xs);
  });

  it('renders as h2 element', () => {
    const { heading } = renderHeading({
      children: 'Projects',
    });

    expect(heading.tagName).toBe('H2');
  });
});
