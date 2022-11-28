import { useMemo } from 'react';
import { RequestedDocument } from '@luma-fe-workspace/redux';
import { RequestedDocumentsRow } from './RequestedDocuments.style';

type RequestedDocumentsProps = {
  documents: RequestedDocument[] | undefined;
};

export function RequestedDocuments({ documents }: RequestedDocumentsProps) {
  const groupedRequestedDocuments = useMemo(() => {
    const groupedData: { [k: string]: string[] } = {};
    documents?.forEach((el) => {
      const lang = el.language?.label;
      const doc = el.documentType?.label;
      if (!groupedData[lang]) {
        groupedData[lang] = [];
      }
      groupedData[lang].push(doc);
    });
    return groupedData;
  }, [documents]);

  return (
    <>
      {Object.entries(groupedRequestedDocuments).map(([key, value]) => {
        return (
          <RequestedDocumentsRow key={key}>{`${key}: ${value.join(
            ', '
          )}`}</RequestedDocumentsRow>
        );
      })}
    </>
  );
}
