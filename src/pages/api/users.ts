import {NextApiRequest, NextApiResponse} from 'next'

// eslint-disable-next-line import/no-anonymous-default-export
export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Junio'},
    {id: 3, name: 'Helena'},
  ]

  return response.json(users)
}