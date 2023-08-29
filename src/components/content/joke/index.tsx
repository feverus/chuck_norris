import C from '../content.module.scss'
import * as I from '~Store/storeInterfaces'

export function Joke(props: {item: I.ApiSearchDataItem}) {
  const {id, url, value, created_at} = props.item
  const date = new Date(created_at).toLocaleString('ru', {dateStyle: 'short'})

  return (
    <a
      href={url}
      className={C.jokeBlock}
      target='_blank'
      rel='noreferrer'
    >
      <div className={C.text}>{value}</div>
      <div className={C.id}>{id}</div>
      <div className={C.date}>{date}</div>      
    </a>
  )
}