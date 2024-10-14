import IEntry from '../models/IEntry';
import { Box, Flex, Table, Tbody, Td, Th, Thead, Tr, Typography } from '@strapi/design-system';
import { ActionButton } from './controls/ActionButton';
import { DeleteDialog } from './controls/DeleteDialog';
import { Pencil } from '@strapi/icons';

export const EntriesTable = ({
  entries,
  onEdit,
  onConfirmDelete,
  children,
}: {
  entries: IEntry[];
  onEdit: (entry: IEntry) => void;
  onConfirmDelete: (id: string) => void;
  children: React.ReactElement;
}) => {
  const columns = ['ID', 'Name', 'Email', 'Message', 'Actions'];

  const actionButtons = (entry: IEntry) => (
    <Flex gap="10px">
      <ActionButton
        variant="secondary"
        icon={<Pencil />}
        tooltip="Edit"
        action={() => onEdit(entry)}
      />
      <DeleteDialog documentId={String(entry.documentId)} confirmAction={onConfirmDelete} />
    </Flex>
  );

  return (
    <Box padding={['20px', '40px']}>
      <Table colCount={10} rowCount={10}>
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th key={`column-${column}`}>
                <Typography variant="sigma">{column}</Typography>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {entries.map((entry) => (
            <Tr key={entry.id}>
              <Td>
                <Typography textColor="neutral800">{entry.id}</Typography>
              </Td>
              <Td>
                <Typography textColor="neutral800">{entry.name}</Typography>
              </Td>
              <Td>
                <Typography textColor="neutral800">{entry.email}</Typography>
              </Td>
              <Td>
                <Typography textColor="neutral800">{entry.message}</Typography>
              </Td>
              <Td>{actionButtons(entry)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {children}
    </Box>
  );
};
