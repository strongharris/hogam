import { createFormHook } from '@tanstack/react-form'

import {
  Select,
  SubscribeButton,
  TextArea,
  TextField,
  Slider,
  Switch,
} from '../components/demo.FormComponents'
import { fieldContext, formContext } from './demo.form-context'

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    Select,
    TextArea,
    Slider,
    Switch,
  },
  formComponents: {
    SubscribeButton,
  },
  fieldContext,
  formContext,
})
