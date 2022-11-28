import styled from 'styled-components';
import {
  LumaColor,
  LumaIcon,
  LumaFont,
} from '@luma-fe-workspace/design-system';
import { CloneLabel, PricingFormVariants } from '../../../PricingFormUtils';

interface RequestTabsProps {
  requestTabs: string[];
  activeTab: string;
  onTabClick: (tabId: string) => void;
  formVariant: PricingFormVariants;
  closeTab: (tabId: string) => void;
}

export const RequestTabWrapper = styled.div`
  margin-top: 0.625rem;
  display: flex;
  overflow-x: auto;
`;

export const CloseTabButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const RequestTab = styled.span`
  display: flex;
  gap: 0.5rem;
  padding: 0.625rem 0.75rem;
  border: 1px solid ${LumaColor.NEUTRAL_40};
  border-radius: 0.625rem;
  margin: 0.625rem 0.625rem 0 0;
  background-color: transparent;
  color: ${LumaColor.NEUTRAL_60};
  align-items: center;
  font-size: 1rem;
  font-family: ${LumaFont.DEFAULT.BOLD};
  white-space: nowrap;
`;

export const RequestTabActive = styled(RequestTab)`
  background-color: ${LumaColor.NEUTRAL_40};
  color: ${LumaColor.NEUTRAL_80};
`;

export function RequestTabs({
  requestTabs,
  activeTab,
  onTabClick,
  formVariant,
  closeTab,
}: RequestTabsProps) {
  const getRequestTabLabel = () => {
    if (formVariant === PricingFormVariants.PRICING) {
      return 'Pricing';
    } else if (formVariant === PricingFormVariants.RFQ) {
      return 'RFQ';
    }
    return 'Request ID';
  };

  const getShortTabId = (tabId: string) => {
    let shortTabId = tabId.split('-')[0];
    if (tabId.includes(CloneLabel)) {
      shortTabId += tabId.split('-').at(-1);
    }
    return shortTabId;
  };

  const canCloseTabs = requestTabs.length > 1;

  return (
    <RequestTabWrapper>
      {requestTabs.map((tabId) => {
        const isActive = tabId === activeTab;
        const tabLabel = `${getRequestTabLabel()}: (${getShortTabId(tabId)})`;
        const tabContent = (
          <>
            <LumaIcon
              iconCode="refresh"
              type="solid"
              style={{ fontSize: '0.875rem' }}
            />
            {tabLabel}
            {canCloseTabs && (
              <CloseTabButton
                type="button"
                onClick={(e) => {
                  closeTab(tabId);
                  e.stopPropagation();
                }}
              >
                <LumaIcon
                  iconCode="close"
                  type="solid"
                  style={{ fontSize: '0.875rem' }}
                />
              </CloseTabButton>
            )}
          </>
        );
        return isActive ? (
          <RequestTabActive key={tabId} data-testid={`tab-${tabId}`}>
            {tabContent}
          </RequestTabActive>
        ) : (
          <RequestTab
            key={tabId}
            data-testid={`tab-${tabId}`}
            onClick={() => {
              onTabClick(tabId);
            }}
          >
            {tabContent}
          </RequestTab>
        );
      })}
    </RequestTabWrapper>
  );
}
