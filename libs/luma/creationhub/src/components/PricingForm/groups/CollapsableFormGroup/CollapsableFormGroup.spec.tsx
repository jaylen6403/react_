import { IconName } from '@fortawesome/fontawesome-svg-core';
import { render, screen, fireEvent } from '@testing-library/react';
import { CollapsableFormGroup } from './CollapsableFormGroup';

describe('CollapsableFormGroup', () => {
  const props = {
    title: 'title',
    icon: 'react' as IconName,
    isValid: true,
  };

  it('should render successfully', () => {
    const { baseElement } = render(<CollapsableFormGroup {...props} />);
    expect(baseElement).toBeInTheDocument();
  });

  it('should handle click on collapse icon', () => {
    render(<CollapsableFormGroup {...props} />);
    expect(
      screen.getByTestId(`childrenWrapper-${props.title}`)
    ).toBeInTheDocument();
    const collapseButton = screen.getByTestId(`button-collapse_${props.title}`);
    fireEvent.click(collapseButton);
    expect(
      screen.queryByTestId(`childrenWrapper-${props.title}`)
    ).not.toBeInTheDocument();
  });
});
