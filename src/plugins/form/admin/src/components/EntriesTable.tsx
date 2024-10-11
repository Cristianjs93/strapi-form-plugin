import IEntry from '../models/IEntry';
import {
  Box,
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Typography,
  VisuallyHidden,
} from '@strapi/design-system';
import { DeleteDialog } from './controls/DeleteDialog';
import { Pencil } from '@strapi/icons';

export const EntriesTable = ({
  entries,
  onEdit,
  onConfirmDelete,
}: {
  entries: IEntry[];
  onEdit: (entry: IEntry) => void;
  onConfirmDelete: (id: string) => void;
}) => {
  return (
    <Box padding={8} background="neutral100">
      <Table colCount={10} rowCount={10}>
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">ID</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Name</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Email</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Message</Typography>
            </Th>
            <Th>
              <VisuallyHidden>Actions</VisuallyHidden>
            </Th>
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
              <Td>
                <Flex gap="10px">
                  <Button variant="tertiary" startIcon={<Pencil />} onClick={() => onEdit(entry)} />
                  <DeleteDialog entryId={String(entry.id)} action={onConfirmDelete} />
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
