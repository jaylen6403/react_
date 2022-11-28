import { Spinner } from '@luma-fe-workspace/luma/dashboard';
import { productService } from '@luma-fe-workspace/redux';
import { EventDetailAccordion } from '../EventDetailAccordion';
import { MoreInfoTable } from '../MoreInfoTable';

const calculateUnderliers = (
  underlierList: productService.Underlier[] | undefined
) => {
  if (underlierList && underlierList?.length > 0) {
    return underlierList.reduce((acc, cur, idx) => {
      if (cur.symbol) {
        return idx === 0 ? cur.symbol : acc + ', ' + cur.symbol;
      } else {
        return acc;
      }
    }, '');
  } else {
    return '';
  }
};

const calculateProductDetails = (
  productDetailsData: productService.ProductDetails | undefined
) => {
  const callTypeOptions: string[] = [
    productDetailsData?.callType,
    productDetailsData?.numberNoCallPeriods !== null
      ? `${productDetailsData?.numberNoCallPeriods} NC`
      : undefined,
    productDetailsData?.callObservationFrequency,
  ].flatMap((option: string | undefined) => option || []);

  const callType = callTypeOptions.join(' / ');

  const couponBarrerOptions: string[] = [
    productDetailsData?.couponType,
    productDetailsData?.couponObservationFrequency,
  ].flatMap((option: string | undefined) => option || []);

  const couponBarrier = couponBarrerOptions.join(' / ');

  return [
    ['Issuer', productDetailsData?.issuer ?? ''],
    ['Calculation Agent', productDetailsData?.calculationAgent ?? ''],
    ['Structure Type', productDetailsData?.structureType ?? ''],
    ['Asset Class', productDetailsData?.assetClass ?? ''],
    ['Underlying Tickers', calculateUnderliers(productDetailsData?.underliers)],
    ['Term (Remaining)', String(productDetailsData?.timeToMaturity ?? '')],
    ['Call Type / NC / Freq.', callType],
    ['Coupon Type / Freq.', couponBarrier],
    [
      'Coupon Barrier',
      productDetailsData?.couponBarrier
        ? productDetailsData?.couponBarrier + '%'
        : '',
    ],
    ['Protection Level', String(productDetailsData?.protectionLevel ?? '')],
    [
      'Principal Threshold',
      String(
        productDetailsData?.couponBarrier
          ? productDetailsData?.couponBarrier + '%'
          : ''
      ),
    ],
    [
      'Issuer Size',
      String(productDetailsData?.issueSize?.toLocaleString() ?? ''),
    ],
    ['Denomination', String(productDetailsData?.denomination ?? '')],
  ];
};
interface Props {
  id: string | undefined;
}

export const ProductDetails = ({ id }: Props) => {
  const { isLoading: productDetailsIsLoading, data: productDetailsData } =
    productService.useGetProductDetailsUsingGetQuery({ cusip: id ?? '' });

  const productDetails: string[][] =
    calculateProductDetails(productDetailsData);

  return (
    <EventDetailAccordion header="Product Details">
      {productDetailsData && !productDetailsIsLoading ? (
        <MoreInfoTable rows={productDetails} />
      ) : (
        <Spinner />
      )}
    </EventDetailAccordion>
  );
};
