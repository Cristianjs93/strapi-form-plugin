import { useEffect, useState } from 'react';
import useForm from '../hooks/useForm';
import IEntry from '../models/IEntry';
import EntryService from '../services/EntryService';
import { PageLoader } from '../components/ui/PageLoader';
import { Box, EmptyStateLayout } from '@strapi/design-system';
import { Header } from '../components/Header';
import { Illo } from '../components/Illo';
import { AddButton } from '../components/controls/AddButton';
import { FileDownload } from '../components/FileDownload';
import { EntriesTable } from '../components/EntriesTable';
import { TablePagination } from '../components/TablePagination';
import { FormModal } from '../components/FormModal';
import { EntriesForm } from '../components/EntriesForm';
import { showError, showSuccess } from '../components/ui/Toast';

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [entries, setEntries] = useState<IEntry[]>([]);
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    total: 0,
  });

  const form = useForm();

  useEffect(() => {
    (async () => await fetchData())();
  }, []);

  const fetchData = async (page = 1, pageSize = pagination.pageSize) => {
    try {
      !isLoading && setIsLoading(true);
      const { data, pagination } = await EntryService.getPaginatedEntries(page, pageSize);
      setEntries(data);
      setPagination(pagination);
      setIsLoading(false);
    } catch (err: any) {
      showError(err.message);
    }
  };

  const handleModalClose = () => {
    setIsEdit(false);
    form.resetForm();
    setOpen(false);
  };

  const handleEditClick = (entry: IEntry) => {
    setIsEdit(true);
    form.setValues(entry);
    setOpen(true);
  };

  const handleConfirmDelete = async (id: string) => {
    try {
      const { message } = await EntryService.deleteEntry(id);
      showSuccess(message);
      fetchData();
    } catch (err: any) {
      showError(err.message);
    }
  };

  const handleSubmitFinish = () => {
    setOpen(false);
    setIsEdit(false);
    form.resetForm();
    fetchData();
  };

  const handlePageSizeChange = (value: number) => {
    setPagination((prev) => ({ ...prev, pageSize: value }));
    fetchData(1, value);
  };

  return isLoading ? (
    <PageLoader />
  ) : (
    <Box padding={10} background="neutral100">
      <Header count={pagination.total} action={() => setOpen(true)} />
      {!entries.length ? (
        <EmptyStateLayout
          icon={<Illo />}
          content="No content found"
          action={<AddButton variant="secondary" action={() => setOpen(true)} />}
        />
      ) : (
        <>
          <FileDownload />
          <EntriesTable
            entries={entries}
            onEdit={handleEditClick}
            onConfirmDelete={handleConfirmDelete}
          >
            <TablePagination
              pagination={pagination}
              onPageSizeChange={handlePageSizeChange}
              fetchData={fetchData}
            />
          </EntriesTable>
        </>
      )}
      <FormModal open={open} onClose={handleModalClose}>
        <EntriesForm form={form} isEdit={isEdit} onSubmitFinish={handleSubmitFinish} />
      </FormModal>
    </Box>
  );
};
