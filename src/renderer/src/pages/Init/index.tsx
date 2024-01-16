import React, { useState } from 'react'
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css'
import 'react-clock/dist/Clock.css'
import InputNumber from 'rc-input-number'

import styles from './index.module.less'

const Init: React.FC = () => {
  const [resetMinus, setResetMinus] = useState<number>(20)
  return (
    <div className={styles.box}>
      <h3>休息一下-缓解疲劳</h3>
      <div className={styles.form}>
        <div className={styles['form-item']}>
          <label>每</label>
          <InputNumber value={resetMinus} onChange={(v) => setResetMinus(v)} />
          <span>分钟</span>
        </div>
        <div className={styles['form-item']}>
          <label>休息</label>
          <InputNumber />
          <span>秒</span>
        </div>
      </div>
    </div>
  )
}
export default Init
