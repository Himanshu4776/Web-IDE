import React from 'react'
import { useToasts, Button } from 'react-toast-notifications'

export const ToastDemo = ({ content }) => {
  const { addToast } = useToasts()
  return (
    <Button onClick={() => addToast(content, {
      appearance: 'success',
      autoDismiss: true,
    })}>
      Welcome to this front-end ide.
      Let's start practicing😍.
    </Button>
  )
}