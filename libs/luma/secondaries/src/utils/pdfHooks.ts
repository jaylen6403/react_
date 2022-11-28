import { useEffect, useState } from 'react';
import {
  secondariesSlice,
  useAppDispatch,
  useGetMarketplaceProductDocumentPdfUsingGetQueryEnhanced,
  useGetProductDocumentPdfUsingGetQueryEnhanced,
} from '@luma-fe-workspace/redux';

interface ProductDocumentObjectType {
  cusip: string;
  documentType: 'TERM_SHEET' | 'PERFORMANCE_REPORT' | '';
}

export const useGetProductDocumentUsingGetQuery = () => {
  const dispatch = useAppDispatch();
  const [productDocumentObject, setProductDocumentObject] =
    useState<ProductDocumentObjectType>({
      cusip: '',
      documentType: '',
    });

  const productDocumentResponse =
    useGetMarketplaceProductDocumentPdfUsingGetQueryEnhanced(
      { cusip: productDocumentObject.cusip, documentType: 'TERM_SHEET' },
      {
        skip:
          !productDocumentObject.cusip ||
          productDocumentObject.documentType !== 'TERM_SHEET',
      }
    );

  useEffect(() => {
    if (
      productDocumentResponse.isSuccess &&
      !productDocumentResponse.isFetching
    ) {
      window.open(window.URL.createObjectURL(productDocumentResponse.data));
      setProductDocumentObject({ documentType: '', cusip: '' });
    }
  }, [productDocumentResponse]);

  const lifecycleDocumentResponse =
    useGetProductDocumentPdfUsingGetQueryEnhanced(
      {
        cusip: productDocumentObject.cusip,
        documentType: 'PERFORMANCE_REPORT',
      },
      {
        skip:
          !productDocumentObject.cusip ||
          productDocumentObject.documentType !== 'PERFORMANCE_REPORT',
      }
    );

  useEffect(() => {
    if (
      lifecycleDocumentResponse.isSuccess &&
      !lifecycleDocumentResponse.isFetching
    ) {
      window.open(window.URL.createObjectURL(lifecycleDocumentResponse.data));
      setProductDocumentObject({
        documentType: '',
        cusip: '',
      });
    }
  }, [lifecycleDocumentResponse]);

  useEffect(() => {
    if (productDocumentResponse.isError || lifecycleDocumentResponse.isError) {
      dispatch(
        secondariesSlice.actions.setMessageObject({
          title: `Unable to retrieve document`,
          messageType: 'error',
          isMessageShowing: true,
        })
      );
    }
  }, [dispatch, lifecycleDocumentResponse, productDocumentResponse]);

  return {
    setProductDocumentObject,
  };
};
