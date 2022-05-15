export const isRequired = () => (value) => !!value || 'Ce champs est requis.'
export const min = () => (value) => (!!value && value.length > 4) || '8 caractères minimum'
