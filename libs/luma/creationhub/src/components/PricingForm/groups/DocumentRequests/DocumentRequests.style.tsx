import styled from 'styled-components';
import {
  LumaButton,
  LumaColor,
  LumaSingleDropDown,
} from '@luma-fe-workspace/design-system';

export const DocumentRequestsWrapper = styled.div``;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const OpenDocumentButton = styled(LumaButton)`
  width: 15%;
  display: inline-flex;
  button {
    font-size: 1rem;
    border: none;
  }
`;

export const FileInput = styled(LumaButton)`
  width: 100%;
  margin-bottom: 1rem;
  button {
    border: 1px dashed;
  }
`;

export const AddDocumentFormWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

export const AddDocumentSelect = styled(LumaSingleDropDown)`
  width: 31%;
`;

export const SubmitDocumentButton = styled(LumaButton)`
  width: 31%;
`;

export const SubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FileInputWrapper = styled.div``;

export const DocumentValidationRulesWrapper = styled.p`
  display: inline-block;
  color: ${LumaColor.NEUTRAL_60};
  font-size: 0.6875rem;
  &:not(:first-of-type) {
    margin-left: 0.75rem;
  }
`;
