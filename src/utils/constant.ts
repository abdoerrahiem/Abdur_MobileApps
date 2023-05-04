export const API = 'https://apigenerator.dronahq.com/api'

export const defaultHeaderAxios = () => {
  return {
    headers: {
      'X-SECRET-TOKEN':
        '$2a$16$TlB6hYDRMSF5HBgxImeaU.itfBOu881/lI4mSPMR0jYRnMXklQKp6',
      'Content-Type': 'application/json',
    },
  }
}

export const noImage =
  'https://archive.org/download/no-photo-available/no-photo-available.png'
