import { clsx } from 'clsx'

export default function Button({ children, variant = 'primary', href, onClick, className }) {
  const cls = clsx('btn', variant === 'primary' ? 'btn-primary' : 'btn-secondary', className)

  if (href) {
    return <a href={href} className={cls}>{children}</a>
  }
  return <button onClick={onClick} className={cls}>{children}</button>
}
