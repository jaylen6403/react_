import {
  SummaryGroup,
  SummaryTitleContainer,
  SummaryContainer,
  SummaryField,
  SummaryValue,
  SummaryTitle,
} from './PerformanceSummary.styles';

interface PerformanceSummaryElement {
  field: string;
  value: string | number;
}

interface PerformanceSummaryProps {
  data: PerformanceSummaryElement[];
  title: string;
}
// export const PerformanceSummary = ({
//   data,
//   title,
// }: PerformanceSummaryProps) => {
//   return (
//     <section>
//       <SummaryGroup>
//         <SummaryTitleContainer>
//           <SummaryTitle>{title}</SummaryTitle>
//         </SummaryTitleContainer>
//         <SummaryContainer>
//           {data.map((dataElement: PerformanceSummaryElement, index: number) => (
//             <div key={index}>
//               <SummaryField>{dataElement.field}</SummaryField>
//               <SummaryValue>{dataElement.value}</SummaryValue>
//             </div>
//           ))}
//         </SummaryContainer>
//       </SummaryGroup>
//     </section>
//   );
// };

export const PerformanceSummary = ({
  data,
  title,
}: PerformanceSummaryProps) => {
  return (
    <section>
      <SummaryGroup>
        <SummaryTitleContainer>
          <SummaryTitle>{title}</SummaryTitle>
        </SummaryTitleContainer>
        <SummaryContainer>
          {data.map((dataElement: PerformanceSummaryElement, index: number) => (
            <div key={index}>
              <SummaryField>
                {dataElement.field}:
                <SummaryValue> {dataElement.value}</SummaryValue>
              </SummaryField>
            </div>
          ))}
        </SummaryContainer>
      </SummaryGroup>
    </section>
  );
};
