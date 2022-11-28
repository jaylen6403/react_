import { render, screen } from '@testing-library/react';
import { RequestedDocument } from '@luma-fe-workspace/redux';
import { RequestedDocuments } from './RequestedDocuments';

describe('RequestedDocuments', () => {
  const documents: RequestedDocument[] = [
    {
      documentType: {
        id: 'factsheet',
        label: 'Fact Sheet',
      },
      language: {
        id: 'en',
        label: 'English',
      },
    },
    {
      documentType: {
        id: 'englishsheet',
        label: 'English Sheet',
      },
      language: {
        id: 'en',
        label: 'English',
      },
    },
    {
      documentType: {
        id: 'termsheet',
        label: 'Term Sheet',
      },
      language: {
        id: 'en',
        label: 'English',
      },
    },
    {
      documentType: {
        id: 'termsheet',
        label: 'Term Sheet',
      },
      language: {
        id: 'de',
        label: 'German',
      },
    },
    {
      documentType: {
        id: 'germansheet',
        label: 'German Sheet',
      },
      language: {
        id: 'de',
        label: 'German',
      },
    },
    {
      documentType: {
        id: 'factsheet',
        label: 'Fact Sheet',
      },
      language: {
        id: 'it',
        label: 'Italian',
      },
    },
  ];

  it('should render correctly', () => {
    const { baseElement } = render(<RequestedDocuments documents={[]} />);
    expect(baseElement).toBeInTheDocument();
  });

  it('should render with data', () => {
    const { baseElement } = render(
      <RequestedDocuments documents={documents} />
    );
    expect(
      screen.getByText('English: Fact Sheet, English Sheet, Term Sheet')
    ).toBeInTheDocument();
    expect(
      screen.getByText('German: Term Sheet, German Sheet')
    ).toBeInTheDocument();
    expect(screen.getByText('Italian: Fact Sheet')).toBeInTheDocument();
    expect(baseElement).toBeInTheDocument();
  });
});
