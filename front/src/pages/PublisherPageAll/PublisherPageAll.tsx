import React, {ChangeEventHandler, useCallback, useState} from "react";
import block from "bem-cn";
import {debounce} from 'lodash'
import {usePublisherGetAll} from "../../hooks/usePublisherGetAll";
import {Input} from "../../components/Input/Input";
import {Spinner} from "../../components/Spinner/Spinner";
import {CardList} from "../../components/CardList/CardList";
import {Publisher} from "../../types/Publisher";
import {Language} from "../../types/language";
import {Card} from "../../components/Card/Card";
import './PublisherPageAll.css'

interface Props {

}

const b = block('publisher-page-all')

export const PublisherPageAll: React.FC<Props> = () => {
  const {data, loading, setSearch} = usePublisherGetAll()

  const handlerChange = useCallback<ChangeEventHandler<HTMLInputElement>>(event => {
    setSearch(event.target.value)
  }, [setSearch])

  const debounceHandlerChange = useCallback(debounce(handlerChange, 500), [handlerChange])

  const renderNode = (item: Publisher.Data, index: number): React.ReactNode => {
    return (
      <div className={b('item')}>
        <Card
          title={item.name}
          path={`/ref/publisher/${item.id}`}
        />
      </div>
    )
  }

  return (
    <div className={b()}>
      <Input
        name={'search'}
        className={b('input')}
        placeholder={'Введите название книги:'}
        onChange={debounceHandlerChange}
      />
      {loading && (
        <Spinner/>
      )}
      <h3 className={b('title')}>Результаты поиска:</h3>
      <CardList<Publisher.Data>
        data={data}
        renderNode={renderNode}
      />
    </div>
  )
}
