import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegistes: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return (
    [...new Array(to - from)].map((_, index) => {
      return from + index + 1
    })
      .filter(page => page > 0)
  )
}

export function Pagination({
  totalCountOfRegistes,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegistes / registersPerPage)

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>{totalCountOfRegistes}</strong>
      </Box>
      <Stack direction='row' spacing="2" >

        {
          (currentPage > (siblingsCount + 1) && (
            <>
              <PaginationItem onPageChange={onPageChange} number={1} />
              {currentPage > (siblingsCount + 2) && (

                <Text color="gray.300" width="8" textAlign="center"  >...</Text>
              )}
            </>

          ))
        }

        {
          previousPages.length > 0 && previousPages.map((page) => (
            <PaginationItem onPageChange={onPageChange} key={page} number={page} />

          ))
        }
        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent={true} />
        {
          nextPages.length > 0 && nextPages.map((page) => (
            <PaginationItem onPageChange={onPageChange} key={page} number={page} />

          ))
        }

        {
          (currentPage < (lastPage - siblingsCount) && (
            <>
              {(currentPage + 1 + siblingsCount) < (lastPage) && (

                <Text color="gray.300" width="8" textAlign="center"  >...</Text>
              )}
              <PaginationItem onPageChange={onPageChange} number={lastPage} />
            </>

          ))
        }

      </Stack>
    </Stack>
  )
}