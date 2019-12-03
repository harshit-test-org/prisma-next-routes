import { Photon } from '@prisma/photon'

const photon = new Photon()

export default async (_req, res) => {
  const data = await photon.users.findMany();
  res.status(200).json(data)
}
