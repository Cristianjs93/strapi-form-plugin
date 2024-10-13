import { NextLink, Pagination, PageLink, PreviousLink } from '@strapi/design-system';

export const PaginationControls = ({
  pagesCount,
  currentPage,
  onPageLinkClick,
}: {
  pagesCount: number[];
  currentPage: number;
  onPageLinkClick: (pageNumber: number) => void;
}) => {
  return (
    <Pagination activePage={Number(currentPage)} pageCount={pagesCount.length}>
      <PreviousLink onClick={() => onPageLinkClick(currentPage - 1)} />
      {pagesCount.map((number) => (
        <PageLink key={`page-${number}`} number={number} onClick={() => onPageLinkClick(number)} />
      ))}
      <NextLink onClick={() => onPageLinkClick(currentPage + 1)} />
    </Pagination>
  );
};
