import IPagination from '../models/IPagination';
import { Flex } from '@strapi/design-system';
import { PaginationSelect } from './controls/PaginationSelect';
import { PaginationControls } from './controls/PaginationControls';

export const TablePagination = ({
  pagination,
  onPageSizeChange,
  fetchData,
}: {
  pagination: IPagination;
  onPageSizeChange: (value: number) => void;
  fetchData: (page?: number, pageSize?: number) => void;
}) => {
  const pagesCount = Array.from(
    { length: Math.ceil(pagination.total / pagination.pageSize) },
    (_, i) => i + 1
  );

  const handlePageLinkClick = (pageNumber: number) => {
    fetchData(pageNumber, pagination.pageSize);
  };

  return (
    <Flex alignItems="center" justifyContent="space-between" paddingTop="32px">
      <PaginationSelect pageSize={pagination.pageSize} onPageSizeChange={onPageSizeChange} />
      <PaginationControls
        pagesCount={pagesCount}
        currentPage={pagination.page}
        onPageLinkClick={handlePageLinkClick}
      />
    </Flex>
  );
};
