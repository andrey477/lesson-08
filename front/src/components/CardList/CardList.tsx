import React from "react";
import block from "bem-cn";

interface Props<T> {
  data: T[],
  renderNode: (item: T, index: number) => React.ReactNode,
  className?: string
}

const b = block('card-list')

export class CardList<T> extends React.Component<Props<T>> {

  render() {
    const {data, renderNode, className} = this.props

    return (
      <div className={b({}).mix(className)}>
        {data.map((item, index) => (
          renderNode(item, index)
        ))}
      </div>
    )
  }
}
