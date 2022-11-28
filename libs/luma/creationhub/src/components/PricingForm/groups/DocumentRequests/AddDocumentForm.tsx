import { useState, useRef, ChangeEvent } from 'react';
import { DataItemProps, LumaIcon } from '@luma-fe-workspace/design-system';
import { EnumValue, ResponseError, Rfq } from '@luma-fe-workspace/redux';
import {
  HiddenFileInput,
  FileInput,
  AddDocumentSelect,
  SubmitDocumentButton,
  FileInputWrapper,
  SubmitWrapper,
} from './DocumentRequests.style';
import { AddDocumentFormWrapper } from './DocumentRequests.style';
import { usePricingAPI } from '../../usePricingAPI';
import { parseEnumToDropdownValue } from '../ConfigurableFormGroups/formElements/dropdown/DropdownUtils';

type AddDocumentFormProps = {
  rfq: Rfq;
  updateRfq: (rfq: Rfq) => void;
};

enum DocumentUploadErrorStatus {
  NO_ERROR = 'NO_ERROR',
  BAD_DOCUMENT_CONTENT = 'BAD_DOCUMENT_CONTENT',
  DOCUMENT_SIZE_INVALID = 'DOCUMENT_SIZE_INVALID',
  UNKNOWN_ERROR = 'INTERNAL_SERVER_ERROR',
}

export function AddDocumentForm({
  rfq: { version, id: rfqId, supportedDocumentTypes, supportedLanguages },
  updateRfq,
}: AddDocumentFormProps) {
  const api = usePricingAPI();
  const isAddDocumentsPending = api.isLoading.addDocument;

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [documentLanguage, setDocumentLanguage] = useState<DataItemProps>();
  const [documentType, setDocumentType] = useState<DataItemProps>();
  const [documentErrorStatus, setDocumentErrorStatus] =
    useState<DocumentUploadErrorStatus>(DocumentUploadErrorStatus.NO_ERROR);
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const onSelectClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const element = e.target as HTMLInputElement;
    if (element.files && element.files.length > 0) {
      setSelectedFile(element.files[0]);
    } else {
      setSelectedFile(null);
    }
    setDocumentErrorStatus(DocumentUploadErrorStatus.NO_ERROR);
    element.value = '';
  };

  const isDocumentError = [
    DocumentUploadErrorStatus.BAD_DOCUMENT_CONTENT,
    DocumentUploadErrorStatus.DOCUMENT_SIZE_INVALID,
    DocumentUploadErrorStatus.UNKNOWN_ERROR,
  ].includes(documentErrorStatus);

  let uploadDocumentText;
  switch (documentErrorStatus) {
    case DocumentUploadErrorStatus.NO_ERROR:
      uploadDocumentText =
        (selectedFile && selectedFile.name) || 'Upload document';
      break;
    case DocumentUploadErrorStatus.BAD_DOCUMENT_CONTENT:
      uploadDocumentText = 'Invalid file content/type: ' + selectedFile?.name;
      break;
    case DocumentUploadErrorStatus.DOCUMENT_SIZE_INVALID:
      uploadDocumentText = 'File too large: ' + selectedFile?.name;
      break;
    case DocumentUploadErrorStatus.UNKNOWN_ERROR:
      uploadDocumentText = 'Something went wrong. Please try again.';
      break;
  }

  const addDocument = async () => {
    if (
      isAddDocumentsPending ||
      !selectedFile ||
      !documentType ||
      !documentLanguage
    ) {
      return;
    }
    try {
      const documentFormData = new FormData();
      documentFormData.append('file', selectedFile, selectedFile.name);
      documentFormData.append('filename', selectedFile.name);
      documentFormData.append('documentType', documentType.value as string);
      documentFormData.append('language', documentLanguage.value as string);
      documentFormData.append('version', version);
      let updatedRfq;
      try {
        updatedRfq = await api
          .addDocument({
            rfqId,
            documentFormData,
          })
          .unwrap();
        updateRfq(updatedRfq);
        if (updatedRfq) {
          setSelectedFile(null);
        }
      } catch (err) {
        const errorCode = (err as ResponseError).data?.code;
        const errorStatus = Object.values(DocumentUploadErrorStatus).includes(
          errorCode as DocumentUploadErrorStatus
        )
          ? errorCode
          : DocumentUploadErrorStatus.UNKNOWN_ERROR;
        setDocumentErrorStatus(errorStatus as DocumentUploadErrorStatus);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const isFormFilled = !!(selectedFile && documentLanguage && documentType);
  const canSubmitDocument =
    isFormFilled &&
    !isAddDocumentsPending &&
    documentErrorStatus === DocumentUploadErrorStatus.NO_ERROR;

  const documentTypes = supportedDocumentTypes
    ? parseEnumToDropdownValue(supportedDocumentTypes as EnumValue[])
    : [];
  const languages = supportedLanguages
    ? parseEnumToDropdownValue(supportedLanguages as EnumValue[])
    : [];

  return (
    <AddDocumentFormWrapper>
      <FileInputWrapper>
        <FileInput
          onClick={onSelectClick}
          disabled={false}
          variant={isDocumentError ? 'document_error' : 'secondary'}
          size="large"
          data-testid="button-document_file"
        >
          <LumaIcon type="regular" iconCode="file-arrow-up" />
          {uploadDocumentText}
        </FileInput>
        <HiddenFileInput
          onChange={onFileChange}
          ref={hiddenFileInput}
          type="file"
          data-testid="input-document_file"
        />
      </FileInputWrapper>
      <SubmitWrapper>
        <AddDocumentSelect
          helperText="File Type"
          name="file-type-select"
          id="file-type-select"
          placeholder="Select"
          size="small"
          items={documentTypes}
          defaultSelectedItem={documentType}
          readOnly={false}
          onChange={(item) => {
            if (item) {
              setDocumentType(item);
            }
          }}
          data-testid="dropdown-document_type"
        ></AddDocumentSelect>
        <AddDocumentSelect
          helperText="File Language"
          name="file-language-select"
          id="file-language-select"
          placeholder="Select"
          size="small"
          items={languages}
          defaultSelectedItem={documentLanguage}
          readOnly={false}
          onChange={(item) => {
            if (item) {
              setDocumentLanguage(item);
            }
          }}
          data-testid="dropdown-document_language"
        ></AddDocumentSelect>
        <SubmitDocumentButton
          variant="secondary"
          size="small"
          onClick={addDocument}
          disabled={!canSubmitDocument}
          data-testid="button-document_submit"
        >
          {isAddDocumentsPending ? 'Submitting...' : 'Submit'}
        </SubmitDocumentButton>
      </SubmitWrapper>
    </AddDocumentFormWrapper>
  );
}
