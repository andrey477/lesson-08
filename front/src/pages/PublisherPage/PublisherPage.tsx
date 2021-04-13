import React from "react";
import block from "bem-cn";
import {Spinner} from "../../components/Spinner/Spinner";
import {BasePageProps} from "../../types/base";
import {Publisher} from "../../types/Publisher";
import {PageItem} from "../../components/PageItem/PageItem";
import {usePublisherById} from "../../hooks/usePublisherById";

interface Props extends BasePageProps<Publisher.Data> {

}

const b = block('publisher-page')

export const PublisherPage: React.FC<Props> = ({match}) => {
  const {data, setId, loading} = usePublisherById(match.params.id)

  if (loading) {
    return <Spinner/>
  }
  return (
    <div className={b()}>
      <PageItem
        title={data?.name || ''}
      />
    </div>
  )
}
