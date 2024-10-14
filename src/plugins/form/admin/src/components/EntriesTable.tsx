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
  children,
}: {
  entries: IEntry[];
  onEdit: (entry: IEntry) => void;
  onConfirmDelete: (id: string) => void;
  children: React.ReactElement;
}) => {
  return (
    <Box padding={['20px', '40px']}>
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
                  <DeleteDialog documentId={String(entry.documentId)} action={onConfirmDelete} />
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {children}
    </Box>
  );
};
