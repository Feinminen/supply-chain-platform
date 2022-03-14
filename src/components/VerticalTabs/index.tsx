import React, { useCallback, memo } from 'react'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import { ContentType } from '../../services/hooks/useTableContent/types'
import { StyledTabs } from './styled'

const a11yProps = (index: number) => ({
  id: `vertical-tab-${index}`,
  'aria-controls': `vertical-tabpanel-${index}`,
})

const TAB_ELEMENTS: ContentType[] = ['suppliers', 'quotes']

interface VerticalTabsProps {
  onChange: (title: ContentType) => void
}

export const VerticalTabs = memo(({ onChange }: VerticalTabsProps) => {
  const [value, setValue] = React.useState(0)
  const handleChange = useCallback(
    (_: React.SyntheticEvent, index: number) => {
      setValue(index)
      onChange(TAB_ELEMENTS[index])
    },
    [onChange]
  )

  return (
    <Box>
      <StyledTabs orientation="vertical" value={value} onChange={handleChange} variant="fullWidth">
        {TAB_ELEMENTS.map((elem, index) => (
          <Tab key={index} label={elem} {...a11yProps(index)} />
        ))}
      </StyledTabs>
    </Box>
  )
})

VerticalTabs.displayName = 'VerticalTabs'
