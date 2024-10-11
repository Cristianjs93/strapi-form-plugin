import { Flex, Typography } from '@strapi/design-system';
import { AddButton } from './controls/AddButton';

export const Header = ({ count, action }: { count: number; action: () => void }) => {
  return (
    <Flex direction="row" alignItems="center" justifyContent="space-between" marginBottom="40px">
      <Flex direction="column" alignItems="center">
        <Typography variant="alpha" fontWeight="bold" textColor="neutral800" as="h2">
          Custom Plugin
        </Typography>
        <Typography variant="beta" fontWeight="regular" textColor="#a5a5ba" as="h3">
          {`${count} entries found`}
        </Typography>
      </Flex>
      <AddButton variant="primary" action={action} />
    </Flex>
  );
};
