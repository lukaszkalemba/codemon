import React from 'react';
import { render } from 'utils/test-utils';
import user from '@testing-library/user-event';
import theme from 'utils/theme';
import 'jest-styled-components';
import Button from './Button';

describe('<Button />', () => {
  it('renders correctly primary button', () => {
    const fakeContent = 'button content';
    const fakeProps = {
      path: '/test-path',
      priority: 'primary',
      onClick: jest.fn(),
    };

    const { getByRole, getByTestId } = render(
      <Button {...fakeProps}>{fakeContent}</Button>
    );

    const button = getByRole('button');
    const buttonLink = getByTestId('button-link');

    expect(button.textContent).toBe(fakeContent);

    user.click(button);

    expect(fakeProps.onClick).toHaveBeenCalledTimes(1);
    expect(button).toHaveStyleRule('color', theme.color.dark);
    expect(button).toHaveStyleRule('background-color', theme.color.white);
    expect(buttonLink.getAttribute('href')).toBe(fakeProps.path);
  });

  it('renders correctly secondary submit button', () => {
    const fakeProps = {
      type: 'submit',
      priority: 'secondary',
    };

    const { getByRole, queryByTestId } = render(
      <Button {...fakeProps}>button content</Button>
    );

    const button = getByRole('button');
    const buttonLink = queryByTestId('button-link');

    expect(button).toHaveStyleRule('color', theme.color.white);
    expect(button).toHaveStyleRule('background-color', theme.color.transparent);
    expect(buttonLink).not.toBeInTheDocument();
  });
});
