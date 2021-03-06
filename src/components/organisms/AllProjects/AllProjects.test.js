import React from 'react';
import { render } from 'utils/test-utils';
import * as Gatsby from 'gatsby';
import '__mocks__/intersectionObserver';
import AllProjects from './AllProjects';

beforeEach(() => {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

  useStaticQuery.mockImplementation(() => ({
    projects: {
      edges: [
        {
          node: {
            id: 0,
            title: 'fake blog post 0',
            slug: 'fake-slug-0',
            image: {
              fluid: {
                aspectRatio: 0,
                sizes: '',
                src: '',
                srcSet: '',
              },
            },
          },
        },
        {
          node: {
            id: 1,
            title: 'fake blog post 1',
            slug: 'fake-slug-1',
            image: {
              fluid: {
                aspectRatio: 0,
                sizes: '',
                src: '',
                srcSet: '',
              },
            },
          },
        },
      ],
    },
  }));
});

describe('<AllProjects />', () => {
  it('has proper heading and cards components inside', () => {
    const { getByRole, getAllByRole } = render(<AllProjects />);

    const pageHeading = getByRole('heading', { level: 1 });

    const cards = getAllByRole('article');

    expect(pageHeading).toBeInTheDocument();
    expect(cards).toHaveLength(2);
  });
});
