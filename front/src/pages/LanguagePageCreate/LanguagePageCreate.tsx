import React from "react";
import './LanguagePageCreate.css'
import block from "bem-cn";
import {LanguageForm} from "../../components/Forms/LanguageForm/LanguageForm";
import {PageContainer} from "../../components/PageContainer/PageContainer";

interface Props {

}

const b = block('language-page-create')

export const LanguagePageCreate: React.FC<Props> = () => {
  return (
    <PageContainer>
      <div className={b()}>
        <LanguageForm
          data={null}
        />
      </div>
    </PageContainer>
  )
}
