import { Flex, SingleSelect, SingleSelectOption, Typography } from '@strapi/design-system';

export const PaginationSelect = ({
  pageSize,
  onPageSizeChange,
}: {
  pageSize: number;
  onPageSizeChange: (value: number) => void;
}) => {
  const selectOptions = [10, 20, 50, 100];

  return (
    <Flex alignItems="center" justifyContent="flex-start" gap="8px">
      <SingleSelect size="S" value={pageSize} onChange={(value: number) => onPageSizeChange(value)}>
        {selectOptions.map((option) => (
          <SingleSelectOption key={`option-${option}`} value={option}>
            {option}
          </SingleSelectOption>
        ))}
      </SingleSelect>
      <Typography as="span" variant="omega" fontWeight="regular" textColor="#a5a5ba">
        Entries per page
      </Typography>
    </Flex>
  );
};
