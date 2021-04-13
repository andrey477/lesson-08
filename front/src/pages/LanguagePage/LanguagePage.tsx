import React from "react";
import block from "bem-cn";
import {useLanguageById} from "../../hooks/useLanguageById";
import {BasePageProps} from "../../types/base";
import {Language} from "../../types/language";
import {PageItem} from "../../components/PageItem/PageItem";
import {Spinner} from "../../components/Spinner/Spinner";

interface Props extends BasePageProps<Language.Data>{

}

const b = block('language-page')

export const LanguagePage: React.FC<Props> = ({match}) => {
  const {data, setId, loading} = useLanguageById(match.params.id)

  if (loading) {
    return <Spinner/>
  }
  console.log(loading)
  return (
    <div className={b()}>
      <PageItem
        title={data?.name || ''}
        editPath={`/ref/languages/${data?.id}/update`}
      />
    </div>
  )
}
