import React, { useCallback, useEffect, useMemo, useState, memo } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TablePagination from '@mui/material/TablePagination'

import { Loader } from '../Loader'
import { useTableContent } from '../../services/hooks/useTableContent'
import { ContentType } from '../../services/hooks/useTableContent/types'
import { SupplierCardModal } from '../SupplierCardModal'

import { BodyRow, LoaderWrapper, ErrorMessage } from './styled'

interface TableContentProps {
  contentType: ContentType
  token: string
}

const ABSENCE_FEATURE_NUMBER = -1
const ROWS_PER_PAGE = 10

export const TableContent = memo(({ contentType, token }: TableContentProps) => {
  const { requestData, isLoading, data, supplierDetails, setSupplierDetails, errorMessage } =
    useTableContent()
  const [page, setPage] = useState(0)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  useEffect(() => {
    requestData({ token, step: 'initial', contentType })
    setPage(0)
  }, [contentType, token, requestData])

  const columns = useMemo(() => (data ? Object.keys(data.results[0]) : []), [data])
  const handlePageChange = useCallback(
    (_: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
      requestData({ step: newPage > page ? 'next' : 'prev', contentType, token, data: data as any })
      setPage(newPage)
    },
    [page, contentType, token, data, requestData]
  )

  const handleRowClick = useCallback(
    (id: string) => {
      setIsModalOpen(true)
      requestData({ step: 'specificSupplier', token, id })
    },
    [requestData, token]
  )

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false)
    setSupplierDetails(null)
  }, [setSupplierDetails])

  const isRowClickable = contentType === 'suppliers'

  return (
    <>
      <TableContainer sx={{ minHeight: 600, position: 'relative' }}>
        {isLoading && (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
        {errorMessage ? (
          <ErrorMessage>errorMessage</ErrorMessage>
        ) : (
          <Table sx={{ width: '100%' }}>
            <TableHead>
              <TableRow>
                <TableCell>№</TableCell>
                {columns.map((key) => (
                  <TableCell sx={{ textTransform: 'capitalize' }} key={key}>
                    {key}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                // TS wrongly infer types of union arrays
                (data.results as any[]).map((elem: Record<string, string>, index: number) => (
                  <BodyRow
                    key={elem.id}
                    $isClickable={isRowClickable}
                    onClick={isRowClickable ? () => handleRowClick(elem.id) : undefined}
                  >
                    <TableCell component="th" scope="row">
                      {ROWS_PER_PAGE * page + index + 1}
                    </TableCell>
                    {columns.map((key) => (
                      <TableCell key={key} component="th" scope="row">
                        {elem[key]}
                      </TableCell>
                    ))}
                  </BodyRow>
                ))}
              {supplierDetails && (
                <SupplierCardModal
                  data={supplierDetails}
                  isOpen={isModalOpen}
                  onClose={handleModalClose}
                />
              )}
            </TableBody>
          </Table>
        )}
      </TableContainer>
      <TablePagination
        sx={{ overflow: 'hidden' }}
        count={ABSENCE_FEATURE_NUMBER}
        component="div"
        rowsPerPage={ROWS_PER_PAGE}
        rowsPerPageOptions={[ABSENCE_FEATURE_NUMBER]}
        page={page}
        onPageChange={handlePageChange}
        backIconButtonProps={{ disabled: !data?.previous || isLoading || !!errorMessage }}
        nextIconButtonProps={{ disabled: !data?.next || isLoading || !!errorMessage }}
      />
    </>
  )
})

TableContent.displayName = 'TableContent'
