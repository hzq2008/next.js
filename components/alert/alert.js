/*
 * @Author: huangzuqiang
 * @Date: 2021-11-16 10:54:17
 * @LastEditTime: 2021-11-16 10:54:17
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \nextjs-blob\components\alert\alert.js
 */
import styles from './alert.module.css'
import cn from 'classnames'

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </div>
  )
}