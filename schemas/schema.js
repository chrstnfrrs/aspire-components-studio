import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import classes from './class'
import component from './component'
import helper from './helper'
import link from './link'
import links from './links'
import linkOptions from './linkOptions'
import navigation from './navigation'
import navigationOptions from './navigationOptions'
import prop from './prop'
import settings from './settings'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    classes,
    component,
    helper,
    link,
    links,
    linkOptions,
    navigation,
    navigationOptions,
    prop,
    settings,
  ]),
})
