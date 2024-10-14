import { Flex, Typography } from '@strapi/design-system';
import { AddButton } from './controls/AddButton';

export const Header = ({ count, action }: { count: number; action: () => void }) => {
  return (
    <Flex alignItems="center" justifyContent="space-between" padding={['0px', '40px']}>
      <Flex direction="column" alignItems="flex-start">
        <Typography variant="alpha" fontWeight="bold" textColor="neutral800" as="h2">
          Entry
        </Typography>
        <Typography variant="beta" fontWeight="regular" textColor="#a5a5ba" as="h3">
          {`${count} entries found`}
        </Typography>
      </Flex>
      <AddButton variant="primary" action={action} />
    </Flex>
  );
};
