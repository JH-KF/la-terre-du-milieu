import S from "@sanity/desk-tool/structure-builder";
import { MdEuroSymbol } from 'react-icons/md'
import { GiInjustice } from "react-icons/gi"
import { ImMap } from "react-icons/im"

export default () =>
  S.list()
    .title('Pages')
    .items([
        S.listItem()
          .title('Notre région')
          .icon(ImMap)
          .child(
            S.list()
              .title("Notre région")
              .items([
                // List out the rest of the document types, but filter out the config type
                ...S.documentTypeListItems()
                  .filter(listItem => !["legalMentions", "locationContract"].includes(listItem.getId())),
              ])
          ), 
      S.listItem()
      .title('Mentions légales')
      .icon(GiInjustice)
      .child(
        S.editor()
          .title("Mentions légales")
          .schemaType('legalMentions')
          .documentId('legal-mentions')
      ),
      S.listItem()
      .title('Conditions générales de location')
      .icon(MdEuroSymbol)
      .child(
        S.editor()
          .title("Conditions générales de location")
          .schemaType('locationContract')
          .documentId('location-contract')
      ),
      S.divider()
    ])