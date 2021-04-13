import React from "react";
import block from "bem-cn";
import {useLanguageGetAll} from "../../hooks/useLanguageGetAll";
import {Language} from "../../types/language";
import {CardList} from "../../components/CardList/CardList";
import {Spinner} from "../../components/Spinner/Spinner";
import {Card} from "../../components/Card/Card";
import './LanguagePageAll.css'

interface Props {

}

const b = block('language-page-all')

export const LanguagePageAll: React.FC<Props> = () => {
  const {data, loading} = useLanguageGetAll()

  const renderNode = (item: Language.Data, index: number): React.ReactNode => {
    return (
      <div className={b('item')}>
        <Card
          title={item.name}
          path={`/ref/languages/${item.id}`}
        />
      </div>
    )
  }

  if (loading) {
    return <Spinner/>
  }

  return (
    <div className={b()}>
      <CardList<Language.Data>
        data={data}
        renderNode={renderNode}
      />
    </div>
  )
}
