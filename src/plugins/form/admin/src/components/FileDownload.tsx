import { useCallback, useEffect, useState } from 'react';
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

  const downloadFile = useCallback((content: string, fileName: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  }, []);

  const handleDownloadJson = useCallback(() => {
    const jsonContent = JSON.stringify(entries, null, 2);
    downloadFile(jsonContent, 'entries.json', 'application/json');
  }, [entries, downloadFile]);

  const handleDownloadCsv = useCallback(() => {
    const headers = Object.keys(entries[0] || {}).join(',') + '\n';
    const rows = entries
      .map((entry) =>
        Object.values(entry)
          .map((value) => (value === null ? 'null' : value))
          .join(',')
      )
      .join('\n');
    const csvContent = headers + rows;
    downloadFile(csvContent, 'entries.csv', 'text/csv');
  }, [entries, downloadFile]);

  return (
    <Flex justifyContent="flex-end" gap="10px" padding={['20px', '40px', '0px', '40px']}>
      <ActionButton
        icon={<Archive />}
        tooltip="Download JSON"
        action={handleDownloadJson}
        isDisabled={!entries.length}
      />
      <ActionButton
        icon={<File />}
        tooltip="Download CSV"
        action={handleDownloadCsv}
        isDisabled={!entries.length}
      />
    </Flex>
  );
};
