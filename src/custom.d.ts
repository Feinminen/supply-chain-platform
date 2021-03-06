declare module '*.svg' {
  import React from 'react'
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGElement>>
  const value: string
  // eslint-disable-next-line import/no-default-export
  export default value
}

declare module '*.jpg' {
  import React from 'react'
  export const ReactComponent: React.FunctionComponent
  const value: string
  // eslint-disable-next-line import/no-default-export
  export default value
}
