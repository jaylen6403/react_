import { Rfq } from '@luma-fe-workspace/redux';

export type IssuerDocumentToRender = {
  documentId: string;
  filename: string;
  documentType: string;
  language: string;
  uploadTimestamp: string;
  downloadAction: {
    action: () => Promise<void>;
    filename: string;
  };
};

export function downloadDocument(content: Blob, filename: string) {
  const downloadLink = document.createElement('a');
  const url = window.URL || window.webkitURL;
  downloadLink.href = url.createObjectURL(content);
  downloadLink.target = '_blank';
  // current solution downloads document instantly
  // if it's expected to open file in new tab instead, remove the next line
  downloadLink.download = filename;
  downloadLink.click();
}

export function getDocuments(
  rfq: Rfq,
  api: any
): IssuerDocumentToRender[] | undefined {
  return rfq.documents?.map(
    ({ id: documentId, filename, documentType, language, uploadTimestamp }) => {
      const onFileClick = async () => {
        try {
          const result = await api
            .getDocument({
              documentId,
              rfqId: rfq.id,
            })
            .unwrap();
          downloadDocument(result, filename);
        } catch (error) {
          console.error(error);
        }
      };
      const uploadTimestampLabel = new Date(uploadTimestamp).toLocaleString();
      return {
        documentId,
        filename,
        documentType: documentType.label,
        language: language.label,
        uploadTimestamp: uploadTimestampLabel,
        downloadAction: { action: onFileClick, filename },
      };
    }
  );
}
