import React from 'react'

import {
  Wrapper, 
  Markdown, 
  connect, 
  reduxWrapper, 
  configure,
  useTranslate,
  get
} from 'eventjuicer-site-components'

import settings from '../../settings'
import en from '../_markdown/legal-visitors-data-en.md'
import pl from '../_markdown/legal-visitors-data-pl.md'

const PageLegalVisitorsData = () => {


  const contents = {pl, en}
  const [translate, locale] = useTranslate()

  return (
    <Wrapper label="visitors.legal-gdpr.title">
    <Markdown>{get(contents, locale, pl)}</Markdown>
    </Wrapper>
  )
}

export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
  return await configure(store, {
    settings: settings,
    preload: [],
    cache: 300
  })
  
})

export default connect()(PageLegalVisitorsData);
