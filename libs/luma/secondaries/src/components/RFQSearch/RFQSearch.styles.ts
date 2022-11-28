import styled from 'styled-components';
import { colors, Input } from '@luma-fe-workspace/design-system';

export const RFQActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 1.75rem;
  width: 100%;
  padding: 0 0.25rem;
  margin-bottom: 0.75rem;
  white-space: nowrap;
  overflow: visible;
  text-overflow: ellipsis;
  font-family: IBM Plex Sans;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0rem;
`;

export const RFQSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: ${colors.white};
`;

export const RFQActionBarSection = styled.div`
  display: flex;
`;

export const ResultsText = styled.div`
  color: ${colors.greyMedium};
  display: flex;
  align-items: center;
  width: 5rem;
`;

export const FilterCusip = styled(Input)`
  margin-right: 0.875rem;
`;

export const DefaultText = styled.div`
  color: ${colors.greyMedium};
`;
