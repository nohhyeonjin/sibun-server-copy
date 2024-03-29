import { prisma } from "../../../generated/prisma-client";

export default {
  RoomOrder: {
    chatRoom: ({ id }) => prisma.roomOrder({ id }).chatRoom(),
    individualOrderList: ({ id }) => prisma.roomOrder({ id }).individualOrderList()
  },
  IndividualOrder: {
    user: ({ id }) => prisma.individualOrder({ id }).user(),
    menuList: ({ id }) => prisma.individualOrder({ id }).menuList(),
    roomOrder: ({ id }) => prisma.individualOrder({ id }).roomOrder()
  },
  DetailIndividualOrder: {
    menu: ({ id }) => prisma.detailIndividualOrder({ id }).menu(),
    IndividualOrder: ({ id }) => prisma.detailIndividualOrder({ id }).IndividualOrder()
  },
  TotalDetailIndividual: {
    menu: ({ id }) => prisma.totalDetailIndividual({ id }).menu(),
    storeOrder: ({ id }) => prisma.totalDetailIndividual({ id }).storeOrder()
  }
}