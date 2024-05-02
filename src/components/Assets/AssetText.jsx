export const AssetText = ({value}) => {
  return <span dangerouslySetInnerHTML={{__html: value.replaceAll('\n\n', '<br/>')}}/>
}
