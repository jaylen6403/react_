import ReactDOM from 'react-dom';
import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import produce from 'immer';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, FormikErrors, FormikProps } from 'formik';
import isEqual from 'lodash/isEqual';
import { LumaButton, LumaModal } from '@luma-fe-workspace/design-system';
import { Spinner } from '@luma-fe-workspace/luma/dashboard';
import {
  IssuerId,
  LocalDateValue,
  IssuerPricing,
  ParamName,
  ParamValue,
  Pricing,
  PricingId,
  PricingInCreation,
  PricingInProgress,
  PricingState,
  ResponseError,
  Rfq,
  RfqId,
  RfqIssuerAction,
  RfqTypeEnum,
  UpdatePricingUsingPostApiArg,
  UpdateRFQUsingPostApiArg,
  ValidationError,
  selectPermissions,
  useAppSelector,
} from '@luma-fe-workspace/redux';
import {
  ConfigurableFormGroups,
  PricingFormFooter,
  QuotingInCreation,
  QuotingInProgress,
  RequestTabs,
} from './groups';
import {
  BottomRightGroup,
  ButtonsGroup,
  CH2Form,
  Footer,
  FormGroupWrapper,
  FormLeftPanel,
  FormRightPanel,
  FormsRow,
  PricingFormWrapper,
  RequestTabsRow,
  UpperRightGroup,
} from './PricingForm.styles';
import {
  CloneLabel,
  getDisplayedFormVariant,
  getFormSubmissionBody,
  getFormValidationBody,
  initialPricing,
  isPricingEmpty,
  Pending,
  PricingFormVariants,
  PricingModes,
  RequestFormValuesType,
} from './PricingFormUtils';
import RFQ from './groups/RFQ/RFQ';
import { canCreatePricing, CreationHubPages, Permissions } from '../HomePage';
import { usePricingAPI } from './usePricingAPI';
import useInterval from '../../hooks/useInterval';
import { formatTypeLabel } from './groups/Quoting/QuotingUtils';
import { DocumentRequests } from './groups/DocumentRequests';

export interface PricingFormProps {
  values: RequestFormValuesType;
  errors: FormikErrors<RequestFormValuesType>;
  handleChange: (e: ChangeEvent) => void;
  handleBlur: (e: FocusEvent) => void;
  handleValidation: (values: RequestFormValuesType) => void;
  setFieldValue: (
    paramName: ParamName,
    value: ParamValue,
    shouldValidate?: boolean
  ) => void;
  isEditable: boolean;
}

export function PricingForm({
  formVariant,
}: {
  formVariant: PricingFormVariants;
}) {
  const permissions = useAppSelector(selectPermissions) as Permissions[];
  const notFoundUrl = '/not-found';

  const { id } = useParams();
  const navigate = useNavigate();

  const [pricingMode, setPricingMode] = useState(PricingModes.Pricing);
  const [cloneCount, setCloneCount] = useState(0);

  const initialPricingId = (
    formVariant === PricingFormVariants.NEW_PRICING ? Pending : id
  ) as PricingId;
  const [pricingId, setPricingId] = useState(initialPricingId);
  const [pricings, setPricings] = useState({
    [initialPricingId]: initialPricing as Pricing,
  } as Record<PricingId, Pricing | Rfq>);
  const [selectedIssuers, setSelectedIssuers] = useState({
    [initialPricingId]: [],
  } as Record<string, IssuerId[]>);
  const [rfqType, setRfqType] = useState<RfqTypeEnum>(RfqTypeEnum.INDICATIVE);

  const formikRef = useRef<FormikProps<RequestFormValuesType>>(null);
  const api = usePricingAPI();
  const errorMessages = {
    '409':
      'It looks like there was a conflict with the server. Refreshing the view...',
    '404': 'Page not found',
  };
  const [errorCode, setErrorCode] = useState<keyof typeof errorMessages | ''>(
    ''
  );
  const [disableSubmitButtons, setDisableSubmitButtons] =
    useState<boolean>(false);

  const displayedPricing = pricings[pricingId];
  const isInitialLoading =
    isPricingEmpty(displayedPricing) &&
    (api.isLoading.initialState ||
      api.isLoading.pricing ||
      api.isLoading.issuerPricing);
  const isFormRequestPending = api.isLoading.changes || api.isLoading.createRfq;
  const displayedFormVariant = getDisplayedFormVariant({
    formVariant,
    displayedPricing,
  });

  const isFormEditable =
    displayedFormVariant === PricingFormVariants.NEW_PRICING &&
    !isFormRequestPending;
  const memoizedGetFormValues = useCallback(() => {
    if (displayedPricing === undefined) {
      return {};
    }
    return (displayedPricing as Pricing | Rfq).product.params;
  }, [displayedPricing]);

  const handleRequestError = (error: ResponseError) => {
    switch (error.status) {
      case 409: {
        setErrorCode('409');
        break;
      }
      default:
        console.error(error);
    }
  };

  useEffect(() => {
    if (
      !canCreatePricing(permissions) &&
      formVariant === PricingFormVariants.NEW_PRICING
    ) {
      navigate(notFoundUrl);
    }
  }, [permissions]);

  const handleRequestDetailsError = (error: ResponseError) => {
    const statuses = [403, 404];
    if (statuses.includes(error.status)) {
      navigate(notFoundUrl);
    }
  };

  function getModifiedParams(newValues: RequestFormValuesType) {
    const oldPricingParams = displayedPricing.product.params;
    const changedParams: ParamName[] = [];
    Object.entries(newValues).forEach(([key, value]) => {
      if (!isEqual(value, oldPricingParams[key])) {
        changedParams.push(key);
      }
    });
    return changedParams;
  }

  function updateCurrentPricing(newPricing: Pricing | Rfq | undefined) {
    if (newPricing) {
      setPricings({ ...pricings, [pricingId]: newPricing });
    }
  }

  const isValidation =
    displayedPricing.state === PricingState.InCreation &&
    displayedPricing.productValidationErrors !== null;

  const handleSubmitButtonsDisableInCreation = () => {
    if (displayedFormVariant === PricingFormVariants.NEW_PRICING) {
      const areIssuersChosen = selectedIssuers[pricingId].length !== 0;
      const validationFailed =
        !areIssuersChosen ||
        (isValidation &&
          Object.keys(displayedPricing.productValidationErrors!).length !== 0);
      setDisableSubmitButtons(validationFailed);
    }
  };

  useEffect(() => {
    if (isValidation) {
      setValidationErrors(displayedPricing.productValidationErrors!);
      handleSubmitButtonsDisableInCreation();
    }
  }, [displayedPricing]);

  useEffect(() => {
    handleSubmitButtonsDisableInCreation();
  }, [selectedIssuers]);

  useEffect(() => {
    async function getInitialRequest() {
      let initialRequest: Pricing | IssuerPricing | undefined = undefined;
      try {
        if (formVariant === PricingFormVariants.NEW_PRICING) {
          initialRequest = await api.getInitialState({}).unwrap();
        } else if (formVariant === PricingFormVariants.PRICING) {
          initialRequest = await api
            .getExistingPricing({
              pricingId: id as PricingId,
            })
            .unwrap();
        } else if (formVariant === PricingFormVariants.RFQ) {
          initialRequest = await api
            .getIssuerPricing({ pricingId: id as PricingId })
            .unwrap();
        }
        if (initialRequest !== undefined) {
          // batching updates will be automatic from React 18
          // remove this wrapper when upgrading version
          ReactDOM.unstable_batchedUpdates(() => {
            setPricings({
              [initialPricingId]: initialRequest as Pricing | Rfq,
            });
            setPricingId(initialPricingId);
          });
        }
      } catch (err) {
        handleRequestError(err as ResponseError);
        handleRequestDetailsError(err as ResponseError);
      }
    }
    getInitialRequest();
  }, [formVariant]);

  const getNewPricing = async () => {
    let updatedPricing;
    try {
      if (formVariant === PricingFormVariants.PRICING) {
        updatedPricing = await api
          .getExistingPricing({
            pricingId: id as PricingId,
          })
          .unwrap();
      } else if (formVariant === PricingFormVariants.RFQ) {
        updatedPricing = await api
          .getIssuerPricing({ pricingId: id as PricingId })
          .unwrap();
      }
      updateCurrentPricing(updatedPricing);
    } catch (err) {
      handleRequestError(err as ResponseError);
      handleRequestDetailsError(err as ResponseError);
    }
  };

  const updateInterval =
    displayedFormVariant !== PricingFormVariants.NEW_PRICING ? 5000 : null;
  useInterval(getNewPricing, updateInterval);

  async function updatePricingHandler(body: UpdatePricingUsingPostApiArg) {
    try {
      const resultPricing = await api.updatePricing(body).unwrap();
      updateCurrentPricing(resultPricing);
    } catch (err) {
      handleRequestError(err as ResponseError);
    }
  }

  async function cancelRfqHandler(body: UpdatePricingUsingPostApiArg) {
    try {
      const resultPricing = await api.cancelRfq(body).unwrap();
      updateCurrentPricing(resultPricing);
    } catch (err) {
      handleRequestError(err as ResponseError);
    }
  }

  async function createRfqHandler(body: UpdatePricingUsingPostApiArg) {
    try {
      const resultPricing = await api.createRfq(body).unwrap();
      updateCurrentPricing(resultPricing);
    } catch (err) {
      handleRequestError(err as ResponseError);
    }
  }

  async function updateRfqHandler(body: UpdateRFQUsingPostApiArg) {
    try {
      const resultRfq = await api.updateRfq(body).unwrap();
      updateCurrentPricing(resultRfq);
    } catch (err) {
      handleRequestError(err as ResponseError);
    }
  }

  function setValidationErrors(errors: Record<ParamName, ValidationError[]>) {
    Object.entries(errors).forEach(([paramName, errors]) => {
      formikRef?.current?.setFieldError(paramName, errors[0].message);
    });
  }

  function overWriteCurrentPricing(resultingPricing: PricingInProgress) {
    const updatedPricings = produce(pricings, (draft) => {
      draft[resultingPricing.id] = resultingPricing;
      delete draft[pricingId];
    });
    const updatedSelectedIssuers = produce(selectedIssuers, (draft) => {
      delete draft[pricingId];
    });
    ReactDOM.unstable_batchedUpdates(() => {
      setPricings(updatedPricings);
      setSelectedIssuers(updatedSelectedIssuers);
      setPricingId(resultingPricing.id);
    });
  }

  async function formSubmissionHandler(values: RequestFormValuesType) {
    try {
      const body = getFormSubmissionBody(
        values,
        selectedIssuers[pricingId],
        rfqType
      );
      const resultingPricing = (await api.submitForm(body).unwrap()) as Pricing;
      if (resultingPricing.state === PricingState.InProgress) {
        overWriteCurrentPricing(resultingPricing as PricingInProgress);
        const { id } = resultingPricing as PricingInProgress;
        navigate(`/creationhub/${CreationHubPages.PricingView}/${id}`);
      }
      if (
        resultingPricing.state === PricingState.InCreation &&
        resultingPricing.productValidationErrors !== null
      ) {
        setValidationErrors(resultingPricing.productValidationErrors);
      }
    } catch (err) {
      handleRequestError(err as ResponseError);
    }
  }

  async function validateForm(values: RequestFormValuesType) {
    try {
      const modifiedParams = getModifiedParams(values);
      const body = getFormValidationBody(values, modifiedParams);
      const resultPricing = (await api
        .postProductChanges(body)
        .unwrap()) as PricingInCreation;
      updateCurrentPricing(resultPricing);
      if (resultPricing.productValidationErrors !== null) {
        setValidationErrors(resultPricing.productValidationErrors);
      }
    } catch (err) {
      handleRequestError(err as ResponseError);
    }
  }

  function toggleIssuer(issuerId: IssuerId) {
    let issuers = selectedIssuers[pricingId] ?? [];
    const isSelected = issuers.includes(issuerId);
    if (isSelected) {
      issuers = issuers.filter((id) => id !== issuerId);
    } else {
      issuers = [...issuers, issuerId];
    }
    setSelectedIssuers({ ...selectedIssuers, [pricingId]: issuers });
  }

  function toggleAllIssuers(value: boolean) {
    let issuers: IssuerId[] = [];
    if (value) {
      issuers = Object.keys((displayedPricing as PricingInCreation)?.issuers);
    }
    setSelectedIssuers({ ...selectedIssuers, [pricingId]: issuers });
  }

  async function handleRequestClone() {
    let newPricing: Pricing;
    let newSelectedIssuers: string[];

    const cloneId = cloneCount + 1;
    const originalPricingId = pricingId.split(` - ${CloneLabel}`)[0];
    const newPricingId = `${originalPricingId} - ${CloneLabel}${cloneId}`;
    if (displayedFormVariant === PricingFormVariants.NEW_PRICING) {
      newPricing = produce(displayedPricing, (draft) => {
        return draft;
      }) as PricingInCreation;
      newSelectedIssuers = produce(selectedIssuers[pricingId], (draft) => {
        return draft;
      }) as string[];
    } else {
      let values = displayedPricing.product.params;
      const tradeDateName = 'INITIAL_FIXING_DATE';
      const tradeDateValue = (values[tradeDateName] as LocalDateValue).value;
      const today = new Date().toISOString().split('T')[0];
      if (
        typeof tradeDateValue === 'string' &&
        new Date(tradeDateValue).getTime() < new Date(today).getTime()
      ) {
        values = produce(values, (draft) => {
          (draft[tradeDateName] as LocalDateValue).value = today;
        });
      }
      const body = getFormValidationBody(values, []);
      newPricing = (await api
        .postProductChanges(body)
        .unwrap()) as PricingInCreation;
      newSelectedIssuers = [];
    }

    ReactDOM.unstable_batchedUpdates(() => {
      setCloneCount(cloneId);
      setPricings({ ...pricings, [newPricingId]: newPricing });
      setSelectedIssuers({
        ...selectedIssuers,
        [newPricingId]: newSelectedIssuers,
      });
      setPricingId(newPricingId);
    });
  }

  function closeRequestTab(tabId: string) {
    if (tabId === pricingId) {
      const currentTabIndex = Object.keys(pricings).indexOf(tabId);
      const newTabIndex = currentTabIndex > 0 ? currentTabIndex - 1 : 1;
      setPricingId(Object.keys(pricings)[newTabIndex]);
    }
    const updatedPricings = produce(pricings, (draft) => {
      delete draft[tabId];
    });
    const updatedSelectedIssuers = produce(selectedIssuers, (draft) => {
      delete draft[tabId];
    });
    setPricings(updatedPricings);
    setSelectedIssuers(updatedSelectedIssuers);
  }

  if (isInitialLoading) {
    return <Spinner />;
  }

  const shouldDisplayTabs =
    formVariant !== PricingFormVariants.NEW_PRICING ||
    Object.keys(pricings).length > 1;
  const onTabClick = (tabId: string) => {
    if (!isFormRequestPending) {
      setPricingId(tabId);
    }
  };

  function onKeyDown(keyEvent: KeyboardEvent) {
    if (keyEvent.key === 'Enter') {
      keyEvent.preventDefault();
    }
  }
  return (
    <>
      <LumaModal
        isOpen={!!errorCode}
        appElement="#root"
        onAfterOpen={() =>
          setTimeout(() => {
            getNewPricing();
            setErrorCode('');
          }, 4000)
        }
      >
        <h1>{errorCode}</h1>
        <p>{errorCode ? errorMessages[errorCode] : null}</p>
      </LumaModal>
      <Formik
        initialValues={memoizedGetFormValues()}
        enableReinitialize={true}
        validateOnChange={false}
        onSubmit={formSubmissionHandler}
        innerRef={formikRef}
      >
        {({
          values,
          setFieldValue,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
            <CH2Form
              onSubmit={handleSubmit}
              onKeyDown={onKeyDown}
              data-testid="pricing-form"
            >
              <PricingFormWrapper>
                <RequestTabsRow>
                  {shouldDisplayTabs && (
                    <RequestTabs
                      activeTab={pricingId}
                      requestTabs={Object.keys(pricings)}
                      onTabClick={onTabClick}
                      formVariant={formVariant}
                      closeTab={closeRequestTab}
                    />
                  )}
                </RequestTabsRow>
                <FormsRow>
                  <FormLeftPanel mode={pricingMode}>
                    <ConfigurableFormGroups
                      pricing={displayedPricing}
                      values={values}
                      errors={errors}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      handleValidation={validateForm}
                      setFieldValue={setFieldValue}
                      isEditable={isFormEditable}
                    />
                  </FormLeftPanel>
                  <FormRightPanel mode={pricingMode}>
                    <UpperRightGroup>
                      <BottomRightGroup>
                        <ButtonsGroup>
                          <LumaButton
                            size="small"
                            variant="secondary"
                            data-testid="button-clone"
                            onClick={handleRequestClone}
                          >
                            Clone
                          </LumaButton>
                        </ButtonsGroup>
                      </BottomRightGroup>
                      <FormGroupWrapper>
                        {displayedFormVariant ===
                          PricingFormVariants.NEW_PRICING && (
                          <QuotingInCreation
                            issuers={
                              (displayedPricing as PricingInCreation)?.issuers
                            }
                            selectedIssuers={selectedIssuers[pricingId]}
                            toggleIssuer={toggleIssuer}
                            toggleAllIssuers={toggleAllIssuers}
                          />
                        )}
                        {displayedFormVariant ===
                          PricingFormVariants.PRICING && (
                          <QuotingInProgress
                            pricing={displayedPricing as PricingInProgress}
                            updatePricing={updatePricingHandler}
                            isMutationPending={
                              api.isLoading.updatePricing ||
                              api.isLoading.cancelRfq
                            }
                            cancelRfq={cancelRfqHandler}
                            createRfq={createRfqHandler}
                          />
                        )}
                        {displayedFormVariant === PricingFormVariants.RFQ && (
                          <RFQ
                            rfq={displayedPricing as Rfq}
                            updateRfq={updateRfqHandler}
                            isUpdateRfqPending={api.isLoading.updateRfq}
                          />
                        )}
                      </FormGroupWrapper>
                      {formVariant === PricingFormVariants.RFQ &&
                        (displayedPricing as Rfq)?.actions?.includes(
                          RfqIssuerAction.ADD_DOCUMENT
                        ) && (
                          <FormGroupWrapper>
                            <DocumentRequests
                              rfq={displayedPricing as Rfq}
                              updateRfq={updateCurrentPricing}
                            />
                          </FormGroupWrapper>
                        )}
                    </UpperRightGroup>
                    <BottomRightGroup>
                      <ButtonsGroup>
                        {isFormEditable &&
                          (
                            Object.keys(RfqTypeEnum) as Array<
                              keyof typeof RfqTypeEnum
                            >
                          ).map((type) => (
                            <LumaButton
                              disabled={disableSubmitButtons}
                              variant="primary"
                              size="large"
                              className="button"
                              type="submit"
                              data-testid={`button-price_${type}`}
                              key={type}
                              onClick={() => setRfqType(RfqTypeEnum[type])}
                              fullWidth={true}
                            >
                              {formatTypeLabel(type)} Price
                            </LumaButton>
                          ))}
                      </ButtonsGroup>
                    </BottomRightGroup>
                  </FormRightPanel>
                </FormsRow>
                <Footer data-testid="footer">
                  <PricingFormFooter
                    pricingMode={pricingMode}
                    setPricingMode={setPricingMode}
                  />
                </Footer>
              </PricingFormWrapper>
            </CH2Form>
          );
        }}
      </Formik>
    </>
  );
}
