import { useEffect, useState } from 'react';
import IEntry from '../models/IEntry';
import EntryService from '../services/EntryService';
import { Flex } from '@strapi/design-system';
import { ActionButton } from './controls/ActionButton';
import { Archive, File } from '@strapi/icons';

export const FileDownload = () => {
  const [entries, setEntries] = useState<IEntry[]>([]);

  useEffect(() => {
    (async () => {
      const entries = await EntryService.getAllEntries();
      setEntries(entries);
    })();
  }, []);

  const handleDownloadJson = () => {
    const jsonContent = JSON.stringify(entries, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'entries.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadCsv = () => {
    const headers = Object.keys(entries[0]).join(',') + '\n';
    const rows = entries
      .map((entry) =>
        Object.values(entry)
          .map((value) => (value === null ? 'null' : value))
          .join(',')
      )
      .join('\n');

    const csvContent = headers + rows;
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'entries.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Flex justifyContent="flex-end" gap="10px" padding={['20px', '40px', '0px', '40px']}>
      <ActionButton icon={<Archive />} action={handleDownloadJson} isDisabled={!entries.length} />
      <ActionButton icon={<File />} action={handleDownloadCsv} isDisabled={!entries.length} />
    </Flex>
  );
};
