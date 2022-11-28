import { render, screen, fireEvent } from '@testing-library/react';
import { ValueTypes } from '../../../../../../../../../redux/src';
import MultiDropdownWrapper from './MultiDropdownWrapper';

describe('MultiDropdownWrapper', () => {
  const onChangeMock = jest.fn();
  const onBlurMock = jest.fn();
  const paramNameMock = 'testParamName';
  const valueMock = {
    type: ValueTypes.Enum,
    label: 'testLabel',
    id: 'testId',
  };
  const initialValues = {
    values: [valueMock],
    type: ValueTypes.MultiEnum,
  };
  const constraintsMock = {
    [paramNameMock]: {
      type: ValueTypes.Enum,
      availableValues: [
        valueMock,
        {
          type: ValueTypes.Enum,
          label: 'testLabel2',
          id: 'testId2',
        },
      ],
    },
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render properly', () => {
    const { baseElement } = render(
      <MultiDropdownWrapper
        paramName={paramNameMock}
        id="testId"
        value={initialValues}
        isDisabled={false}
        onChange={onChangeMock}
        onBlur={onBlurMock}
        constraints={constraintsMock}
      />
    );
    expect(baseElement).toBeInTheDocument();
  });

  it('should render properly disabled', () => {
    render(
      <MultiDropdownWrapper
        paramName={paramNameMock}
        id="testId"
        value={initialValues}
        isDisabled={true}
        onChange={onChangeMock}
        onBlur={onBlurMock}
        constraints={undefined}
      />
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveProperty('disabled', true);
  });

  it('should trigger change callback', () => {
    render(
      <MultiDropdownWrapper
        paramName={paramNameMock}
        id="testId"
        value={initialValues}
        isDisabled={false}
        onChange={onChangeMock}
        onBlur={onBlurMock}
        readOnly={false}
        constraints={constraintsMock}
      />
    );
    const input = screen.getByRole('textbox');
    fireEvent.click(input);
    const listAfterClick = screen.getAllByRole('option');
    fireEvent.click(listAfterClick[1]);
    expect(onChangeMock).toBeCalledTimes(2);
    expect(onChangeMock.mock.calls[1][0].values).toHaveLength(2);
  });
});
