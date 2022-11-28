import { useState } from 'react';
import debounce from 'lodash.debounce';
import { UnderlierDetails } from '@luma-fe-workspace/redux';
import {
  LumaStatus,
  LumaTextSearch,
  RenderContent,
} from '@luma-fe-workspace/design-system';
import { usePricingAPI } from '../../../../usePricingAPI';

type BasketSelectProps = {
  id: string;
  onUnderlierSelect: (underlier: UnderlierDetails) => void;
  isEditable: boolean;
};

export function BasketSelect({
  id,
  onUnderlierSelect,
  isEditable,
}: BasketSelectProps) {
  const api = usePricingAPI();
  const [underliers, setUnderliers] = useState<UnderlierDetails[]>([]);

  const onSelect = (underlier: UnderlierDetails | null | undefined) => {
    if (underlier != null) {
      onUnderlierSelect(underlier);
    }
  };

  const onChange = (value: string | null | undefined) => {
    if (value != null) {
      try {
        getUnderliers(value);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const getUnderliers = async (searchText: string) => {
    const underliers = await api
      .getMatchingUnderliers({
        searchText,
      })
      .unwrap();
    setUnderliers(underliers);
  };

  const errorTemplate = api.isLoading.underliers ? (
    <LumaStatus variant="progress" ariaLabel="progressStatus" />
  ) : (
    <LumaStatus variant="failed" ariaLabel="failStatus" />
  );

  return (
    <LumaTextSearch
      id={id}
      placeholder="Search Underliers"
      items={underliers}
      itemToString={(option) => {
        if (option && 'label' in option && option.label) {
          return option.label;
        }
        return '';
      }}
      renderContent={<RenderContent />}
      inputAriaLabel="Search underliers"
      buttonAriaLabel="Clear field"
      variant="underlier"
      sizeVariant="large"
      disabled={!isEditable}
      handleSelectItem={onSelect}
      handleChange={debounce(onChange, 500)}
      errorTemplate={errorTemplate}
      data-testid={`field-${id}`}
    />
  );
}
