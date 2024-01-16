import React from 'react'
import RcInputNumber from 'rc-input-number'
import type { InputNumberProps as RcInputNumberProps } from 'rc-input-number'

// export interface InputNumberProps {

// }

const InputNumber: React.FC<RcInputNumberProps> = (props) => {
  return <RcInputNumber {...props} />
}

export default InputNumber
