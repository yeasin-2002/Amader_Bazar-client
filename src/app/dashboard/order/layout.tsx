import { Metadata } from "next"
import React from "react"
type Props = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Orders",
}

const OrderLayout = ({ children }: Props) => {
  return <section className="size-full  p-2">{children}</section>
}

export default OrderLayout