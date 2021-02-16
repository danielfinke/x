import { render } from '@testing-library/react';
import StyledApp from 'components/pages/StyledApp';
import Index from 'pages/index';

type ExtraRenderParams = Parameters<typeof render>;
/**
 * Wrap testing library `render` to always render the app using the default styling
 *
 * @param param0 arguments normally provided to `render`
 * @returns normal `render` return value
 */
const renderStyled = (...[children, ...args]: ExtraRenderParams) =>
  render(<StyledApp>{children}</StyledApp>, ...args);

test('renders index page', () => {
  const { getByText } = renderStyled(<Index />);

  expect(getByText('Hello, world!')).toBeInTheDocument();
});
