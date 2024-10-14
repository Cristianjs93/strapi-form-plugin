import { Flex, Typography } from '@strapi/design-system';

export default function Tooltip({ tooltip }: { tooltip: string }) {
  return (
    <Flex background="#ffffff" padding="6px" borderRadius="4px">
      <Typography fontSize="1rem" fontWeight="bold" textColor="#212134" as="span">
        {tooltip}
      </Typography>
    </Flex>
  );
}
