import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TablePagination from '@mui/material/TablePagination'

import { useTableContent } from '../../services/hooks/useTableContent'
import { ContentType } from '../../services/hooks/useTableContent/types'

import { BodyRow } from './styled'

interface TableContentProps {
  contentType: ContentType
  token: string
}

const ABSENCE_FEATURE_NUMBER = -1

export const TableContent = ({ contentType, token }: TableContentProps) => {
  const { requestData, data } = useTableContent()
  const [page, setPage] = useState(0)

  useEffect(() => {
    requestData('initial', contentType, token, null)
    setPage(0)
  }, [contentType, token, requestData])

  const columns = useMemo(() => (data ? Object.keys(data.results[0]) : []), [data])
  const handlePageChange = useCallback(
    (_: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
      requestData(newPage > page ? 'next' : 'prev', contentType, token, data)
      setPage(newPage)
    },
    [page, contentType, token, data, requestData]
  )

  return (
    <>
      <TableContainer sx={{ minHeight: 600 }}>
        <Table sx={{ width: '100%' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              {columns.map((key) => (
                <TableCell key={key}>{key}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.results.map((elem: any, index: any) => (
                <BodyRow key={elem.name}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  {columns.map((key) => (
                    <TableCell component="th" scope="row">
                      {elem[key]}
                    </TableCell>
                  ))}
                </BodyRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{ overflow: 'hidden' }}
        count={ABSENCE_FEATURE_NUMBER}
        component="div"
        rowsPerPage={10}
        rowsPerPageOptions={[ABSENCE_FEATURE_NUMBER]}
        page={page}
        onPageChange={handlePageChange}
        backIconButtonProps={{ disabled: !data?.previous }}
        nextIconButtonProps={{ disabled: !data?.next }}
      />
    </>
  )
}
