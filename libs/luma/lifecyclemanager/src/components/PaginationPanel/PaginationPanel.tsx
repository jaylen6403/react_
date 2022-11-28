import { LumaIcon } from '@luma-fe-workspace/design-system';
import { GetEventsByUsingPostApiResponse } from '@luma-fe-workspace/redux';
import {
  PaginationContainer,
  PaginationWrapper,
  Text,
  Button,
  PageContainer,
} from './PaginationPanel.styles';

interface PaginationPanelProps {
  pageNumber: number;
  pageSize: number;
  eventsResponse: GetEventsByUsingPostApiResponse | undefined;
  onButtonPrevious: () => void;
  onButtonNext: () => void;
}

export const PaginationPanel = ({
  pageNumber,
  pageSize,
  eventsResponse,
  onButtonPrevious,
  onButtonNext,
}: PaginationPanelProps) => {
  const firstElement =
    pageNumber === 0 ? pageNumber + 1 : pageNumber * pageSize + 1;
  const lastElement = eventsResponse
    ? firstElement + eventsResponse.numberOfElements - 1
    : 0;

  return (
    <PaginationWrapper>
      {eventsResponse && (
        <PaginationContainer>
          <Text>
            {firstElement}-{lastElement} of {eventsResponse.totalElements}
          </Text>
          <PageContainer>
            <div>
              Page {pageNumber + 1} of {eventsResponse.totalPages}
            </div>
            <Button onClick={onButtonPrevious} disabled={pageNumber === 0}>
              <LumaIcon iconCode="arrow-left-long" type="solid" />
            </Button>
            <Button
              onClick={onButtonNext}
              disabled={pageNumber === eventsResponse.totalPages - 1}
            >
              <LumaIcon iconCode="arrow-right-long" type="solid" />
            </Button>
          </PageContainer>
        </PaginationContainer>
      )}
    </PaginationWrapper>
  );
};
