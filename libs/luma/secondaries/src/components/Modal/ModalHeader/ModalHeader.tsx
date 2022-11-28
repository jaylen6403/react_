import {
  ModalCloseButton,
  ModalCloseIcon,
  ModalHeaderActions,
  ModalSearchNameInput,
  ModalTitle,
  StyledModalHeader,
} from './ModalHeader.styles';
import {
  generateAriaDescriptors,
  ModalSeperatorColor,
  SearchNameDescriptor,
} from '../ModalHelpers';
import { ModalSubTitle } from '../Modal.styles';

interface Props {
  id: string;
  title: string;
  /**
   * rightSideTitle of Modal Header
   */
  secondaryTitle?: string;
  /**
   * function that closes modal
   */
  handleOnClose: () => void;
  /**
   * SearchNameDescriptor that if provided describes how to show Search Name Input
   */
  searchActionObj?: SearchNameDescriptor;
  /**
   * Specify the color of the Modal Header Divider
   *  buy: buyGreen
   *  red: sellRed
   *  none (default): greyFade
   */
  seperator?: ModalSeperatorColor;
}

export const ModalHeader = ({
  id,
  title,
  secondaryTitle,
  searchActionObj,
  handleOnClose,
  seperator = 'NONE',
}: Props) => {
  const titleId = generateAriaDescriptors(id).titleId;
  return (
    <StyledModalHeader seperatorColor={seperator}>
      <ModalTitle id={titleId}>{title}</ModalTitle>
      <ModalHeaderActions>
        {searchActionObj ? (
          <ModalSearchNameInput
            onChange={(e) => searchActionObj.setName(e.target.value)}
            // @todo: error handling? This is optional are there any validations required here?
            hasError={false}
            disabled={false}
            placeholder={`${searchActionObj.placeholder} name (optional)`}
            defaultValue={searchActionObj.name}
          />
        ) : null}
        {secondaryTitle ? (
          <ModalSubTitle>{secondaryTitle}</ModalSubTitle>
        ) : (
          <ModalCloseButton
            aria-label="close dialog"
            id={`${id}_close`}
            aria-describedby={titleId}
            type="button"
            onClick={handleOnClose}
          >
            <ModalCloseIcon iconCode="times" />
          </ModalCloseButton>
        )}
      </ModalHeaderActions>
    </StyledModalHeader>
  );
};
