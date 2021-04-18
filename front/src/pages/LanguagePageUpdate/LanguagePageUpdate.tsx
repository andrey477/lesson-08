import React, {useMemo} from "react";
import './LanguagePageUpdate.css'
import block from "bem-cn";
import {LanguageForm} from "../../components/Forms/LanguageForm/LanguageForm";
import {BasePageProps} from "../../types/base";
import {useLanguageById} from "../../hooks/useLanguageById";
import {PageContainer} from "../../components/PageContainer/PageContainer";
import {Spinner} from "../../components/Spinner/Spinner";

interface Props extends BasePageProps<{ id?: string }> {

}

const b = block('language-page-update')

export const LanguagePageUpdate: React.FC<Props> = ({match}) => {
  const id = useMemo<number | undefined>(() => {
    return match.params.id ? +match.params.id : undefined
  }, [match])

  const {data, loading, setId} = useLanguageById(id)

  if (loading) {
    return <Spinner/>
  }

  return (
    <PageContainer>
      <div className={b()}>
        <LanguageForm
          data={data}
        />
      </div>
    </PageContainer>
  )
}
