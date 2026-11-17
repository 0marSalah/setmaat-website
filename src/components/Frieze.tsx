export function Frieze({ thin = false }: { thin?: boolean }) {
  return <div className={thin ? 'frieze thin' : 'frieze'} role="presentation" />
}
